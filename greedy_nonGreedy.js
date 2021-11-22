const { html } = require("./global");

const regexGreedy = /<.*>.*<\/.*>/g;

console.log(html);
console.log(html.match(regexGreedy)); //greedy
//retorno [
//("<p>Eu sou paragrafo</p> <p>Eu sou outro</p>  <div>Essa e div</div>");
//]

const regexNonGreedy = /<.*?>.*?<\/.*?>/g;
console.log(html.match(regexNonGreedy)); //non greedy
//
// [
//   '<p>Eu sou paragrafo</p>',
//   '<p>Eu sou outro</p>',
//   '<div>Essa e div</div>'
// ]
