import leia from 'readline-sync';
const lista: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);
let busca: number
let continua, tem: boolean

console.log("** Exercício 4 - Set **");
console.log("\n PESQUISE NA LISTA!");
/** 
Escreva um programa para criar uma Collection Set do tipo number, inicializada com 10 valores inteiros. 
O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro 
e caso ele seja encontrado na Collection Set, exiba na tela a mensagem: O Número NN foi encontrado! 
Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!
*/
do{
busca = leia.questionInt("\nDigite o numero que deseja encontrar: " );
tem = lista.has(busca)

if ((tem == true))
{
    console.log(`O número ${busca} foi encontrado`);
}
else
{
    console.log(`O número ${busca} não foi encontrado!`);
} 

continua = leia.keyInYNStrict(`\nDeseja realizar uma nova busca? `)
} while (continua == true)

console.log("\nAgradecemos por utilizar o mecanismo!");