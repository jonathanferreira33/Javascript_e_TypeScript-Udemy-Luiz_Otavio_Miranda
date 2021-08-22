const inputNovaTarefa = document.querySelector('.input-nova-tarefa');
const btnAddTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaBntApagar(li) {
    li.innerText+= ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function limpaInput() {
    inputNovaTarefa.value = '';
    inputNovaTarefa.focus();
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputNovaTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputNovaTarefa.value) return;
        criaTarefa(inputNovaTarefa.value);
    }
});

function criaTarefa(textInput) {
    const li = criaLi();
    li.innerText = textInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBntApagar(li);
    salvarTarefas();
}

btnAddTarefa.addEventListener('click', function() {
    if (!inputNovaTarefa.value) return;
    criaTarefa(inputNovaTarefa.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTerefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText.replace('Apagar', '').trim();
        listaDeTerefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTerefas);
    localStorage.setItem('tarefas', tarefasJSON); // LS Salva apenas strings
}

function addTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTerefas = JSON.parse(tarefas); // converter de volta para obj. js
    
    for (let tarefa of listaDeTerefas) {
        criaTarefa(tarefa);
    }
}

addTarefasSalvas();