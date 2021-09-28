const nomes = ['Jonathan', 'Maria', 'Ligia', 'Sheila', 'Raffa'];
nomes[2] = "Jhouus";
// delete nomes[1];
console.log(nomes);

// valor po referencia
const novo = nomes
novo.pop(); // alterar um vai alterar o outro
console.log(nomes);

//facilidade para copiar (sem utilizar a referencia)
const nomes2 = new Array(...nomes);
console.log(nomes2);

//tamanho do array
console.log(nomes2.length);

const removido = nomes2.pop(); // pop() alem de remover o ultimo elemento, ele retorno o elemento removido
console.log(nomes2, removido);

const removido2 = nomes2.shift(); // retira o 1º valor e indice
console.log(nomes2, removido2);


//adicionar item no final
nomes2.push('Renata')
nomes2.push('Erick')
console.log(nomes2);

//adicionar no começo
nomes2.unshift('Iza')
nomes2.unshift('Thais') //   0       1       2        3         4         5  
console.log(nomes2); // [ 'Thais', 'Iza', 'Maria', 'Jhouus', 'Renata', 'Erick' ]


//fatiar
const nomes3 = nomes2.slice(1, 4); // slice(onde quero começar, onde quero terminar sem incluir o ultimo)
console.log(nomes3);

//transformar String em Array
const nome = 'Jonathan Ferreira';
const nomes4 = nome.split(' '); // split separa de acordo com o que for passado entre os parenteses
console.log(nomes4);

//transformar Array em String
const nome2 = nomes3.join(' ');
console.log(nome2)
