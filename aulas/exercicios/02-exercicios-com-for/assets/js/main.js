const elementos = [
    {tag: 'p' , texto: 'Qualquer texto. p'},
    {tag: 'div' , texto: 'Qualquer texto. div'},
    {tag: 'section' , texto: 'Qualquer texto. section'},
    {tag: 'footer' , texto: 'Qualquer texto. footer'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');


for ( let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let elemento = document.createElement(tag);
    elemento.innerText = texto;
    div.appendChild(elemento);
}

container.appendChild(div);