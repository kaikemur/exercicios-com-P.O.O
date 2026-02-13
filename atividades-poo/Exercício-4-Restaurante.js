function Restaurante(nome, tipeDeCozinha, localização) {
    this.nome = nome;
    this.tipeDeCozinha = tipeDeCozinha;
    this.localização = localização;
}

const Restaurante1 = new Restaurante(
    'Restaurante Les Présidents',
    'francessa',
    'R. da Consolação, 3527 - Cerqueira César, São Paulo - SP, 01416-001',
);

console.log(Restaurante1.nome);
console.log(Restaurante1.tipeDeCozinha);
console.log(Restaurante1.localização);
console.log('---------------------------------------------------');

console.log(
    `${Restaurante1.nome} foi feito por erick jacquin essa Restaurante e tem a culinaria  ${Restaurante1.tipeDeCozinha} e esta localizado em: (${Restaurante1.localização} ) .`,
);
