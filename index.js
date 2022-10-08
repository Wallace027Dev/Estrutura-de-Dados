/*let frutas = new Array('Abacaxi');

frutas.push('Banana');
frutas.push('Maçã');
frutas.push('Morango');
frutas.unshift('Tangerina');

console.table(frutas);
console.table(frutas.length);
*/
/*
const programador = {
  nome: 'Wallace',
  nascimento: '03/08/2000',
  casado: false,
  linguagensFavoritas: ['Javascript', 'CSS', 'HTML'],
  trabalhoDesde: 2017,
};

console.table(programador);
console.table(programador['nome']);
*/

class Programador {
  constructor(
    nome,
    nascimento,
    casado,
    linguagensFavoritas = [],
    trabalhaDesde = null
  ) {
    this.nome = nome;
    this.nascimento = nascimento;
    this.casado = casado;
    this.linguagensFavoritas = linguagensFavoritas;
    this.trabalhaDesde = trabalhaDesde;
  }
}
const wallace = new Programador(
  'Wallace Vieira',
  '03/08/2000',
  false,
  ['Javascript', 'CSS', 'HTML'],
  2017
);
const vanessa = new Programador(
  'Vanessa Weber',
  '27/03/1981',
  true,
  ['Ruby', 'Dart', 'Python'],
  2017
);
const gabriel = new Programador(
  'Gabriel Froes',
  '04/07/1980',
  true,
  ['Javascripy', 'PHP', 'Python'],
  1996
);

console.table(wallace);
console.table(vanessa);
console.table(gabriel);
