const student = {
    name: "Sattva",
    age: 18,
    grade: "A"
  };
  
  function updateGrade(newGrade) {
    student.grade = newGrade;
  }
  
  updateGrade("B");
  console.log(student);
  