const frutas = ['Pera', 'Maça', 'Uva' ];


//for in ler os indices
for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
}


for (let i in frutas) {
    console.log(frutas[i]);
}


const pessoa = {
    nome: 'Jonathan',
    sobrenome: 'Ferreira',
    idade: 27
};
const chave = 'nome';
console.log(pessoa.nome);
console.log(pessoa['nome']);
console.log(pessoa[chave])


for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}