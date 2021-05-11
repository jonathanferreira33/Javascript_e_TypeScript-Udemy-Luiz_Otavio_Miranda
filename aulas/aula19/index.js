// AULA - Valores primitivos e valores por referência

/*
Primitiivos (imutáveis) - string, number, boolean, undefined, null, bigint, symbol


Referência (multável) - array, object, function
*/

let nome = 'Jonathan'
console.log(nome[0], nome)
nome[0] = 'j' 
console.log(nome[0], nome)



let a = 'J'
let b = a //copia
console.log(a, b)
a = 'Jhouus'
console.log(a, b)



//referência
let c = [1,2,3];
let d = c;
console.log(c, d)

c.push(44)
console.log(c, d) //ambos recebem alteração

d.pop();
console.log(c, d) //ambos recebem alteração


//caso exista necessidade de cópia:
d = [...c]; // spread
c.push('33')
console.log(c, d) //somente c recebe alteração

