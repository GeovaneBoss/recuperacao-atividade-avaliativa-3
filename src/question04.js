/*Crie um algoritmo para um calcular o valor de uma hospedagem. 
Você deve solicitar ao usuário a quantidade de diárias e também a idade do hospede. 
Com essas informações você calcular o valor total da diária com base na tabela de preço abaixo.
 Além disso, você deve levar em consideração que caso a pessoa tenha mais de 60 anos, ela terá um desconto de 20%.
  Ao final o algoritmo deve informar o valor total da hospedagem.
Menor ou igual a 5 dias - R$100,00 a diária
De 6 até 10 dias - R$90,00 a diária
A partir de 11 dias - R$80,00 a diária
*/ 


var DIARIA_MENOR_IGUAL_5 = 100;
var DIARIA_6_A_10 = 90;
var DIARIA_A_PARTIR_DE_11 = 80;
var DESCONTO_IDOSO = 0.2;

var diarias = parseInt(prompt('Quantidade de diárias:'));
var idadeHospede = parseInt(prompt('Idade do hóspede:'));

let valorDiaria;

if (diarias <= 5) {
    valorDiaria = DIARIA_MENOR_IGUAL_5;
} else if (diarias <= 10) {
    valorDiaria = DIARIA_6_A_10;
} else {
    valorDiaria = DIARIA_A_PARTIR_DE_11;
}

if (idadeHospede > 60) {
    valorDiaria *= (1 - DESCONTO_IDOSO);
}

var valorTotal = diarias * valorDiaria;
console.log(`Valor total da hospedagem: R$${valorTotal.toFixed(2)}`);
