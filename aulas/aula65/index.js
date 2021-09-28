//concatenar arrays

const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = [...array1,...array2];
const array4 = array1.concat(array2);
console.log(array3);
console.log(array4);

//Filter, map, reduce

//Filter => sempre vai retornar um array com o mesmo tamanho do original ou menor

//retorno os numeros maiores que 10

//               0   1   2  3  4  5  6  7  8   9  10  11  12
const numeros = [5, 80, 50, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const maioresQ10 = [];
for (let numero of numeros) {
    if(numero > 10){
        maioresQ10.push(numero);
    }
}

function callbackFilter(valor){
    return (valor > 10);
};
const maioresQ10Dois = numeros.filter(callbackFilter);

const maioresQ10Tres = numeros.filter(valor => valor > 10);

console.log(maioresQ10);
console.log(maioresQ10Dois);
console.log(maioresQ10Tres);




//retorno as pessoas que tem o nome com 5 letras ou mais
//retorno as pessoas com mais de 25 anos
//retorno as pessoas cujo o nome termina com 'A'

const pessoas = [
    {nome: 'Jonathan', idade: 28 },      
    {nome: 'Raffa', idade: 24 },      
    {nome: 'Ligia', idade: 29 },      
    {nome: 'Erick', idade: 27 },      
    {nome: 'Maria Flor', idade: 3 },      
    {nome: 'Sheila', idade: 27 }      
];

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length > 5);
const pessoasComMais25 = pessoas.filter(valor => valor.idade > 25);
const pessoaComLetraFinalA = pessoas.filter((valor) => {
    return valor.nome.toLowerCase().endsWith('a');
});

console.log(pessoasComNomeGrande);
console.log(pessoasComMais25);
console.log(pessoaComLetraFinalA);
