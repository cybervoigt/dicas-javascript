/**
 * 
 */


function imprimeSaudacao(nome, sobrenome, idade) {
    const saudacao = `Olá, ${nome} ${sobrenome}!`;
    const exibeIdade = 'Você tem ' + idade + ' anos.';

    return saudacao + ' ' + exibeIdade;
}

const pessoa1 = {nome: 'Alberto', sobrenome: 'Cavalcanti', idade: 85};
const pessoa2 = {nome: 'Cleyton', sobrenome: 'Oliveira', idade: 32};
const pessoa3 = {nome: 'Sandra', sobrenome: 'Cardoso', idade: 58};

const pessoas = [pessoa1,pessoa2,pessoa3];

for(let i=0; i<pessoas.length; i++){
    const umapessoa = pessoas[i];
    console.log( imprimeSaudacao(umapessoa.nome, umapessoa.sobrenome, umapessoa.idade) );
}

// console.log(imprimeSaudacao('Alberto', 'Cavalcanti', 85));
// console.log(imprimeSaudacao('Cleyton', 'Oliveira', 32));
// console.log(imprimeSaudacao('Sandra', 'Cardoso', 58));


