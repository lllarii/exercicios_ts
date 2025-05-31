import leia from 'readline-sync';
const lista: Set<number> = new Set<number>();
const lista2: Set<number> = new Set<number>();

console.log("** Exercício 3 - Set **");

console.log("\n LISTA ÚNICA!");

/** 
Escreva um programa para criar uma Collection Set do tipo number. O programa
deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos
e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
● Mostre na tela todos os elementos da Collection Set.
*/

for(let i =0; i < 10; i++)
{
    lista.add(leia.questionInt("\nDigite um numero: " ));
}

console.log("\n**************************")
console.log("Lista de números adicionados: ")
//console.log(lista) mostra os elementos na mesma linha
for(let num of lista)
{
    console.log(num);
}

console.log("Lista de números em ordem crescente: ")

function compareAs(a: number,b: number)
{
    return a-b;
}

const listaArray = Array.from(lista);
listaArray.sort(compareAs);
//console.log(listaArray);
for (let num of listaArray)
{
    console.log(num);
}

console.log("\n*****************************************")
console.log("Versão avisando que o número está repetido: ")
let controle: boolean
controle = false

for(let i = 0; i < 10; i++)
{
    do{
        let item
        item = leia.questionInt("\nDigite um numero: " );
        if(lista2.has(item) == false)
        {
            lista2.add(item);
            controle = false
        }
        else
        {
            console.log("Este número já foi adicionado. Tente novamente.");
            controle = true
        }
    } while (controle == true) 
}

console.log("\nLista de números adicionados: ")
//console.log(lista) mostra os elementos na mesma linha
for(let num of lista2)
{
    console.log(num);
}

console.log("\nLista de números em ordem crescente: ")
const lista2Array = Array.from(lista2);
lista2Array.sort(compareAs);
//console.log(listaArray);
for (let num of lista2Array)
{
    console.log(num);
}