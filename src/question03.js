/*Você precisa desenvolver um algoritmo para calcular a pontuação de um jogador em um jogo de futebol. Nesse momento será 
analisada apenas a quantidade de gols, passes certos e passes errados.
Cada Gol: 50 Pontos
Cada Passe Certo: 10 Pontos
Cada Passe Errado: -5 Pontos
Você deve solicitar essas informações ao usuário e após isso, o algoritmo deve calcular a pontuação do jogador e informar se o jogador foi bem
 ou mal na partida, levando como base a seguinte tabela.
Pontuação < 50 - Péssima partida.
Pontuação de 50 até 100 - Partida ruim.
Pontuação de 100 até 150 - Fez o básico
Pontuação de 150 até 200 - Foi bem na partida
Pontuação acima de 200 - Jogou demais*/ 



function calcularPontuacao(gols, passesCertos, passesErrados) {
    var PONTOS_POR_GOL = 50;
    var PONTOS_POR_PASSE_CERTO = 10;
    var PONTOS_POR_PASSE_ERRADO = -5;

    var pontuacao = gols * PONTOS_POR_GOL + passesCertos * PONTOS_POR_PASSE_CERTO + passesErrados * PONTOS_POR_PASSE_ERRADO;

    if (pontuacao < 50) {
        return 'Péssima partida.';
    } else if (pontuacao >= 50 && pontuacao < 100) {
        return 'Partida ruim.';
    } else if (pontuacao >= 100 && pontuacao < 150) {
        return 'Fez o básico.';
    } else if (pontuacao >= 150 && pontuacao < 200) {
        return 'Foi bem na partida.';
    } else {
        return 'Jogou demais!';
    }
}

var gols = parseInt(prompt('Quantidade de gols marcados:'));
var passesCertos = parseInt(prompt('Quantidade de passes certos:'));
var passesErrados = parseInt(prompt('Quantidade de passes errados:'));

var resultado = calcularPontuacao(gols, passesCertos, passesErrados);
console.log(resultado);
