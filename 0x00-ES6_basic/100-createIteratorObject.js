export default function createIteratorObject(report) {
  function* employeeIterator() {
    for (const department in report.allEmployees) {
      if (department) {
        for (const employee of report.allEmployees[department]) {
          yield employee;
        }
      }
    }
  }

  return {
    [Symbol.iterator]: employeeIterator,
  };
}
