function Livro(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
}

const Livro1 = new Livro('Dom Quixote', 'Miguel de Cervantes',1605);

console.log(Livro1.titulo);
console.log(Livro1.autor);
console.log(Livro1.ano);
console.log('---------------------------------------------------');

console.log(`o livro  ${Livro1.titulo} feito por ${Livro1.autor} foi feito no ano de ${Livro1.ano} e relançado atualmente`);
