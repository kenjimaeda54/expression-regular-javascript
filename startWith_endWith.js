// ^ comeca com
// $ termina com
// [^]  não é igual a  ^
// m multiline verificar po linha

const { cpf } = require("./global");

const regexOne = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;

console.log(cpf.match(regexOne));
// retorno  ['254.224.877-45', '215.987.456-12', '047.258.369-96' ]

const regexTwo = /^(\d{3}\.)\d{3}\.\d{3}-\d{2}$/g;

console.log(cpf.match(regexTwo));
// retorna null por causa do modificador  ^ ?
// precisa comecar e terminar com valor especificado nada alem mais

const cpfOne = "254.224.877-45";
console.log(cpfOne.match(regexTwo));
// retorno [ '254.22.4877-45' ]

const regexTree = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpf.match(regexTree));
// retorno [ '254.224.877-45', '215.987.456-12', '047.258.369-96' ]
