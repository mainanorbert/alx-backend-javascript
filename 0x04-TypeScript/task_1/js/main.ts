interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }

interface Directors extends Teacher {
    numberOfReports: number;
  }

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0).toUpperCase()}. ${lastName}`;
  }

interface printTeacherFunction {
    (firstName: string, lastName: string): string; 
}

interface StudentClassInterface {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName 
  }

  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}
  
//   const teacher3: Teacher = {
//     firstName: 'John',
//     fullTimeEmployee: false,
//     lastName: 'Doe',
//     location: 'London',
//     contract: false,
//   };
  
//   console.log(teacher3);
  
