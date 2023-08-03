/**
 * Curso "Javascript do zer0" da TRYBE
 * exercício sobre inverter um array...
 */

let lista = [1, 2, 3, 4, 5];
let inverter = true;
let listaInvertida = [];

//function inverteArray() {
  /***** Escreva seu código nas linhas abaixo *****/
   
  if(inverter === true){
    // resposta 1
    // listaInvertida.push(lista[4]);
    // listaInvertida.push(lista[3]);
    // listaInvertida.push(lista[2]);
    // listaInvertida.push(lista[1]);
    // listaInvertida.push(lista[0]);

    // resposta 2 - com for
    // for(let i = lista.length; i>0; i--){
    //   listaInvertida.push( lista[ i-1 ] );
    // }

    // resultado esperado do gabarito...
    listaInvertida[0] = lista[4];
    listaInvertida[1] = lista[3];
    listaInvertida[2] = lista[2];
    listaInvertida[3] = lista[1];
    listaInvertida[4] = lista[0];

    console.log(listaInvertida);
  }
  else
  {
    console.log(lista);
  }
  

//}