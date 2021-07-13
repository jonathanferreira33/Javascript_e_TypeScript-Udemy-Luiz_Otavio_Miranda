const pessoa = {
    nome: 'Jonathan',
    sobrenome: 'Ferreira',
    idade: 27,
    endereco : {
        rua: 'av. Paulista',
        numero: 1000
    }
};

//const { nome, sobrenome, idade } = pessoa;
// console.log(nome, sobrenome, idade);
//const { nome: n = '', sobrenome: s } = pessoa; // dar valor padrão ou mudar nome da chave
//console.log(n, s);

const { nome, ...resto} = pessoa;
console.log(resto)