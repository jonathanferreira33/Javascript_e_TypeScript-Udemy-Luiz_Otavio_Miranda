function Calculadora() {
    
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaClick();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if(e.keyCode === 13) {
                this.operation();
            }
        })
    };

    this.capturaClick = () => {
        document.addEventListener('click', event => {
            const elemento = event.target; 
            if(elemento.classList.contains('btn-num')) this.addNumberDisplay(elemento); // enviando o botão
            if(elemento.classList.contains('btn-clear')) this.clear();
            if(elemento.classList.contains('btn-del')) this.del();
            if(elemento.classList.contains('btn-equals')) this.operation(); 
        });
    };

    this.addNumberDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clear = () => this.display.value = "";
    
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.operation = () => {
        try {
            const conta = eval(this.display.value);
            if(!conta) { alert('Conta inválida')
            return;
        }

        this.display.value = conta;

        } catch (error) {
            alert('Conta inválida');
            return;
        }
    };
       
}


const calculadora = new Calculadora();
calculadora.inicia();