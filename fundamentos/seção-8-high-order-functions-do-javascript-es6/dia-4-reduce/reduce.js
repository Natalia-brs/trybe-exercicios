//-----sintaxe do reduce ---------------------------------------------------------//

//Veja também que ao invés de passar a lógica direto dentro da callback do reduce, 
//você pode criar uma função externa e chamá-la como sendo o parâmetro callback:

const numbers1 = [1, 32, 44, 2, 3];
const sumNumbers =  (acc, curr) => acc + curr;
const totalSum = numbers1.reduce(sumNumbers, 30);
console.log(totalSum); //112

//--------------------------------------------------------------------------------//

//-------Maior numero do array utilizando o reduce--------//
 
const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); 

//---------------------------------------------------------//


