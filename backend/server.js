const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dataFilePath = path.join(__dirname, 'ratings.json'); // Путь к JSON файлу

// Функция для чтения данных из файла
const readDataFromFile = () => {
  if (fs.existsSync(dataFilePath)) {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
  }
  return []; // Если файл не существует, возвращаем пустой массив
};

// Функция для записи данных в файл
const writeDataToFile = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

let ratings = readDataFromFile(); // Загружаем данные при запуске сервера

app.get('/review', (req, res) => {
  res.json(ratings);
});

app.post('/review', (req, res) => {
  const newRating = req.body;
  ratings.push(newRating);
  writeDataToFile(ratings); // Сохраняем данные в файл
  res.status(201).json(newRating);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
