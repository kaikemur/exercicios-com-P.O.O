function Jogos(título, desenvolvedor, plataforma) {
    this.título = título;
    this.desenvolvedor = desenvolvedor;
    this.plataforma = plataforma;
}

const Jogo1 = new Jogos(
    'minecraft',
    'mojang',
    'Multiplataforma',
);

console.log(Jogo1.título);
console.log(Jogo1.desenvolvedor);
console.log(Jogo1.plataforma);
console.log("---------------------------------------------------");
console.log(
    `${Jogo1.título} foi feito pela ${Jogo1.desenvolvedor} e è um jogo ${Jogo1.plataforma} onde você pode se divertir com seus amigos em diversas plataforma .`,
);
