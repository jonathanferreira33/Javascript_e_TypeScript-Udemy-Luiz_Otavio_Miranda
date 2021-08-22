// Você recebe dois arrays de inteiros a e b do mesmo comprimento e um inteiro k. Vamos iterar através do array A
// da esquerda para a direita, e simultaneamente através do array B da direita para a esquerda, e olhando para os
// pares (x, y), onde x é de A e y é de B. Esse par é chamado de pequeno se a concatenação xy for estritamente menor
// que k.

// Sua tarefa é retornar o número de pares pequenos que você encontrar durante a iteração simultânea por a e b.

// Exemplo

// Para a = [1, 2, 3], b = [1, 2, 3] e k = 31, a saída deve ser
// contarParesPequenos(a, b, k) = 2.

// Estamos considerando os seguintes pares durante a iteração:

// (1, 3). Sua concatenação é igual a 13, que é menor que 31, então o par é pequeno;
// (2, 2). Sua concatenação é igual a 22, que é menor que 31, então o par é pequeno;
// (3, 1). Sua concatenação é igual a 31, que não é menor que 31, então o par não é pequeno.
// Como você pode ver, existem 2 pares pequenos durante a iteração, então a resposta é 2.

// Para a = [16, 1, 4, 2, 14], b = [7, 11, 2, 0, 15] e k = 743, a saída deve ser
// contarParesPequenos(a, b, k) = 4.

// Estamos considerando os seguintes pares durante a iteração:

// (16, 15). Sua concatenação é igual a 1615, que é maior que 743, então o par não é pequeno;
// (1, 0). Sua concatenação é igual a 10, que é menor que 743, então o par é pequeno;
// (4, 2). Sua concatenação é igual a 42, que é menor que 743, então o par é pequeno.
// (2, 11). Sua concatenação é igual a 211, que é menor que 743, então o par é pequeno;
// (14, 7). Sua concatenação é igual a 147, que é menor que 743, então o par é pequeno.
// Existem 4 pares pequenos durante a iteração, então a resposta é 4.

// Entrada / Saída

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// Um array de inteiros não negativos.

// Restrições garantidas:
// 0 ≤ a.length ≤ 105,
// 0 ≤ a[i] ≤ 104.

// [input] array.integer b

// Um array de inteiros não negativos.

// Restrições garantidas:
// b.length = a.length,
// 0 ≤ b[i] ≤ 104.

// [input] integer k

// Um inteiro com o qual pares concatenados devem ser comparados.

// Restrições garantidas:
// 0 ≤ k ≤ 109.

// [output] integer

// O número de pares pequenos durante a iteração.

// [JavaScript] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

1234
function contarParesPequenos(a, b, k) {

    b.reverse();
    let parPeq = 0;
    for(i in a) {
        let numero = parseInt(`${a[i]}${b[i]}`);
        if(numero < k) parPeq = parPeq + 1;
    }

    return parPeq;

}

let a = [1, 2, 3]
let b = [1, 2, 3]
let k = 31;
console.log(contarParesPequenos(a, b, k))
