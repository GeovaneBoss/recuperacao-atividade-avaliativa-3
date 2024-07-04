/* Você foi contratado para desenvolver o sistema de notas do carnaval 2025. 
Você precisa receber 6 notas de 0 à 10. Dessas notas, devem ser desconsideradas duas notas, a maior e a menor. 
Ao final, o algoritmo deve apresentar a média com as outras 4 notas restantes.*/

import leia from "readline-sync"

var notas = [];
for (var i = 0; i < 6; i++) {
    var nota = parseFloat(prompt(`Digite a ${i + 1}ª nota (de 0 a 10):`));
    notas.push(nota);
}

notas.sort((a, b) => a - b);


const notasRestantes = notas.slice(1, 5);


const somaNotas = notasRestantes.reduce((total, nota) => total + nota, 0);
const media = somaNotas / 4;

console.log(" média das notas é:" ${media.toFixed(2)});


for (var i = 0; i < 3; i++) {
    var nome = leia.question("\nINFORME O NOME DO ESTUDANTE: ");
    var nota1 = leia.questionFloat("\nINFORME A PRIMEIRA NOTA: ");
    var nota2 = leia.questionFloat("\nINFORME A SEGUNDA NOTA: ");
    var nota3 = leia.questionFloat("\nINFORME A TERCEIRA NOTA: ");
    var nota4 = leia.questionFloat("\nINFORME A TERCEIRA NOTA: ");
    var nota5 = leia.questionFloat("\nINFORME A TERCEIRA NOTA: ");
    var nota6 = leia.questionFloat("\nINFORME A TERCEIRA NOTA: ");
   
}


