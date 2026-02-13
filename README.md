# 📚 Exercícios com Programação Orientada a Objetos (P.O.O.)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

Repositório dedicado ao aprendizado e prática de **Programação Orientada a Objetos (P.O.O.)** utilizando **JavaScript**. Contém exercícios práticos e materiais explicativos para dominar os conceitos fundamentais da orientação a objetos.

## 📌 Sobre o Repositório

Este projeto foi criado para:
- ✅ Aprender os 4 pilares da P.O.O.: **Abstração, Encapsulamento, Herança e Polimorfismo**
- ✅ Praticar a criação de classes, objetos, métodos e propriedades em JavaScript
- ✅ Resolver problemas do mundo real utilizando o paradigma orientado a objetos
- ✅ Consolidar conhecimentos através de exercícios progressivos

## 📂 Estrutura do Projeto
exercicios-com-P.O.O/
├── atividades-poo/ # Exercícios práticos e desafios
│ ├── exercicio-1.js
│ ├── exercicio-2.js
│ └── ...
└── explicação-poo/ # Conteúdo teórico e exemplos explicativos
├── conceitos.md
├── exemplos.js
└── ...
## ⚙️ Como Executar os Exercícios

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 14 ou superior)






### Conceitos Abordados
- Os exercícios cobrem os principais conceitos da P.O.O. em  -JavaScript:Conceito
## Descrição
-Classes e Objetos :Criação de classes com class e instanciação de objetos
- Encapsulamento:Uso de modificadores de acesso e métodos getters/setters
- Herança:Extensão de classes com extends e reutilização de código
- Polimorfismo:Sobrescrita de métodos e comportamentos diferentes para o mesmo método
- Abstração:Modelagem de entidades do mundo real em classes
- Métodos estáticos:Métodos pertencentes à classe, não às instâncias

## ⚙️ Como Executar os Exercícios

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 14 ou superior)

### exemplo rapido
// Exemplo de classe em JavaScript
class Pessoa {
  constructor(nome, idade) {
    this._nome = nome;
    this._idade = idade;
  }

  get nome() {
    return this._nome;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this._nome} e tenho ${this._idade} anos.`);
  }
}

// Criando um objeto
const usuario = new Pessoa("Kaikemur", 25);
usuario.apresentar();

### Passo a passo
1. Clone o repositório:
```bash
git clone https://github.com/kaikemur/exercicios-com-P.O.O.git
cd exercicios-com-P.O.O
```
### 📚 Recursos Recomendados
- Documentação MDN - Classes em JavaScript
- JavaScript.info - Orientação a Objetos

### 🤝 Contribuições
- Contribuições são bem-vindas! Siga estes passos:
- Faça um fork do projeto
- Crie uma branch para sua feature (git checkout -b feature/nova-atividade)
- Commit suas mudanças (git commit -m 'feat: adiciona novo exercício')
- Push para a branch (git push origin feature/nova-atividade)
- Abra um Pull Request
### 📄 Licença
- Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.
### ✨ Autor
Desenvolvido com ❤️ por Kaikemur
![alt text](image.png)
