// FORMA 1 ------------------------------------------------------
// const h1 = document.querySelector('.container h1');
// const data = new Date()
// h1.innerHTML = data.toString();


// function getDiaSemanaTexto (diaSemana) {
//     let diaSemanaTexto2;
//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto2 = 'Domingo'
//             return diaSemanaTexto2;
//         case 1:
//             diaSemanaTexto2 = 'Segunda-feira'
//             return diaSemanaTexto2;
//         case 2:
//             diaSemanaTexto2 = 'Terça-feira'
//             return diaSemanaTexto2;
//         case 3:
//             diaSemanaTexto2 = 'Quarta-feira'
//             return diaSemanaTexto2;
//         case 4:
//             diaSemanaTexto2 = 'Quinta-feira'
//             return diaSemanaTexto2;
//         case 5:
//             diaSemanaTexto2 = 'Sexta-feira'
//             return diaSemanaTexto2;
//         case 6:
//             diaSemanaTexto = 'Sábado'
//             return diaSemanaTexto2;
//         default:
//             diaSemanaTexto = '';
//     }
// }

// function getNomeMes (numeroMes) {
//     const nomeDosMeses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'Agosto', 'setembro',  'outubro', 'novembro', 'dezembro'];
//     return nomeDosMeses[numeroMes];
// }

// function zeroEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}, ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
// }



// h1.innerHTML = criaData(data);


//------------------------------------------------------

// FORMA 2
const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full' });
