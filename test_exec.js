// g ==> global nao vai encontrar diferencas entre minusculo e maiusculo
// i ==> case insensitive
// () ==> grupo de caracteres
// | ==> ou

const { text } = require("./global");

const regexOne = /João/i;

//vai retornar true ou false
console.log(regexOne.test(text));

// exec vai retonar um array. Na primeira possicao  e o valor que estamos procurando,
//segundo input,terceiro o grupo
console.log(regexOne.exec(regexOne));

console.log(regexOne.exec(text));

const regexTwo = /(Maria)( é uma fábula)/i;
const found = regexTwo.exec(text);

//primeiro e o valor total da string
// Maria e a fábula
console.log(found[0]);

//primeiro grupo
// Maria
console.log(found[1]);

//terceiro grupo
// é uma fábula
console.log(found[2]);
