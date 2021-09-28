// Map
// array do mesmo tamanho q o original, porem com valores alterados

const numeros = [5, 80, 50, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map(valor => valor * 2 );

console.log(dobro)


// para cada elemento:
//retorno apenas uma string com o nome
//Remova apenas a chama 'nome' do objeto
//Add a chave id em cada objeto

const pessoas = [
 {nome: 'Jonathan', idade: 28},
 {nome: 'Ligia', idade: 30},
 {nome: 'Erick', idade: 27},
 {nome: 'Maria Flor', idade: 4},
 {nome: 'Jhouus', idade: 30}
];


const nomes = pessoas.map(objeto => objeto.nome);
console.log(nomes)

const idades = pessoas.map((obj) => {
    return { idade: obj.idade };
});
console.log(idades)

const ids = pessoas.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = indice + 1;
    return newObj;
});
console.log(ids)
console.log(pessoas)


