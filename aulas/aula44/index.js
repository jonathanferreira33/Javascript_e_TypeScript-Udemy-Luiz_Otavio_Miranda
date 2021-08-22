// try { // tente
//     console.log(Deuruim)
// } catch(error) {
//     console.log('Deu ruim')
// }

function soma (x, y) {
    if(typeof x !== 'number' || typeof y !== 'number' ){
        throw new Error('x e y precisam ser números'); // classe de erro JS ex.: RefenceError, TypeError ..
    }

    return x + y;
}

try {
    console.log(soma(10, 15));
    console.log(soma(10, '15'));
} catch(err) {
    console.log(err)
}