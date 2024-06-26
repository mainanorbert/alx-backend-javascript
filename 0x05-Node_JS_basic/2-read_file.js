const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const records = lines.slice(1).filter((line) => line.trim() !== '').map((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      return {
        firstname, lastname, age: parseInt('10', age), field,
      };
    });
    const len = records.length;
    console.log(`Number of students: ${len}`);

    const studentByField = records.reduce((acc, curr) => {
      if (!acc[curr.field]) {
        acc[curr.field] = [];
      }
      acc[curr.field].push(curr.firstname);
      return acc;
    }, {});
    for (const field in studentByField) {
      if (Object.prototype.hasOwnProperty.call(studentByField, field)) {
        const noOfStud = studentByField[field].length;
        const studentsNames = studentByField[field].join(', ');
        console.log(`Number of students in ${field}: ${noOfStud}. List: ${studentsNames}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
