let num1 = 9.44578;

let num2 = Math.floor(num1); // arredondar para baixo
num2 = Math.ceil(num1); // arredondar para cima
num2 = Math.round(num1); // arredonda para o mais proximo(9.50 para cima e 9.49 para baixo)

console.log(Math.max(1,2,3,4,5,421,7,10,-50)) // retorna o maior
console.log(Math.min(1,2,3,4,5,421,7,10,-50)) // retorna o menor

// const aleatorio = Math.random() // retornar um sorteio entre 0 e 1
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // retornar numero inteiro e aleatório entre 10 e 5
console.log(aleatorio) 

console.log(Math.PI) // PI
console.log(Math.pow(2, 12)) // potenciação de 2¹²
// ou
console.log(2 ** 12)

let num3 = 9;
console.log(num3 ** (1/2)) // raiz quadrada
// ou
console.log(num3 ** 0.5) // raiz quadrada

console.log(100 / 0); // retorno Infinity, basta chegar muito proximo do zero absoluto