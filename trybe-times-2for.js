/**
 * 
 */

const multiplicador = [3,7];
let tabuada;
for (let i=0; i<multiplicador.length; i++){
  tabuada = multiplicador[i];

  for (let j=1;j<=9; j++){
    resultado = tabuada * j;
    console.log(tabuada + ' x ' + j + ' = ' + resultado);
  }
}

