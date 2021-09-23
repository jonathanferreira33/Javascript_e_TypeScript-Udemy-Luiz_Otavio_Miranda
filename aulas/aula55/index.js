// IIFE -> Uimediately invoked fection expression

// tocando o escopo global
function qualquerCoisa() {
    console.log('meu código...')
};
qualquerCoisa();

const nome = 12345;

//IIFE
(function() {
    const nome = 'Jonathan';
    console.log('meu código q não toca o escopo global');
    console.log(nome);
    
})();

// console.log(nome)

(function(idade, peso) {
    
    const sobrenome = "Ferreira";
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Jonathan'));
    }

    falaNome();
})(28, 77.4);
