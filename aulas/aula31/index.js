const verdadeira = true;

// LET tem escopo de bloco
// VAR só tem escopo de função

let nome = 'Jonathan' // criando
var nome2 = 'Ferreira'

if (verdadeira) {
    let nome = 'Jhouus'
    var nome2 = 'Apelido'
    console.log(nome, nome2)
    
    if (verdadeira) { 
        let nome = 'J'
        var nome2 = 'Primeira Letra' // redeclarando
        console.log(nome, nome2) // procura dentro do bloco atual, não encontrando busca no bloco anterior, não encontrando busca no bloco global
    }
}

console.log(nome, nome2); // buscou o nome linha 6 e nome2 linha 16

// VAR sofre elevação, caso uma variavel(VAR) seja usada antes de ser criada ela irá para o inicio do arquivo e irar resultar undefined

console.log(variavelVAR);

var variavelVAR = "variavel  VAR"; // esperado undefined

// LET com let o esperado é "variavel is not defined"
