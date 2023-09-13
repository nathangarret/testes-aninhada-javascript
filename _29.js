const entrada = require('prompt-sync')({ sigint: true })

// Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores. 

let numerou_um = parseInt(entrada("Informe o primeiro valor: "));

let numerou_dois = parseInt(entrada("Informe o segundo valor: "));

let numerou_tres = parseInt(entrada("Informe o terceiro valor: "));

let maior;
let medio;
let soma;

if (numerou_um != numerou_dois && numerou_um != numerou_tres) {
    if (numerou_dois != numerou_um && numerou_dois != numerou_tres) {
        if (numerou_tres != numerou_um && numerou_tres != numerou_dois) {
            if (numerou_um > numerou_dois && numerou_um > numerou_tres) {
                    maior = numerou_um;
                if (numerou_um > numerou_dois && numerou_um < numerou_tres) {
                    medio = numerou_um
                }
            } else if (numerou_dois > numerou_um && numerou_dois > numerou_tres) {
                    maior = numerou_dois;
                if(numerou_dois > numerou_um && numerou_dois < numerou_tres){
                    medio = numerou_dois;
                }
            } else{ 
                soma = maior = numerou_tres;
            }
        }
    }
} else {
    console.log("Você digitou números iguais.");
}