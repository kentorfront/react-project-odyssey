const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const dataFilePath = path.join(__dirname, 'ratings.json');

const readDataFromFile = async () => {
  try {
    const data = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
};

const writeDataToFile = async (data) => {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
};

let ratingsCache;

const initializeCache = async () => {
  ratingsCache = await readDataFromFile();
};

initializeCache();

app.get('/review', (req, res) => {
  res.json(ratingsCache);
});

app.get('/review/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const data = await readDataFromFile();
  const rating = data.find(r => r.id === id);
  
  if (rating) {
    res.json(rating);
  } else {
    res.status(404).json({ message: 'Rating not found' });
  }
});

app.post('/review', async (req, res) => {
  const { name, score, rDesc } = req.body;

  try {
    ratingsCache = await readDataFromFile();
    let user = ratingsCache.find(rating => rating.name === name);

    let lastElementId = ratingsCache.length > 0 
      ? Math.max(...ratingsCache.map(rating => rating.id)) 
      : 0;

    if (!user) {
      user = {
        id: lastElementId + 1,
        name,
        rDesc,
        score
      };
      ratingsCache.push(user);
    } else {
      user.score = score;
      user.rDesc = rDesc;
    }

    await writeDataToFile(ratingsCache);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error writing data', error });
  }
});

app.delete('/review/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  ratingsCache = ratingsCache.filter(r => r.id !== id);
  await writeDataToFile(ratingsCache);
  res.status(200).json({ message: `Review with ID ${id} deleted.` });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
