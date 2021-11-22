const { html2 } = require("./global.js");

// $2 $1   => retrovisores acessa apenas no replace
// \1 => retrovisores

console.log(
  html2.replace(/(<(.*?)[\s\S]*?>)([\s\S]*?)(<\/\2>)/gi, "$1 hahhahha$3  $4")
);
//([\s\S]*?) => pegando tudo inclusive espaços, forma no greddy;
// vai imprmir
//<p> hahhahhaEu sou paragrafo  </p>
{
  /* <p  classe="teste"  hrf="teste > hahhahhaEu sou outro  </p>  <div> hahhahhaEssa e div  </div> */
}
