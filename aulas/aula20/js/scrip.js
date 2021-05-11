
function criaPessoa (nome, sobrenome, peso, altura) { //função com PARAMETROS
    return{
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura
    };
}

function pegaForm() {
    const form = document.querySelector('.form'); // .form para classe / form para tag  / #form para id 
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventForm(event) {
        event.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        let pessoa = criaPessoa(nome, sobrenome, peso, altura);
        
        pessoas.push(pessoa);

        resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome}, ${pessoa.altura}, ${pessoa.peso}`;


        console.log(pessoas)
    }

    form.addEventListener('submit', recebeEventForm);

    

    // forma para previnir o envio do formulário
    // form.onsubmit = function(event){ // coloca-se- 'on'
    //     event.preventDefault();
    //     alert(1)
    // };
} 
pegaForm();