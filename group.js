// [ ] grupo de caracteres
// [^ ] grupo de caracteres negados
// [a-z] range
// [a-zA-OUTRA COISA] range

const { alphabet } = require("./global");

const regexOne = /[a-z]+/g;
console.log(alphabet.match(regexOne)); // retorno [ 'abacdefegzip', 'f', 's' ]

const regexTwo = /[^a-z]+/g;
console.log(alphabet.match(regexTwo)); // retorno [ 'ABCDEFGHIZJLMNPQRSZ ', '   @', '  01223232' ]

//abaixo e um short hand ler mais na documentacao
const regexTree = /\s/g;
console.log(alphabet.match(regexTree)); // retorno [ ' ', ' ', ' ', ' ', ' ', ' ' ]
