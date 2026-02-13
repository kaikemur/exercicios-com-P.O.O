function Filme(titulo, diretor, anoDeLancamento) {
    this.titulo = titulo;
    this.diretor = diretor;
    this.anoDeLancamento = anoDeLancamento;
}

const Filme1 = new Filme('creed 1', 'Ryan Coogler', 2015);

console.log(Filme1.titulo);
console.log(Filme1.diretor);
console.log(Filme1.anoDeLancamento);
console.log('---------------------------------------------------');

console.log(
    `${Filme1.titulo} foi feito por ${Filme1.diretor}  no ano de ${Filme1.anoDeLancamento} e foi uma continuação da serie rock`,
);
