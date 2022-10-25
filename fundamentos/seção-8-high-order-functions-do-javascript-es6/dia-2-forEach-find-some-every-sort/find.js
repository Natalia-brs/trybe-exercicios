

// -------- exercicio 1 forma 1 -----------------------------------------------//
// Utilize o find para retornar o primeiro numero do array que e divisivel por 5 caso ele exista.


const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find((div) => div % 3 === 0 && div % 5 === 0);
};
 
console.log(findDivisibleBy3And5());

//Aqui utilizeo o find diretamente dentro do escopo da função findDivisibleBy3And5 e depois chamei ela no final
//exibindo o resultado no console.
// Aqui nao tem a necessidade de passar um parametro para a função findDivisibleBy3And5, pois vc fará isso no find.


//--------- exercicio 1 forma 2 --------------------------------------------------//

const anotherWay = (num) => num % 3 === 0 && num % 5 === 0;

const receive = numbers.find(anotherWay);

console.log(receive);

//Aqui fizemos o mesmo exercicio mas de forma diferente, criamos a função anotherWay com o parametro num, que irá fazer
// a interação pelo array e comparar se os numeros são divisiveis;
// Depois criamos uma variavel que ira guardar esse valor e passamos o find nela, recebendo como callback a função anotherWay.


//---------------------------------------------------------------------------------//


//-------------------- exercicio 2 ---------------------------------//
//forma 1

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((letter) => letter.length === 5);
};

console.log(findNameWithFiveLetters());

//forma 2


const anotherFunc = (letter) => letter.length === 5;

 const result = names.find(anotherFunc);

 console.log(result);

//-------------------------------------------------------------------//

//--------------------- exercicio 3 ---------------------------------//

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  function findMusic(id) {
   return musicas.find((mus) => mus.id === id);
  };
  
  console.log(findMusic('31031685'));


//---------------------------------------------------------------//