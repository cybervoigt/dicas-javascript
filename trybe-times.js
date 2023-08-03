/**
 * 
 */

let linha = '* | ';
for(let j = 0; j<=10; j++){
    linha = linha + j + ' | ';
    
}
console.log(linha);

for(let i = 0; i<=10; i++){

    let linha = i + ' | ';
    for(let j = 0; j<=10; j++){
        const multiplica = (i*j);
        linha = linha + multiplica +  ' | ';
    }
    console.log(linha);
}

