fuction saudacao(nomeJogador) {
    console.log("Bem vindo ao jogo, " + nomeJogador + "!")
}

saldacao("Aline");

//Função que recebe um valor
function subirDeNivel(nívelAtual) {
    return nivelAtual +1;
}

let meuNivel = 10;

let nivelAtualizado = subirDeNivel(meuNível);

console.log('Seu novo nível: ' + nivelAtualizado)