/**
 * 
 */


const coresMarcelo = ['azul', 'vermelho', 'preto', 'rosa', 'dourado', 'verde', 'cinza'];
const coresJulia = ['branco', 'marrom', 'rosa', 'dourado', 'green', 'cinza'];

let contador = 0;

for (let indexJ = 0; indexJ < coresJulia.length; indexJ = indexJ + 1) {
  for (let indexM = 0; indexM < coresMarcelo.length; indexM = indexM + 1) {
    if (coresJulia[indexJ] === coresMarcelo[indexM]) {
      contador = contador + 1;
    }
  }
}
console.log(contador);


