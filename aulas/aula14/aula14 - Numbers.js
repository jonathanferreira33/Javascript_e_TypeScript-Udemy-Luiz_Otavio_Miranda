// IEEE 754-2008 - padrao JS

let num1 = 100; //number
let num2 = 2.5; //number
let num3 = 10.154601541231564531
console.log(num1.toString()+num2) // contatena ao inves de soma
console.log(num1.toString(2)) // exibe representacao binaria
console.log(num3.toFixed(2)) // mostra o numero com 2 casas apos a virgula e com arredondamento
console.log(Number.isInteger(num1)) // true 
console.log(Number.isInteger(num3)) // false
console.log(Number.isNaN(num2)) // false

let num4 = 0.7
let num5 = 0.1

num4 += num5; // matematicamente esperado 0.8
num4 += num5;
num4 += num5; // matematicamente esperado 1

console.log(num4) // resultado = 0.9999999999999999

//solucao
num4 = parseFloat(num4.toFixed(2)); // ou num4 = Number...
console.log(num4)
console.log(Number.isInteger(num4))


