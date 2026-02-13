function Carro(nome, ano, anda) {
    this.nome = nome;
    this.ano = ano;
    this.anda = anda;
}

const C1 = new Carro('volvo', 2016, true);
const C2 = new Carro('palio', 2006, true);

C1.ano = 17;

console.log(C1);

console.log(C2);
