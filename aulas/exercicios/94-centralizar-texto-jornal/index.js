// Você está moderando a página de um jornal e deve alinhar o texto na página de maneira adequada. O texto é
// fornecido a você no seguinte formato:

// paragrafos é um array de parágrafos, onde cada parágrafo é representado como um array de palavras;
// largura representa o número máximo de caracteres que cada linha da página do jornal pode incluir.
// Sua tarefa é produzir uma página de jornal de acordo com as seguintes especificações:

// Para cada parágrafo paragrafos[i], incluir todas as palavras paragrafos[i][j] em ordem, separados por espaços;
// Inclua tantas palavras quanto possível por cada linha da página (o comprimento da linha não deve exceder a
//     largura), e coloque a próxima palavra em uma nova linha se exceder o limite;
// No caso de excesso de espaço em branco, as palavras dos paragrafos[i] devem ser alinhadas ao centro:
// se o número de espaços em branco em excesso for par, alinhe os espaços à esquerda e à direita igualmente;
// se o número de espaços em branco em excesso for ímpar, alinhe os espaços iniciais para serem um a menos do que
// os espaços finais.
// Inclua uma borda de caracteres * ao redor de todas as bordas do resultado - esses caracteres não contam para
// a largura, eles apenas são adicionados para tornar a saída mais bonita.
// É garantido que é possível justificar os parágrafos ao jornal. Retorne a página do jornal resultante como uma
// matriz de strings.

// Exemplo

// Para paragrafos = [["hello","world"], ["How", "areYou", "doing "], ["Please look", "and align", "to center"]]
// e largura = 16, a saída deve ser

// centralizarTextoJornal(paragrafos, largura) = ["******************",
//                                                "*  hello world   *",
//                                                "*How areYou doing*",
//                                                "*  Please look   *",
//                                                "*   and align    *",
//                                                "*   to center    *",
//                                                "******************"]
// Vamos considerar todos os parágrafos:

// paragrafos[0] = ["hello", "world"], ambas as palavras cabem em uma linha com um comprimento combinado de 11.
// Como largura = 16, existem 16 - 11 = 5 espaços em excesso que precisaremos adicionar a esta linha. Como 5 é
// ímpar, a linha deve ter 2 espaços à esquerda e 3 à direita. Portanto, o resultado para este parágrafo é a linha
// "  hello world   ".
// paragrafos[1] = ["How","areYou","doing"], todas as três palavras cabem em uma linha com um comprimento de 16.
// Não há espaços em excesso, então o resultado é "How areYou doing".
// paragrafos[2] = ["Please look","and align","to right"], as palavras "Please look" e "and align" são muito
// longos para combinar (o resultado teria um comprimento de 21 > 16), então começaremos uma nova linha com
// "and align"; além disso, as palavras "and align" e "to center" teriam um comprimento combinado de 19 > 16,
// que também é muito longo, então "to center" também estará em uma nova linha. Uma vez que os espaços em excesso
// para este parágrafo são 5,7 e 7, o resultado deste parágrafo é
// "  Please look   "
// "   and align    "
// "   to center    "
// Para criar a borda, adicionaremos um asterisco (caractere *) no início e no final de cada linha, e
// também adicionaremos uma string de asteriscos largura + 2 antes do primeiro parágrafo e após o último parágrafo .

// Entrada / Saída

// [execution time limit] 4 seconds (js)

// [input] array.array.string paragrafos

// Um array de arrays de strings representando texto para a página do jornal.

// Restrições garantidas:
// 1 ≤ paragrafos.length ≤ 50,
// 1 ≤ paragrafos[i].length ≤ 10,
// 1 ≤ paragrafos[i][j].length ≤ largura.

// [input] integer largura

// Um inteiro representando a largura da página do jornal.

// Restrições garantidas:
// 5 ≤ largura ≤ 100.

// [output] array.string

// Retorne a página do jornal resultante como um array de strings, em que a
// in string representa a in linha da página do jornal.,


function centralizarTextoJornal(paragrafos, largura) {
    largura;
    let frases = [];
    let espaço = ' ';
    for ( i in paragrafos) {

            if(paragrafos[i].length > 1) {

                for(j in paragrafos[i]){
                    let palavraAtual = paragrafos[i][j];
                    let linhaAtual;
                    linhaAtual = linhaAtual + linhaAtual.concat(palavraAtual)
                    console.log(linhaAtual)
                    
                    
                }
            } else {
                let resto = 16 - paragrafos[i][0].length;
                    if(resto % 2 == 0) {
                        frases.push(`*${espaço.repeat((resto/2) - 1)}${paragrafos[i]}${espaço.repeat((resto/2) - 1)}*`)
                    } else {
                        frases.push(`*${espaço.repeat((resto/2) - 2)}${paragrafos[i]}${espaço.repeat((resto/2) - 1)}*`)
                    }
            }

    }
    return frases;

}

let paragrafos = [
    ["oii"],
    ["hello","world"], 
 ["How","areYou","doing"], 
 ["Please look","and align","to center"]
    ];

let largura = 16;



console.log(centralizarTextoJornal(paragrafos, largura))