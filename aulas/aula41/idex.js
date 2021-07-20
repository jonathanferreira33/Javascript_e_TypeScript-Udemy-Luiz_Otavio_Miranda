const nA = 25;
const nB = 25;

function numeroMaior (numA, numB) {
    let numMaior;
 
    if (numA > numB) {
        numMaior = numA
    } else if (numA < numB) {
        numMaior = numB
    } else {
        numMaior = 'Números iguais';
    }
    return numMaior;
} 

function numeroMaior1(numC, numD){
    return numC > numD ? numC : numD;
}

const numeroMaior2 = (numE, numF) => numE > numF ? numE : numF ;



console.log(numeroMaior(nA, nB));
console.log(numeroMaior1(10, 21));
console.log(numeroMaior2(99, 33));


