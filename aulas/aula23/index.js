/*
&& -> false && true -> false  "o valor mesmo"
|| ->  true || false -> retorna verdadeiro "valor real"

FALSY
false
0
'' "" ``
null/undefined
NaN

*/

console.log('Jonathan Ferreira' && true && 'Maria'); // Maria
console.log('Jonathan Ferreira' && true && NaN); // nan

console.log('Jhouus' && 'Maria') // maria
console.log('Jhouus' && '' && 'Maria') // ' ' (vazio)
console.log('Jhouus' && undefined && 'Maria') // undefined
console.log('Jhouus' && NaN && 'Maria') // NaN


function falaOi () {
    return 'Oi';
}

let vaiExecutar; 
console.log(vaiExecutar && falaOi()); // undefined pois é o valor de vaiExecutar

let vaiExecutar2 = "jhouus";
console.log(vaiExecutar2 && falaOi()); // oi pois vaiExecutar2 é true 


console.log(0 || false || null || 'Jonathan' || true) // Jonathan por ser o primeiro verdadeiro


const corUsuario = 'Vermelho'; // 
const corPadrao = corUsuario || 'preto'; // Retorna o valor da variavel corUsario caso ela não seja Null

console.log(corPadrao)

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // impresso o ultimo valor falso, já que só existem falsos