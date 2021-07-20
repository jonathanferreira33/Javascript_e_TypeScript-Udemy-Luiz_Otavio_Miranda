const numeros = [1, 2, 4 , 6, 8, 9, 10, 11, 12];


for (let numero of numeros) {

    if (numero % 2 != 0) continue;


    if (numero > 10) break;

    console.log(numero);
}