const text = `
João e Maria é uma fábula muito antiga que conta a história de dois irmãos abandonados em uma floresta. ... O título original é Hänsel und Gretel,
 e a história trazia elementos sombrios
 e um tanto diferentes do que conhecemos atualmente.
 joão e maira
 jooooooooooooãoooooooooooo;
`;

const arquives = [
  "aluno.jpg",
  "Professor.JPG",
  "Professora.jpeg",
  "Aluna.jpeg",
  "SUrruo.jpeeeeeg",
];

const cpf = `254.224.877-45
  215.987.456-12
  047.258.369-96 `;

const html =
  "<p>Eu sou paragrafo</p> <p>Eu sou outro</p>  <div>Essa e div</div>";

const alphabet = "ABCDEFGHIZJLMNPQRSZ abacdefegzip   @f  01223232s";

const html2 = `<p>Eu sou paragrafo</p> 
   <p  classe="teste"  hrf="teste >Eu sou outro</p>  <div>Essa e div</div>`;

const lookahead = `
OFFLINE 192.168.0.1 ABACDEF active,
OFFLINE 192.165.0.2 ABERTA active,
ONLINE  123.1232.0.5 Fechada inactive,
OFFLINE 1283.12032.0.3 ABERTA inactive,
ONLINE  123.1232.0.4 ABERTA inactive,
OFFLINE  123.1232.0.5 ABERTA active,
ONLINE  123.1232.0.15 ABERTA inactive,


`;

module.exports = {
  text,
  arquives,
  html,
  alphabet,
  cpf,
  html2,
  lookahead,
};
