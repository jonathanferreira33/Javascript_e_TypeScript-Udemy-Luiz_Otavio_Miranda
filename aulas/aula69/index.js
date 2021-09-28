//For Each (só funciona para array)
const numeros = [5, 80, 50, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

for(valor of numeros) {
    console.log(valor);
}

let total = 0;
numeros.forEach((valor, indice, array) => {
    total += valor;
})
console.log(total);