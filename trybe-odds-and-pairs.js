/**
 * 
 */

const numeros = [1, 33 ,103, 132, 270, 1320, 75];
const numerosPares = [];
const numerosImpares = [];

for (let index = 0; index < numeros.length; index = index + 1) {
  if (numeros[index] % 2 === 0) {
    numerosPares.push(numeros[index]);
  } else {
    numerosImpares.push(numeros[index]);
  }
}
console.log('pares = ', numerosPares);
console.log('imapres = ', numerosImpares);


