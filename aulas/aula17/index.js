function saudacao(nome){
    return `Bom dia ${nome}`; // sempre q a engine do JS encontra return ele 'finaliza' a funcão
} 

const variavel = saudacao('jonathan');
console.log(variavel);


function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2,2)); // esperado 4

//função anonima
const raiz = function (n) {
return n**0.5
}; //precisa de ponto e virgula

console.log(raiz(9)); //3
console.log(raiz(16)); //4
console.log(raiz(25)); //5

// arrow function
const raiz2 = (n) => n**0.5;

console.log(raiz2(9)); //3
console.log(raiz2(16)); //4
console.log(raiz2(25)); //5