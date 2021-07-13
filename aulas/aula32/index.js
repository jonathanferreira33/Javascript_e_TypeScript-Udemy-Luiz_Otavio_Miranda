// Atribuição via desestruturação (Arrays)

let a = 'A';
let b = 'B';
let c = 'C';


// const numeros = [1, 2 , 3];
// [a, b, c] = numeros;
// console.log(a , b , c)

const letras = [b, c, a];
[a, b, c] = letras;
console.log(a , b , c)

//                 0    1    2    3    4    5    6    7    8
const numeros = [120, 240, 360, 460, 580, 610, 730, 850, 970 ];


const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros; // primeiroNumero = numeros[0] ...
console.log(primeiroNumero, segundoNumero, terceiroNumero)
console.log(resto) // rest operator

// ... rest, ... spread , depende do contexto

const [ , , , quartoNumero, , sextoNumero, , , nonoNumero] = numeros;
console.log(quartoNumero, sextoNumero, nonoNumero)

//                     0               1               2
//                  0  1  2         0  1  2         0  1  2
const numeros2 = [ [1, 2, 3],      [4, 5, 6],      [7, 8, 9] ];
console.log(numeros2[1][2]) // esperado 6

const [ ,[ , ,seis]] = numeros2;
console.log(seis)

