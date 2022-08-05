let students = [
  {
    name: "Mayk",
    note1: 7.2,
    note2: 8.0,
  },
  {
    name: "Diego",
    note1: 6.4,
    note2: 8.3,
  },
  {
    name: "Julia",
    note1: 3.4,
    note2: 8.5,
  },
  {
    name: "Olivia",
    note1: 9.3,
    note2: 2.4,
  },
]

function printStudentMessage (student) {
  let average = ((student.note1 + student.note2) / 2).toFixed(1);
  
  if (average < 7) {
    return `
    A média do(a) aluno(a) ${student.name} é ${average}
    Não foi dessa vez, ${student.name}! Tente novamente!
    `
  } else {
    return `
    A média do(a) aluno(a) ${student.name} é: ${average}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
    `
  }
}

for (let student of students) {
  let toStudentMessage = printStudentMessage(student)
  alert(toStudentMessage)
}