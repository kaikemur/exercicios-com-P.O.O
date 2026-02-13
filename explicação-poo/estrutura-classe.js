function Aluno(nome,idade,vivo) {
    this.nome = nome;
        this.idade = idade;
        this.vivo = vivo;
}

// function e um modelo onde a new ira se basear para criar seus objetos

const a1 = new Aluno("kaike", 16, true);
const a2= new Aluno('henrico', 16, true);

console.log(a1);

console.log(a2);
