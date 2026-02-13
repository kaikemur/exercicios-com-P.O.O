function Smartphone(marca, modelo, anoDeLancamento) {
    this.marca = marca;
    this.modelo = modelo;
    this.anoDeLancamento = anoDeLancamento;
}

const Smartphone1 = new Smartphone('Apple', 'Iphone 17 pro max', '9 de setembro de 2025');

console.log(Smartphone1.marca);
console.log(Smartphone1.modelo);
console.log(Smartphone1.anoDeLancamento);
console.log('---------------------------------------------------');
console.log(
    `${Smartphone1.modelo} foi feito pela ${Smartphone1.marca} e è um cellular que usa I.O.S ${Smartphone1.anoDeLancamento} que e um tipo de sistema alternativo ao android .`,
);
