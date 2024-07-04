/* Escreva um algoritmo que recebe três números inteiros e após isso, mostre-os em ordem crescente (do menor para o maior).
 Por exemplo, caso os tres números sejam 5,7,2. O algoritmo deve apresentar 2,5,7.*/ 

 import leia from "readline-sync"

 var numeros= []
  
 for(var i = 0 ; i <3 ; i++){
 numeros[i] = leia.questionFloat("Informe o "+ (i+1) + " numero: ")
 }
 console.log("NUMEROS INFORMADOS: "+ numeros.sort());
 