interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const stud1: Student = {
  firstName: 'John',
  lastName: 'James',
  age: 20,
  location: 'Kenya',
};

const stud2: Student = {
  firstName: 'Alice',
  lastName: 'Janet',
  age: 20,
  location: 'Senegal'  
};

const studentsList: Student[] = [stud1, stud2];

const table = document.createElement("table");
document.body.appendChild(table)

const headers = ['First Name', 'Location'];
const hRow = document.createElement('tr');
headers.forEach((text) => {
  const tH = document.createElement('th')
  tH.textContent = text;
  hRow.appendChild(tH)
});
table.appendChild(hRow)

studentsList.forEach(stud =>{
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = stud.firstName;
  row.appendChild(firstNameCell);
  const locationCell = document.createElement('td');
  locationCell.textContent = stud.location;
  row.appendChild(locationCell);
  table.appendChild(row);
});
