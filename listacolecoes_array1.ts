import leia from 'readline-sync';
const lista: Array<string> = new Array<string>();

console.log("** Exercício 1 - Array **");

console.log("\n LISTA COLORIDA!");

/** 
Escreva um programa para criar uma Collection Array de Objetos do tipo string. O
programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá
adicioná-las individualmente no Array. Em seguida, faça o que se pede:
● Mostre na tela todas as cores adicionadas.
● Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
*/

for(let i =0; i < 5; i++)
{
    lista.push(leia.question("\nDigite uma cor: " ));
    
}

console.log("\n**********************************")
console.log("Lista de todas as cores adicionadas: ")
//console.log(lista) mostra os elementos na mesma linha
for(let cor of lista)
{
    console.log(cor);
}

console.log("\nCores em ordem alfabética: ")
lista.sort()
for(let cor of lista)
{
    console.log(cor);
}