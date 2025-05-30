import leia from 'readline-sync';
let opcao: number
let voltar, vazio: boolean
let livro: string

console.log("** Exercício 2 - Pilha **");
/** 
Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string,
para organizar a retirada de livros de uma pilha. O programa deverá ter um 
Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
2: Listar todos os livros da Pilha
3: Retirar um livro da pilha 
0: O programa deve ser finalizado. 
Caso a pilha esteja vazia, ao tentar retirar um livro da pilha,
o programa deverá informar que a pilha está vazia.
*/

import{Stack} from "./listaestruturas_classepilha";
const Pilha = new Stack<string>();

do
{
    console.log("\nESTANTE VIRTUAL");
    console.log("\n*Menu*");
    console.log("1- Adicionar um novo livro na pilha");
    console.log("2- Listar todos os livros da pilha");
    console.log("3- Retirar um livro da pilha");
    console.log("0- Sair");
    opcao = leia.questionInt("\nEscolha um numero: ");

    switch(opcao)
    {
        case 1:
            livro = leia.question("\nPor favor, digite o nome do livro: ");
            Pilha.push(livro);
            console.log("\nPilha:")
            Pilha.printStack();
            console.log("\nLivro adicionado com sucesso!");
            voltar = leia.keyInYNStrict("\nDeseja retornar ao menu principal? ");
            if(voltar == false)
            {
                console.log("\nSaindo do sistema...");
            }
            break;
        case 2:
            vazio = Pilha.isEmpty();
            if (vazio == true)
            {
                console.log("\nNão há livros na pilha.");
            }
            else
            {
                console.log("\nLivros empilhados:")
                Pilha.printStack();
            }
            voltar = leia.keyInYNStrict("\nDeseja retornar ao menu principal? ");
            if(voltar == false)
            {
                console.log("\nSaindo do sistema...");
            }
            break;
        case 3:
            vazio = Pilha.isEmpty();
            if (vazio == true)
            {
                console.log("\nNão foi possível remover porque não há livros na pilha.");
            }
            else
            {
                console.log(`\n'${Pilha.peek()}' foi retirado da pilha.`);
                Pilha.pop();
                vazio = Pilha.isEmpty();
                if (vazio == false)
                {
                    console.log(`\nLivros empilhados:`);
                    Pilha.printStack();
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