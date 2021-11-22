# expression-regular-javascript
Expressao regular

## Feature
- Entendendo alguns conceitos das expressões regulares em java script
— Utilização das funções test, exec, replace, match

- Função teste vai retornar true ou false, em relação a sua expressão regular.
- Abaixo esta a função teste e as flags g,i
- Abaixo também esta o significado dos grupos de caracteres e utilização do pipe |
- Função exec retorna um array  diferente do javascript, possuindo no seu primeiro índice o valor, segundo índice o índex, terceiro índice o input, ultimo o group

```javascript
  // g ==> global nao vai encontrar diferencas entre minusculo e maiusculo
  // i ==> case insensitive
  // () ==> grupo de caracteres
  // | ==> ou
  const { text } = require("./global");
  const regexOne = /João/i;
  //vai retornar true ou false caso text nao possuir João
  console.log(regexOne.test(text));
  
  
  console.log(regexOne.exec(text));
  //[ 'João', index: 1, input: '/João/i', groups: undefined ]
 

```

- Algo interessante e as funções match e replace
- Com match consigo retornar um array com minhas expressões regulares
- Replace e uma função com dois parâmetros o primeiro e o valor que deseja encontrar e o segundo substituir

``` javascript
const { text } = require("./global");
const regexOne = /João/gi;
console.log(text.match(regexOne)); //retorna ['João', 'joão']
console.log(text.replace(regexOne, "Maria")); // modifiquei todas João por Maria
```

- Com grupos conseguimos acessar seus retrovisores, cada grupo de regex gera automaticamente seu retrovisor
- Com os retrovisores e possível realizar muitas operações interessantes.
- Por fim não menos importantes pratiquei os quantificadores, são muito importantes quando criamos regex
- Com eles conseguimos operações greedy, no greeddy
- Validações de CPF, email...

```javascript
// $2 $1   => retrovisores acessa apenas no replace
// \1 => retrovisores
//* 0 ou n {0,}
//+ 1 ou n {1,}
//? 0 ou 1 {0,1}
//\ escape de caracteres
//{n,m} minimo e maximo
//{10,} minimo 10 maximo infinito
//{ ,10} minimo 0 maximo 10
//{10}  so 10
//{5,10} minimo 5 maximo 10

console.log(
  html2.replace(/(<(.*?)[\s\S]*?>)([\s\S]*?)(<\/\2>)/gi, "$1 hahhahha$3  $4")
);
//<p> hahhahhaEu sou paragrafo  </p>
{
  /* <p  classe="teste"  hrf="teste > hahhahhaEu sou outro  </p>  <div> hahhahhaEssa e div  </div> */
}

```

### Possui mais feature implementadas no repositório fique a vontade para clonar e testar.







