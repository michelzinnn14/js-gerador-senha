const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
     tamanhoSenha = tamanhoSenha - 1;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
     tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContent = tamanhoSenha;
}

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

for(i = 0; < checkbox.lengh; i++){
    checkbox[i].onclick = gerasenha;
}

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
geraSenha();

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LetrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';

function geraSenha(){
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++){
    let numeroAleatorio = Math.random() * letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);

        if (checkbox[3].checkd){
        alfabeto = alfabeto + letrasMinusculas;
        }
        if (checkbox[3].checkd){
        alfabeto = alfabeto + numeros;
        }
        if (checkbox[3].checkd){
        alfabeto = alfabeto + simbolos;
        }
        
    senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}
