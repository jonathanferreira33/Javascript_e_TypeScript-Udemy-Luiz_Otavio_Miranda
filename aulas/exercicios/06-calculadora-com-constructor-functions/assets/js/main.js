function criaCalculadora() {
    
    return {
        //atributos
        display: document.querySelector('.display'),

        
        
        
        //metodos
        inicia: function() {
            this.clickBtn();
            this.pressionaBackSpace();
            this.pressEnter();
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
              if (e.keyCode === 8) {
                e.preventDefault();
                this.clearDisplay();
              }
            });
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.operation();
                }
            });
        },

        operation() {
            let conta = this.display.value;

            try {
              conta = eval(conta);
      
              if(!conta) {
                alert('Conta inválida');
                return;
              }
      
              this.display.value = String(conta);
            } catch(e) {
              alert('Conta inválida');
              return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        clickBtn() {
            document.addEventListener('click', e => { 
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                }

                if(el.classList.contains('btn-equals')){
                    this.operation();
                }

                this.display.focus();

            });//poderia usar arrow function pois ela não muda o valor do this
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1); // tamanho da string -1
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }


    };
}


const calculadora = criaCalculadora();
calculadora.inicia();