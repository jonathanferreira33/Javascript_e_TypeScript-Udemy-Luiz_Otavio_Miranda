const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');

let seg = 0;
let timer;

iniciar.addEventListener('click', function(e) {
    relogio.classList.remove('pausado');
    clearInterval(timer)
    iniciaRelogio();
})
pausar.addEventListener('click', function(e) {
    relogio.classList.add('pausado');
    clearInterval(timer)
})

// forma 2: melhor performance

document.addEventListener('click', function(e) {
    const el = e.target; /// pegar o elemento clicado no document

    if(el.classList.contains('zerar')){
        relogio.classList.remove('pausado');
        clearInterval(timer)
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }

    // ...
});

function getTimeFromSec(seg){
    const data = new Date(seg * 1000);
    return data.toLocaleTimeString('pt-BR', {
       hour12: false,
       timeZone: 'GMT'
    });
}

function iniciaRelogio() {
    timer = setInterval(function() {
        seg++;
        relogio.innerHTML = getTimeFromSec(seg);
    }, 1000);
}
