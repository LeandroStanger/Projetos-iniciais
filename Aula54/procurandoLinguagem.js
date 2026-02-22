const linguagensDeProgramacao = [
  "JavaScript",
  "Python",
  "Java",
  "C",
  "C++",
  "C#",
  "PHP",
  "Ruby",
  "Swift",
  "Kotlin",
  "Go",
  "Rust",
  "TypeScript",
  "Assembly",
  "Perl",
  "R",
  "MATLAB",
  "Dart",
  "Scala",
  "Haskell",
  "Lua",
  "Objective-C",
  "Visual Basic",
  "Delphi",
  "Fortran",
  "Cobol"
];

let busca = linguagensDeProgramacao.find((x) => x.toUpperCase() === "RUST");

console.log(busca);