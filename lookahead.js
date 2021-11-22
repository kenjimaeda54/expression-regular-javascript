const { lookahead } = require("./global");

console.log(lookahead);
console.log(lookahead.match(/.* active/gim));
// [
//   'OFFLINE 192.168.0.1 ABACDEF active',
//   'OFFLINE 192.165.0.2 ABERTA active',
//   'OFFLINE  123.1232.0.5 ABERTA active'
// ]

//lookahead positive  (frases que tem active)
//olha para frente
console.log(lookahead.match(/.* (?=active)/gim));
//  [
//   'OFFLINE 192.168.0.1 ABACDEF ',
//   'OFFLINE 192.165.0.2 ABERTA ',
//   'OFFLINE  123.1232.0.5 ABERTA '
// ]

// lookahead behind
// olha para tras
// trazer tudo que tem online
console.log(lookahead.match(/(?<=online\s+)\S+ .*/gim));
// [
//   '123.1232.0.5 Fechada inactive,',
//   '123.1232.0.4 ABERTA inactive,',
//   '123.1232.0.15 ABERTA inactive,'
// ]
