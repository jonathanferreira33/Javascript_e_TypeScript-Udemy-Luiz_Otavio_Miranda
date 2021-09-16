// Declaração de função (Function hoisting)

// Hoisting - Função é elevada ao topo do código.
falaOi()


function falaOi() {
    console.log('Oi');
}

falaOi() // não faz  a minima diferença, chamar antes ou depois.



// First-class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function () {
    console.log('sou um dado');
};

souUmDado();

function exFuncao(funcao) {
    funcao();
}

exFuncao(souUmDado);


// Arrow function
const funcaoArrow = () => {
    console.log("sou uma arrow function");
};

funcaoArrow();


// dentro de um objeto
const objeto = {
    falar: function() {
        console.log('Estou falando')
    }
}

objeto.falar();

const objeto2 = {
    falar() {
        console.log('Estou falando tambem')
    }
}

objeto2.falar();