//recordar que a tag g vai procurar global,mais que uma instancia
//a tag i vai pro case insensitive,nao importa maiusculo ou minusculo,
//mas se possuir dois Joao nao vai retornar os doi.

const { text } = require("./global");

const regexOne = /João/gi;

// no match sen flag g vai retornar o primeiro João encontrado
// com a tag g vai retornar todos os Joao encontrados, com a tag i vai retornar,
// retornar tambem os maiusculos minusculos
console.log(text.match(regexOne)); //retorna ['João', 'joão'] usando tag gi
console.log(text.match(regexOne)); //retorna ['João'] usando tag g

//replace ele pega o primeiro valor como parametro e substitui por outro
console.log(text.replace(regexOne, "Maria"));
//modifica todos os Joao por Maria

// replace tambem existe grupos
// (...)(...) $1 $2  sao seguencias os grupos
//para funcionar precisa estar em grupo
const regexTwo = /(João | Maria)/gi;
console.log(text.replace(regexTwo, "<br>$1</br>"));
//vai acrescentar no Joao os <br> e o </br>
console.log(
  text.replace(regexTwo, function (input) {
    return `=========${input}======`;
  })
);
