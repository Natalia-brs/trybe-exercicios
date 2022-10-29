//Podemos desestruturar arrays usando a notação para array destructuring, que serve para acessar valores de um array e atribuí-los a variáveis. 

//------------------------------------------------------------------------------------//

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [greeting] = saudacoes;
console.log(greeting);

//--------------------------------------------------------------------------------------//

//--------------- A seguir, temos alguns valores que estão descritos em variáveis incoerentes, ---//
//---------------- através da desestruturação de arrays, corrija os valores das variáveis. ---//

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

[comida, animal, bebida] = [bebida, comida, animal];
 console.log(comida, bebida, animal);

//-----------------------------------------------------------------------------------------------------//

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares

console.log(numerosPares); // [6, 8, 10, 12];

//------------------------------------------------------------------------------------------------------------//