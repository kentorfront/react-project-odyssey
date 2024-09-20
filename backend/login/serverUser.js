const fs = require('fs');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const pathToFile = path.join(__dirname, 'users.json');

const readDataFromFile = () => {
    if (fs.existsSync(pathToFile)) {
        const data = fs.readFileSync(pathToFile, 'utf-8');
        return JSON.parse(data);
    }
    return [];
};

const writeDataToFile = (data) => {
    fs.writeFileSync(pathToFile, JSON.stringify(data, null, 2), 'utf-8');
};

let usersCache = readDataFromFile();

app.get('/user', (req, res) => {
    res.json(usersCache);
});

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = usersCache.find(u => u.id === id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.post('/user', (req, res) => {
    const { name, password } = req.body;

    try {
        usersCache = readDataFromFile();
        let user = usersCache.find(user => user.name === name);

        let lastElementId = usersCache.length > 0 
            ? Math.max(...usersCache.map(user => user.id)) 
            : 0;

        if (!user) {
            user = {
                id: lastElementId + 1,
                name,
                password
            };
            usersCache.push(user);
        } else {
            user.name = name;
            user.password = password;
        }

        writeDataToFile(usersCache);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error writing data', error });
    }
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
