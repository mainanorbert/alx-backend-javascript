const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.promises.readFile(path, 'utf8')
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
      resolve();
    })
    .catch(() => {
      reject(new Error('Cannot load the database'));
    });
});

module.exports = countStudents;
