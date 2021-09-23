var numeros = [1,2,3, 4,5,6,7,8];


function paresEimpares(numeros) {
    let pares = []
    let impares = []
    for(numero in numeros){
        if(numero % 2 == 0) {
            pares.push(numero);
        }else{
            impares.push(numero);
        }
    }  
    return `Números pares: ${pares.toString()}
    Números impares: ${impares.toString()}`
};

console.log(paresEimpares(numeros));
