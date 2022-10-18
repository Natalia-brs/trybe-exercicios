//------------------------Exercicio 4 parte 1------------------------------------//

//Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.
//O nome da função deverá ser substituaX;
//A função deverá receber um nome por parâmetro;
//Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
//A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

const substituaX = (nome) => {
 const frase = 'Tryber x aqui!';
 const fraseArray = frase.split(' ')
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
     fraseArray[index] = nome
    }
  }
  return fraseArray.join(' ')
}

console.log (substituaX('bebeto'));

//utilizando o metodo split para transformar  a frase em um array e poder substituir o index onde está o 'x'
//após isso transformar novamente em string utilizando o join.

//---------------------------Exercicio 4 parte 2-----------------------------//

//Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string;
//A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
//Declare dentro da função uma variável com o nome skills, do tipo const;
//A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu;
//Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

const minhasSkills = (func) => {
 const skills = ['CSS', 'JavaScript', 'HTML'];
 let result = `
 ${func}

 Minhas três principais habilidades são:`

 skills.forEach((skill) => {
  result = `${result}
  - ${skill}`;
 })
 return result
}
console.log(minhasSkills(substituaX('Natália')));

//----------------------------------------------------------------------------------//