function f(n){
    if(n == 1 || n ==2){
        return 1;
    }

    if(n == 0) {
        return 0
    } else {
        return f(n-1) + f(n-2)
    }
}

console.log(f(6));

let tampas;


for(i=1; i <= 10; i++){
    tampas = i + (1*2)
}

console.log(tampas);