// Reduce
// normalmente utilizada para reduzir um array a 1 elemento (ex. total)

const numeros = [5, 80, 50, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//Some todos os numeros
//Retorne um array com os pares
//retorno um array com o dobro dos valores

const total = numeros.reduce((acumulador, valor, indice, aray) => {
    acumulador += valor;
    return acumulador;
}, 0); // caso não seja atribuido o acumulador será o priemiro número do elemento
console.log(total);

const pares = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador.push(valor)
    return acumulador;
}, []);
console.log(pares)

const impares = numeros.reduce((acumulador, valor) => {
    if(valor % 2 !== 0) acumulador.push(valor);
    return (acumulador);
}, []);
console.log(impares)


const vezesDois = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(vezesDois);


//retorno a pessoa jovem a mais tempo
const pessoas = [
    {nome: 'Jonathan', idade: 28},
    {nome: 'Ligia', idade: 30},
    {nome: 'Erick', idade: 27},
    {nome: 'Maria Flor', idade: 4},
    {nome: 'Jhouus', idade: 30}
];


const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha)