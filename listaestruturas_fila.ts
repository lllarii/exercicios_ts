import leia from 'readline-sync';
let opcao: number
let voltar, vazio: boolean
let cliente: string

console.log("** Exercício 1 - Fila **");
/** 
Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string,
para organizar uma fila por ordem de chegada dos Clientes de um Banco. 
O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
2: Listar todos os Clientes na fila
3: Chamar (retirar) uma pessoa da fila 
0: O programa deve ser finalizado. 
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao 
tentar retirar (chamar) um cliente da fila.
*/

import{Queue} from "./listaestruturas_classefila";
const fila = new Queue<string>();

do
{
    console.log("\nCONTROLE DA FILA");
    console.log("\n*Menu*");
    console.log("1- Adicionar um novo cliente na fila");
    console.log("2- Listar todos os clientes na fila");
    console.log("3- Chamar cliente para atendimento");
    console.log("0- Sair");
    opcao = leia.questionInt("\nEscolha um numero: ");

    switch(opcao)
    {
        case 1:
            cliente = leia.question("\nDigite o nome do cliente para adicionar: ");
            fila.enqueue(cliente);
            console.log("\nFila:")
            fila.printQueue();
            console.log("\nCliente adicionado com sucesso!");
            voltar = leia.keyInYNStrict("\nDeseja retornar ao menu principal? ");
            if(voltar == false)
            {
                console.log("\nSaindo do sistema...");
            }
            break;
        case 2:
            vazio = fila.isEmpty();
            if (vazio == true)
            {
                console.log("\nNão há clientes na fila.");
            }
            else
            {
                console.log("\nClientes aguardando:")
                fila.printQueue();
            }
            voltar = leia.keyInYNStrict("\nDeseja retornar ao menu principal? ");
            if(voltar == false)
            {
                console.log("\nSaindo do sistema...");
            }
            break;
        case 3:
            vazio = fila.isEmpty();
            if (vazio == true)
            {
                console.log("\nNão há clientes na fila para chamar.");
            }
            else
            {
                console.log(`\n${fila.peek()} foi chamado(a) para atendimento e saiu desta fila.`);
                fila.dequeue();
                vazio = fila.isEmpty();
                if (vazio == false)
                {
                    console.log(`\nSituação da fila no momento:`);
                    fila.printQueue();
                }
                
            }
            voltar = leia.keyInYNStrict("\nDeseja retornar ao menu principal? ");
            if(voltar == false)
            {
                console.log("\nSaindo do sistema...");
            }
            break;
        case 0:
            console.log("\nSaindo do sistema...");
            voltar = false
    }
}while (voltar == true)