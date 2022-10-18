
//----------------------------------Exercicio 1----------------------------------//

//Modifique a estrutura da função para que ela seja uma arrow function;
//Modifique as variáveis para que respeitem o escopo onde estão declaradas;
//Modifique as concatenações para template literals.

const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      return ifScope;
    } else {
      const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      return elseScope;
    }

  }

  testingScope(true);

//----------------------------------------------------------------------------------//

//----------------------------------Exercicio 2-------------------------------------//

//Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
//Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>)
//retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”;

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (a, b) => {
  return (a - b)
}

oddsAndEvens.sort(sortOddsAndEvens)

console.log(` Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

//-----------------------------------------------------------------------------------------//