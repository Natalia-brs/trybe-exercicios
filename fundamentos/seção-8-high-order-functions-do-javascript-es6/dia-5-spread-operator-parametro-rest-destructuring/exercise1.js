//-----  Exercicio 1 - O código deve retornar em sequência 2, 15 e 54 ------------------//

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});

//---------------------------------------------------------------------------------------//
 
//------ Exercicio 2 - Crie uma função sum que dado um número ilimitado de parâmetros retorna a soma desses parâmetros -----//

const sum = (...numbers) => {
     return numbers.reduce((acc, number) => acc + number, 0)
}

console.log(sum(4,5,6))

//----------------------------------------------------------------------------------------//

//------------------------- Modifique o parametro da função PersonLikes --------//

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };

  // complete a assinatura da função abaixo
  const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
  
  // Retornos esperados:
  console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
  console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

//------------------------------------------------------------------------------------------//

//------ Escreva uma função filterPeople que, dada uma lista de pessoas, retorne todas as pessoas australianas que nasceram no século 20--//
//Exercicio 4

  const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  const filterPeople = (param) => {
    return param.filter(({ bornIn, nationality})=> {
      return nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000;
    });
  }
 console.log(filterPeople(people))

//------------------------------------------------------------------------------------------------------------------------------------------------//

//----------------------- Exercicio 5 - Trocar posição de elementos do array ------------------------------------------//
// array destructuring.

 const myList = [5, 2, 3];
 const swap = ([first, second, third]) => [third, second, first];
 console.log(swap(myList))

//----------------------------------------------------------------------------------------------------------------------//

//----------------------- Exercicio 6 - transforme o array em objeto -------------------------------------------------//
//Utilizando array destructuring e abbreviation object shorthand.

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([name, brand, year]) => ({name, brand, year});
 console.log((toObject(shelbyCobra)));

 //-------------------------------------------------------------------------------------------------------------------//

//------------------------- Exercicio 7 ----------------------------------------------------------------------------//

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];
const shipLength = ({ name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long`;

//-------------------------------------------------------------------------------------------------------------------------//

