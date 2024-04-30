const http = require('http');
const fs = require('fs');

const countStudents = () => new Promise((resolve, reject) => {
  fs.promises.readFile(process.argv[2], 'utf8')
    .then((studentData) => {
      const lines = studentData.trim().split('\n');
      const myFields = lines.shift().split(',');
      const counter = {};

      lines.forEach((line) => {
        const [firstname, lastname, age, field] = line.split(',');

        if (firstname && lastname && age && field) {
          counter[field] = (counter[field] || 0) + 1;
        }
      });

      console.log(`Number of students: ${lines.length}`);

      for (const field in counter) {
        if (Object.prototype.hasOwnProperty.call(counter, field)) {
          const studList = lines
            .filter((line) => line.split(',')[myFields.indexOf('field')] === field)
            .map((line) => line.split(',')[myFields.indexOf('firstname')]);
          console.log(`Number of students in ${field}: ${counter[field]}. List: ${studList.join(', ')}`);
        }
      }

      resolve(counter);
    })
    .catch(() => {
      reject(new Error('Cannot load the database'));
    });
});

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      // const counter = await countStudents();
      countStudents();
      res.end('This is the list of our students');
    } catch (error) {
      res.end('Error reading the database.\n');
    }
  } else {
    res.end('Invalid endpoint.\n');
  }
});

app.listen(1245);

module.exports = app;
