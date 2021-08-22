// Você recebe um array de inteiros a. Sua tarefa é calcular quantos números no array são iguais à
// média aritmética de seus vizinhos imediatos.

// Em outras palavras, conte o número de índices i tais que a [i - 1] + a [i + 1] = 2 * a [i].

// * Nota: * Se a [i - 1] ou a [i + 1] não existir, eles devem ser considerados iguais a 0.

// Exemplo

// Para a = [2, 4, 6, 6, 3], a saída deve ser contarMediaAritmetica(a) = 3.

// example

// Existem elementos 3 de a que são iguais à média aritmética de seus vizinhos:

// a [0] = (0 + 4) / 2
// a [1] = (2 + 6) / 2
// a [4] = (6 + 0) / 2
// Portanto, a resposta é 3.

// Entrada / Saída

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// Um array de inteiros.

// Restrições garantidas:
// 1 ≤ a.length ≤ 103,
// 0 ≤ a[i] ≤ 106.

// [output] integer

// O número de elementos de a que são iguais à média aritmética de seus vizinhos.

// [JavaScript] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }


// Para a = [2, 4, 6, 6, 3], a saída deve ser contarMediaAritmetica(a) = 3.

let a = [2, 4, 6, 6, 3]
function contarMediaAritmetica(a) {
    let contador = 0;
    let b = [...a]
    for (let i = 0; i < a.length; i++) {
        let ant = a[i - 1] >= 0 ? a[i - 1] : 0;
        let suc = b[i + 1] >= 0 ? b[i + 1] : 0;
        
        if((ant + suc) / 2 == a[i]) contador = contador+1

    }

    return contador;
    
}




console.log(contarMediaAritmetica(a));