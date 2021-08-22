// Você recebe uma string s que consiste apenas em letras minúsculas do inglês. Se as vogais ('a', 'e', 'i', 'o' e 'u')
// recebem um valor de '1' e as consoantes recebem um valor de '2', retorne a soma de todas as letras na string de
// entrada.

// Exemplo

// Para s = "a", a saída deve ser
// conteVogalConsoante(s) = 1;

// Para s = "abcde", a saída deve ser
// conteVogalConsoante(s) = 8.

// As letras em s, convertidas em1 e 2 e somadas conforme descrito acima:
// 1 + 2 + 2 + 2 + 1 = 8.

// Entrada / Saída

// [execution time limit] 4 seconds (js)

// [input] string s

// Uma string que consiste apenas em letras minúsculas do inglês.

// Restrições garantidas:
// 0 ≤ s.length ≤ 104.

// [output] integer

function conteVogalConsoante(s) {

    let letras = s.toLowerCase().split('');
    let total = 0;
    for(i in letras) {
        let vogais = ['a', 'e', 'i', 'o', 'u']
        if(vogais.includes(letras[i])) {
            total = total + 1
        } else {
            total = total + 2
        }
    }

    return total;

}

let j = 'Jonathan';
console.log(conteVogalConsoante(j))