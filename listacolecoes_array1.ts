import leia from 'readline-sync';
const lista: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);
let busca: number
let continua: boolean

console.log("** Exercício 1 - Array **");

console.log("\n PESQUISE NA LISTA!");

/** 
Escreva um programa para criar uma Collection Array do tipo number, inicializada com 10 valores inteiros. 
O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro 
e caso ele seja encontrado no Array, exiba na tela a posição deste número na Collection. 
Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!
*/

do{
busca = leia.questionInt("\nDigite o numero que deseja encontrar: " );

if ((lista.indexOf(busca) >= 0))
{
    console.log(`O número ${busca} está localizado na posição ${lista.indexOf(busca)}`);
}
else
{
    console.log(`O número ${busca} não foi encontrado!`);
} 

continua = leia.keyInYNStrict(`\nDeseja realizar uma nova busca? `)
} while (continua == true)

console.log("\nAgradecemos por utilizar o mecanismo!");
