// retorno da funcao

// return -> returna um valor / termina uma funcao;

function soma(a, b) {
    return a + b; //returna um valor
}

console.log(soma(5, 5));


// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red'; // não retorna mais é util
// });


function criaPessoa(nome, sobrenome) {
    return { nome: nome, sobrenome: sobrenome }; // ou { nome, sobrenome }
}

const p1 = criaPessoa('Jonathan', 'Ferreira');
const p2 = {
    nome: 'Jhouus',
    sobrenome: 'Ferreira'
};

console.log(p1);
console.log(p2);

function falaFrase(comeco) {
    function falaresto(resto) {
        return comeco + ' ' + resto;
    }
    return falaresto;
}


const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'));


function duplica(n) {
    return n * 2;
}
function triplica(n) {
    return n * 3;
}
function quadriplica(n) {
    return n * 4;
}
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica2 = criaMultiplicador(2);
const triplica3 = criaMultiplicador(3);
const quadriplica4 = criaMultiplicador(4);

console.log(duplica2(3));
console.log(triplica3(12));
console.log(quadriplica4(5));