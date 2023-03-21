const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const minhaStringNoSpace = minhaString.trim()

console.log(minhaStringNoSpace)

console.log("A string com os espaços:", minhaString.length)

console.log("A string sem os espaços:", minhaStringNoSpace.length)

console.log(minhaStringNoSpace.replace("________", "sticioso"))
