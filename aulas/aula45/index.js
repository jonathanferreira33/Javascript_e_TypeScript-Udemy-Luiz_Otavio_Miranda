try {
//exec. quando não há erros
} catch (e) {
    //exec. quando há erros
} finally {
    // sempre
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
try {
    const data = new Date('07-22-1993 14:30:30')
    const hora = retornaHora(data);
    console.log(hora);
} catch (e) {
    // tratar erro
} finally {
    console.log('Tenha um bom dia')
}