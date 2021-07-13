// Operação ternária
// CONDIÇÃO ? VALOR PARA VERDADEIRO : VALOR PARA FALSO


const pontuacaoUsuario = 1999;
const nivelUusario = pontuacaoUsuario >= 1000 ? 'Usuário VIP': 'Usuário comum';  

const corUsuario = null;
const corPadrao = corUsuario || "Azul";

console.log(nivelUusario, corPadrao);



