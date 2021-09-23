//Funcoes fabrica (Factory Functions)
function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        peso,
        fala: function(assunto) {
            return `${nome} está ${assunto} e pesa ${this.peso}`; // this será sempre quem chamar o objeto
        },
        altura,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
    };
}

const p1 = criaPessoa('Jonathan', 'Ferreira', 77.4, 1.66);
const p2 = criaPessoa('Ligia', 'Cristina', 80.4, 1.55);
console.log(p1.fala('falando sobre tecnologia'))
console.log(p1.imc());
p1.nomeCompleto = 'Jhouus Jonathan Ferreira';
console.log(p1.nomeCompleto); // metodo sen chamado como se chama um atributo comum


console.log(p2.fala('falando sobre farmácia'));