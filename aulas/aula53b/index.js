// closures

function retornaFuncao(nome){
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Jonathan');
const funcao2 = retornaFuncao('Ferreira');
console.dir(funcao);
console.dir(funcao2);

// closure = habilidade da funcao em acesar seu corpo lexico