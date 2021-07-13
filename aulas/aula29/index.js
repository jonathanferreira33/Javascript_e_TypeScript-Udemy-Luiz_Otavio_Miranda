const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;
console.log(diaSemana)

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo'
        break;
    case 1:
        diaSemanaTexto = 'Segunda'
        break;
    case 2:
        diaSemanaTexto = 'Terça'
        break;
    case 3:
        diaSemanaTexto = 'Quarta'
        break;
    case 4:
        diaSemanaTexto = 'Quinta'
        break;
    case 5:
        diaSemanaTexto = 'Sexta'
        break;
    case 6:
        diaSemanaTexto = 'Sábado'
        break;
    default:
        diaSemanaTexto = '';
}

console.log(diaSemanaTexto);

function getDiaSemanatexto (diaSemana) {
    let diaSemanaTexto2;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto2 = 'Domingo'
            return diaSemanaTexto2;
        case 1:
            diaSemanaTexto2 = 'Segunda'
            return diaSemanaTexto2;
        case 2:
            diaSemanaTexto2 = 'Terça'
            return diaSemanaTexto2;
        case 3:
            diaSemanaTexto2 = 'Quarta'
            return diaSemanaTexto2;
        case 4:
            diaSemanaTexto2 = 'Quinta'
            return diaSemanaTexto2;
        case 5:
            diaSemanaTexto2 = 'Sexta'
            return diaSemanaTexto2;
        case 6:
            diaSemanaTexto = 'Sábado'
            return diaSemanaTexto2;
        default:
            diaSemanaTexto = '';
    }
}

const diaDaSemanaTextoFuncao = getDiaSemanatexto(diaSemana);
console.log(diaDaSemanaTextoFuncao);