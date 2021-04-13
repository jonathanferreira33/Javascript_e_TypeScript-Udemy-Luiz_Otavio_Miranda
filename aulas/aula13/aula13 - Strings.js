//              0123456789...   16 
let stringUm = 'Eu sou uma string'
let stringDois = "Eu tambem sou uma string"

console.log(stringUm)
console.log(stringDois)

// Strings são indexaveis 
console.log(stringUm[0]) // esperado = E
console.log(stringDois.charAt(0)) // esperado = E

// É possivel pesquisar o index, caso o resultado seja -1 texto não encontrado
console.log(stringUm.indexOf('Eu'))
console.log(stringUm.indexOf('string', 10)) // o numero representa o incio da procura
console.log(stringUm.lastIndexOf('Eu')) // procura de tras para frente

// Strings podem sofrer contanenacoes
console.log(stringUm.concat(', posso sofrer contatenação', ', com + de um valor inclusive')) // esperado = Eu sou uma string, posso sofrer contatenação
console.log(stringUm + ', posso sofrer contatenação')
console.log(`${stringUm}, posso sofrer contatenação`)

// Há possibilidade do uso de expressos regulares
console.log(stringDois.match(/[a-z]/g)) // retorno de letras minusculas
console.log(stringDois.search(/g/)) // retorno o index do que for solicitado, esperado=23

// Há possibilidade de substitução 
console.log(stringDois.replace('string', 'texto')) // substitui primeiro elemento pelo segundo, esperado: Eu tambem sou uma texto
console.log(stringDois.replace(/s/g, '$')) // esperado: Eu tambem $ou uma $tring (a flag G faz com q substitua em todas as ocasioes)

// Descobrir tamanho
console.log(stringDois.length)

// "Fatiar"
console.log(stringUm.slice(3, -7)) //((inicio), (tras para frente)) esperado: sou uma
console.log(stringUm.split(' ')) // Esperado:  Array separado a cada " " (espaço)
console.log(stringUm.split(' ', 2)) // Esperado:  primeiros 2 resultados

// Mudar o formato dos caracteres
console.log(stringDois.toUpperCase()) // transforma em maiusculas
console.log(stringDois.toLowerCase()) // transforma em minusculas

