function Musica(titulo, artista, album) {
    this.titulo = titulo;
    this.artista = artista;
    this.album = album;
}

const Musica1 = new Musica('D.T.M.F', 'Bad bunny', 'Debí Tirar Más Fotos');

console.log(Musica1.titulo);
console.log(Musica1.artista);
console.log(Musica1.album);
console.log('---------------------------------------------------');

console.log(
    `${Musica1.titulo} foi feito por ${Musica1.artista} essa musica e do album (${Musica1.album} ) o album foi feito na intenção de relembrar e aproveitar as memorias passadas com entes queridos.`,
);
