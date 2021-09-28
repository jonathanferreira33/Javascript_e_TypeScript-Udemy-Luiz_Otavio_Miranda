//Funcao fabrica -> objetos
//- Sempre iniciar com letra minuscula

// Funcoes construtoras -> retorna objetos
// - sempre inicia com letra Maiuscula (convencao)
// - Não precisa do 'return'
// Pessoa (new)

function Pessoa(nome, sobrenome) {
    const ID = 123; // variaveis/atributos privados

    const metodoInterno = () => {
        //qualquer coisa 
    };

    this.nome = nome; // atibutos/metodos publicos
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log('Sou um método ' +  this.nome);
    };
}

const p1 = new Pessoa('Jonathan', 'Ferreira');

console.log(typeof(p1));
console.log(p1.nome);
p1.metodo();
