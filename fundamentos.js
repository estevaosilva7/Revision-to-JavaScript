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


 let teste = 1; // Pode mudar ao longo do processo
 const PI = 3.14; // Não pode mudar ao longo do processo MAIS SEGURA

 console.log(teste, PI);
 
 const x = 7;
 const y = 9;

 console.log(x + y);
 console.log(x - y);
 console.log(x * y);
 console.log(x / y);
 
console.log(x == y);
console.log(x === y);
console.log(x !== y);
console.log(x != y);


console.log( 1 > 0 && 0 > 1);
console.log( 1 > 0 && 0 < 1);

console.log( 1 > 0 || 0 > 1);
console.log( 1 > 0 || 0 < 1);
