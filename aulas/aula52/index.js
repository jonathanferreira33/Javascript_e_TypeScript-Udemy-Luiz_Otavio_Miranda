// escopo lexico

const nome = 'Jonathan'; // fora

function falaNome() {
    const nome = 'Jhouus'; // dentro
    console.log(nome);
}
falaNome();

// a funcao busca a variavel "nome" dentro dela, se não encontrar ela busca na mae dela e assim por diante até chegar no escopo global

function usaFalaNome() {
    falaNome();
}
usaFalaNome();