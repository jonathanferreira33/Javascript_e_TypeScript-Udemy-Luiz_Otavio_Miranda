// OBJETO DATE

const tresHoras = 60 * 60 * 3 * 1000; // Três horas em milisegundos
const umDia = 60 * 60 * 24 * 1000;

const data = new Date(0 + tresHoras + umDia); //função construtora sempre primeira letra maiuscula
// console.log(data.toString())

const data01 = new Date(1993, 6, 22, 14, 30); //ano, mes-1, dia, hora, min, seg. 
const data02 = new Date(1993, 6); // há necessidade de utilizar pelo menos os 2 primeiros parametros, caso utilizar só o primeiro ele entenderá como milisegundos, todos os ausentes passam a se tornar o peimeiro dia/mes/min seg ...
console.log(data01.toString())
console.log(data02.toString())

const data03 = new Date('2021-07-22 14:29:59')
console.log('Dia', data03.getDate());
console.log('Mês', data03.getMonth() + 1); // Mês começa 0
console.log('Ano', data03.getFullYear());
console.log('Hora', data03.getHours());
console.log('Minuto', data03.getMinutes());
console.log('Segundo', data03.getSeconds());
console.log('Milésimo de segundos', data03.getMilliseconds());
console.log('Dia Semana', data03.getDay()); // 0 = Domigo, 6 = Sábado

// console.log(data03.toString())

console.log(Date.now()); //milésimo de segundos contados a partir de 01/01/1970

console.log("---------------------------------------------")

function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
  const dia = zeroEsquerda(data.getDate());
  const mes = zeroEsquerda(data.getMonth() + 1);
  const ano = zeroEsquerda(data.getFullYear());
  const hora = zeroEsquerda(data.getHours());
  const min = zeroEsquerda(data.getMinutes());
  const seg = zeroEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`

}

const data05 = new Date();
const dataBrasil = formataData(data05);
console.log(dataBrasil);
