let controle = 0;
while (controle <= 10) {
    console.log(controle);
    controle++;
}

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let min = 1;
let max = 50
let rand = random(min, max);
console.log(rand)

while (rand !== 10 ) {
    rand = random(min, max);
    console.log(rand);
}

console.log('#############################################################')

do {
    rand = random(min, max);
    console.log(rand);
} while( rand !== 10);