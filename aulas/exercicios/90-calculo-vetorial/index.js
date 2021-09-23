function calcularFatorial (f) {
        
    if (f === 0 || f === 1) {
        return 1;
    }
     
    var res = f;
    var pM = f - 1;
    for (var i = pM; i > 1; i--) {
        res *= i;
    }
     
    return `Fatorial de: ${f}
    ${f}!= ${res}`;
}
 
console.log(calcularFatorial(5));