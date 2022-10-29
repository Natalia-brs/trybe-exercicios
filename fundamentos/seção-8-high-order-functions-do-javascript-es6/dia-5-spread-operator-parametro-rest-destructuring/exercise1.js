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

//-------------------------
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
  // name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade
  
  // complete a assinatura da função abaixo
  const personLikes = () => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
  // <nome> tem <anos de idade> e gosta de <gostos da pessoa>
  
  // Retornos esperados:
  console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
  console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'
