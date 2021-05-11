// AULA - Objetos (Básico)


const pessoa1 = {
    nome: 'Jonathan',
    sobrenome : 'Ferreira'
};

const pessoa2 = {
    nome: 'Mayara',
    sobrenome : 'Souza',

    saudacao() {
        console.log(`Ola eu sou ${this.nome}`)
    }
};

console.log(pessoa1.nome);
console.log(pessoa2.sobrenome);
pessoa2.saudacao();



function criaPessoa (nome, sobrenome, idade) { //função com PARAMETROS
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade // não há necessidade de repetir parametros
    };
}

const pessoa3 = criaPessoa('Jhouus', 'Ferreira', 28); //atribuição de ARGUMENTOS

console.log(pessoa3.idade);

