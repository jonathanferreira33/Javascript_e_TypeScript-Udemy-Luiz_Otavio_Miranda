const nome = 'Jhouus'
console.log(nome[0]) // primeira letra

const alunos = ['Jonathan', 'Mayara', 'Liszandra', 'Andressa', 'Aline'];

console.log(alunos[0]); // primeiro elemento do array
alunos[0] = 'jhouus' // substitui o elemento 0
console.log(alunos); 

alunos[alunos.length] = 'Jo'//inclui Jo ao final
alunos[alunos.length] = 'J' // "      j "    "
console.log(alunos);

alunos.push('JonJon') // função para incluir JonJon no final
console.log(alunos);

alunos.unshift('Jonathan') // função para incluir Jonathan no começo
console.log(alunos);


alunos.pop(); //remove do fim
console.log(alunos);

alunos.shift(); //remove do começo
console.log(alunos);

console.log(alunos.slice(0, 3))//slice serve para fatiar, esperado elemento 0 ao elemento 2 - jhouus mayara liszandra
console.log(alunos.slice(0, -4))// ou com valor negativo para eliminar de tras para frante

console.log(alunos instanceof Array); //verificar se é um array esperado TRUE