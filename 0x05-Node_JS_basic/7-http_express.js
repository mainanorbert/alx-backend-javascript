const express = require('express');
const fs = require('fs').promises;

const app = express();

const countStudents = async (path) => {
  try {
    const studentData = await fs.readFile(path, 'utf8');
    const lines = studentData.trim().split('\n');
    const myFields = lines.shift().split(',');
    const counter = {};

    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      if (firstname && lastname && age && field) {
        counter[field] = (counter[field] || 0) + 1;
      }
    });

    let studentsList = '';
    for (const field in counter) {
      if (Object.prototype.hasOwnProperty.call(counter, field)) {
        const studList = lines
          .filter((line) => line.split(',')[myFields.indexOf('field')] === field)
          .map((line) => line.split(',')[myFields.indexOf('firstname')]);
        studentsList += `Number of students in ${field}: ${counter[field]}. List: ${studList.join(', ')}\n`;
      }
    }

    return `Number of students: ${lines.length}\n${studentsList}`;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const result = await countStudents('database.csv');
    res.send(`This is the list of our students\n${result}`);
  } catch (error) {
    res.send('Error reading the database');
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
