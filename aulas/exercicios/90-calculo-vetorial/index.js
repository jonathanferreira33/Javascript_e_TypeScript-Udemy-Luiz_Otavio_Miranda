function calcularFatorial (f) {
        
    if (f === 0 || f === 1) {
        return 1;
    }

    let numeros = [];
    let total = 0;

    recursiva(f);
    function recursiva(max) {
        if(max > 1) {
        max--;
        numeros.push(max);
        recursiva(max);    
        }
    }

    console.log(total)
     
    let res = f;
    let pM = f - 1;
    for (let i = pM; i > 1; i--) {
        res *= i;
    }

    return `Fatorial de: ${f}
    ${f}!${numeros.toString().replace(/,/g,'*')}= ${res}`;
}
 
console.log(calcularFatorial(10));