// Você está desenvolvendo uma nova linguagem de programação e atualmente trabalhando em nomes de variáveis.
// Você tem uma lista de palavras que considera boas e podem ser usadas para nomes de variáveis. Todas as
// strings em palavras consistem em letras em inglês minúsculas.

// Um nome de variável complexa é uma combinação (possivelmente com repetições) de algumas strings de palavras,
// escritas em CamelCase. Em outras palavras, todas as strings são escritas sem espaços e cada string (com a
//     possível exceção da primeira) começa com uma letra maiúscula.

// Sua linguagem de programação deve aceitar apenas nomes de variáveis ​​complexas.

// Você precisa verificar se o nomeVariavel é aceito pela sua linguagem de programação.

// Exemplo

// Para palavras = ["is", "valid", "right"] e nomeVariavel ="isValid", a saída deve ser
// separacaoCamelCase(palavras, nomeVariavel) = true.

// Como nomeVariavel consiste em palavras "is" e "valid", e ambos estão em palavras.

// Para palavras = ["is", "valid", "right"] e nomeVariavel = "IsValid", a saída deve ser
// separacaoCamelCase(palavras, nomeVariavel) = true.

// Observe que ambas as variantes: "IsValid" e "isValid" são válidas em CamelCase.

// Para palavras = ["is", "valid", "right"] e nomeVariavel =" isValId", a saída deve ser
// separacaoCamelCase(palavras, nomeVariavel) = false.

// nomeVariavel é separado pelas palavras "is", "val", "id ", e nem todas as palavras estão em palavras.

// Entrada / Saída

// [execution time limit] 4 seconds (js)

// [input] array.string palavras

// Um array de palavras que consistem em letras do inglês.

// Restrições garantidas:
// 1 ≤ words.length ≤ 103.

// [input] string nomeVariavel

// Uma string a ser verificada. Consiste apenas em letras maiúsculas e minúsculas do português.

// Restrições garantidas:
// 1 ≤ variableName.length ≤ 103.

// [output] boolean

// Retorne true, se nomeVariavel for um nome de variável complexa, e false caso contrário.

// [JavaScript] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }





function separacaoCamelCase(palavras, nomeVariavel) {
    let resultado;
   

    if (palavras.length > 1 && nomeVariavel === nomeVariavel.toLowerCase()) {   
        return resultado = false;
    }

    if (palavras.length == 1) {
        return resultado = true;
    }

    console.log(palavras.length)
    
  
    let palavrasCamel = [];
    for(i in palavras) {
        let palavraAtual = palavras[i];
        let prefixo = palavraAtual[0].toUpperCase() + palavraAtual.substr(1);

            for (j in palavras) {
                let palavraAtual2 = palavras[j];
                let sufixo = palavraAtual2[0].toUpperCase() + palavraAtual2.substr(1)
                
                let atual = palavraAtual.concat(sufixo);
                palavrasCamel.push(atual);
                let atualCamel = prefixo.concat(sufixo);
                palavrasCamel.push(atualCamel);
            }
    

    }    

    if (palavrasCamel.includes(nomeVariavel)) {
        return resultado = true;
    } else {
        return resultado = false;
    }
    
}

let palavras = ["rmgeydubej"];
let nomeVariavel = 'RmgeydubejRmgeydubejbgsozjgoRmgeydubej'
console.log(separacaoCamelCase(palavras, nomeVariavel));
