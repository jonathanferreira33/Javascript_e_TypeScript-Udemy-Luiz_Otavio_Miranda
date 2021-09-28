//                -5          -4        -3        -2       -1
//                 0           1         2         3        4
const nomes = ['Jonathan', 'Ferreira', 'Bebê', 'Jhouus', 'Ligia'];

// nomes.splice(indice, delete ou elemento1, elemento2 ...)

const removidos = nomes.splice(4, 1); // Elimina o ultimo elemento, porem diferente do pop desta forme retorna um array
const removidos2 = nomes.splice(-2, Number.MAX_VALUE); // number.max_value é o maximo de valor que existo no JS
console.log(nomes, removidos);
console.log(nomes, removidos2);

//adicionar
nomes.splice(-1, 2, 'Raffa', 'Namela'); //no final
nomes.splice(0, 0, 'Flor', 'Florzinha'); //no final
console.log(nomes);
