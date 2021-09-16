function funcao() {
    console.log('oi')
    console.log(arguments[arguments.length - 1 ])
    let total = 0;
    for (let argumento of arguments) total += argumento;
    console.log(total)
}
funcao(3 , 8, 10 , 252, 10, 12, 52, 88); // para funções com a palavra FUNCTION, o JS cria uma variavel chamada ARGUMENTS, que sustenta todos os argumentos nviados


function funcao2(a, b, c , d, e) {
    console.log(a, b, c, d, e)
}
funcao2(1, 33, "stone")


function funcao3(a, b = 2, c = 5){
    // b = b || 2; // maneira antiga, criar um valor padrão
    console.log(a + b + c)
}
funcao3(2)
funcao3(2, 10)
funcao3(2, undefined, 30) // pular 'B'


function funcao4({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

funcao4({nome:'Jonathan', sobrenome:'Ferreira', idade:27});
// ou
let obj = {nome:'Jonathan2', sobrenome:'Ferreira2', idade:28};
funcao4(obj);
// ou
function funcao5([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao5(['Jonathan3', 'Ferreira3', 29]);


function conta(operador, acumulador, ...numeros) {
    // console.log(operador, acumulador, ...numeros);
    for(let numero of numeros){
        if(operador === '+')acumulador += numero;
        if(operador === '-')acumulador -= numero;
        if(operador === '/')acumulador /= numero;
        if(operador === '*')acumulador *= numero;
    }

    console.log(acumulador)
}

const conta2 = function(operador, acumulador, ...numeros) {
    console.log(arguments)
}

conta('+', 10, 20, 30, 40, 50);
conta('-', 10, 20, 30, 40, 50);
conta('/', 10, 20, 30, 40, 50);
conta('*', 10, 20, 30, 40, 50);

conta2('+', 10, 20, 30, 40, 50);


const conta3 = (...args) => { // rest operator
    console.log(args);
};

conta3('+', 10, 20, 30, 40, 50);