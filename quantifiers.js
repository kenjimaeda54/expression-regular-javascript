const { text, arquives } = require("./global");

//* 0 ou n {0,}
//+ 1 ou n {1,}
//? 0 ou 1 {0,1}
//\ escape de caracteres
//{n,m} minimo e maximo
//{10,} minimo 10 maximo infinito
//{ ,10} minimo 0 maximo 10
//{10}  so 10
//{5,10} minimo 5 maximo 10

const regexOne = /Jo+ão/gi;
//com a flag + vai retornar se achar 1 ou mais,nesse caso a letra o
console.log(text.match(regexOne));
//retorna o jooooooooooooão // orque nao tem o quantificador apos o ã

const regexTwo = /\.jpe?g/i;
//dessa maneira vai retornar todos os arquivos jpeg ou jpg,inclusive maiusculo e minusculo devido a flag gi
console.log(arquives.filter((arquive) => arquive.match(regexTwo)));

const regexThree = /\.jpe*g/i;
//dessa maneira vai retornar todos os arquivos jpeg,jpg e jpeeeg,inclusive maiusculo e minusculo devido a flag gi
console.log(arquives.filter((arquive) => arquive.match(regexThree)));
