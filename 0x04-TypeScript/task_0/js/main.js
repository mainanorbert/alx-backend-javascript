;
var stud1 = {
    firstName: 'John',
    lastName: 'James',
    age: 20,
    location: 'Kenya'
};
var stud2 = {
    firstName: 'Alice',
    lastName: 'Janet',
    age: 20,
    location: 'Senegal'
};
var studentsList = [stud1, stud2];
var table = document.createElement("table");
document.body.appendChild(table);
var headers = ['First Name', 'Location'];
var hRow = document.createElement('tr');
headers.forEach(function (text) {
    var tH = document.createElement('th');
    tH.textContent = text;
    hRow.appendChild(tH);
});
table.appendChild(hRow);
studentsList.forEach(function (stud) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = stud.firstName;
    row.appendChild(firstNameCell);
    var locationCell = document.createElement('td');
    locationCell.textContent = stud.location;
    row.appendChild(locationCell);
    table.appendChild(row);
});
