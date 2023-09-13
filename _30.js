const entrada = require('prompt-sync')({ sigint: true })

// Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente. 

let numero_um = parseInt(entrada("Informe o primeiro valor: "));

let numero_dois = parseInt(entrada("Informe o segundo valor: "));

let numero_tres = parseInt(entrada("Informe o terceiro valor: "));

const valores = [
    numero_um,
    numero_dois,
    numero_tres
];

valores.sort((a, b) => a - b);

console.log("Valores em ordem crescente: ", valores.join(", "));

