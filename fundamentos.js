// 1 - Configuração do ambiente de desenvolvimento
// VS Code e teste de JS no console

// 2 - Fundamentos de JavaScript

// 2.1 Sintaxe básica

var minhavariavel = "Olá mundo!";
console.log(minhavariavel);

// 2.2 Comentários

// Isto é um comentário de uma linha
/* Isto é um comentário de
 várias
 linhas */

 // 2.3 Variáveis e tipos de dados
 var meuNumero = 7;
 console.log(meuNumero);
 console.log(typeof meuNumero);

 var minhaString = "Minha string";
 console.log(minhaString);
 console.log(typeof minhaString);

 var meuBooleano = true;
 console.log(meuBooleano);
 console.log(typeof meuBooleano);

 var meuBooleanoF = false;
 console.log(meuBooleanoF);
 console.log(typeof meuBooleanoF);

 var meuObjeto = {}; // Object
 var meuArray = []; // Array
 var minhaNull = null; // Null
 var minhaUndefined = undefined; // Undefined

 console.log(typeof meuObjeto);
 console.log(typeof meuArray);
 console.log(typeof minhaNull);
 console.log(typeof minhaUndefined);

// 2.4 let e const

 let teste = 1; // Pode mudar ao longo do processo
 const PI = 3.14; // Não pode mudar ao longo do processo MAIS SEGURA

 console.log(teste, PI);
 
 const x = 7;
 const y = 9;

 // Operadores aritméticos
 console.log(x + y);
 console.log(x - y);
 console.log(x * y);
 console.log(x / y);
 
 // Operadores de comparação
console.log(x == y);
console.log(x === y);
console.log(x !== y);
console.log(x != y);

// Operadores lógicos
console.log( 1 > 0 && 0 > 1);
console.log( 1 > 0 && 0 < 1);

console.log( 1 > 0 || 0 > 1);
console.log( 1 > 0 || 0 < 1);

// 2.6 Conversão de tipos
const meuNumero2 = "123;"; //String
console.log(typeof meuNumero2);
const meuNumeroConvertido = Number(meuNumero2);
console.log(typeof meuNumeroConvertido);


// 2.7 Estruturas de controle de fluxo

// Condição if, else if, else
const idade = 18;

if (idade < 13) {
    console.log("Criança");
} else if (idade < 18 && idade > 13) { 
    console.log("Adolescente");
} else {
    console.log("Adulto");
}

// Condição switch
const fruta = "Maçã";

switch (fruta) {
    case "Maçã":
        console.log("Tem maçã!");   
        break    
    case "Banana":
        console.log("Tem banana!");
        break
    case "Goiaba":
        console.log("Tem goiaba!")
        break
    default:
        console.log("Não tem essa fruta!")
}

// 2.7 Estruturas de loop
// Loop fo

for (let i = 0; i < 5; i + 1) {
    console.log(i);
}