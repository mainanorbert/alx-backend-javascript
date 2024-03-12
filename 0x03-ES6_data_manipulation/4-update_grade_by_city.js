export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGradeObj = newGrades.find((grade) => grade.studentId === student.id);
      const grade = newGradeObj ? newGradeObj.grade : 'NA';
      return { ...student, grade };
    });
}
