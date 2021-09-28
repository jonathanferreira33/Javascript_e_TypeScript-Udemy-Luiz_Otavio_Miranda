const numeros = [5, 80, 50, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Retorne a soma do dobro de todos os pares
// -> Filtrar parseFloat
// -> Dobrar os valores
// -> Reduzir (somar tudo)


const someDosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map((valor) => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor );
console.log(someDosPares)