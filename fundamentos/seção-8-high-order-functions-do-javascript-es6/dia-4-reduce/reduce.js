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

//------Somando pares usando filter e reduce--------------//

const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (accumulator, number) => accumulator + number;

const sumNumbers2= (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers2(numbers2)); // 152

//-----------------------------------------------------//

//--------- Usando apenas o reduce--------------------//

const numbers3 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair1 = (accumulator, number) => (
  (number % 2 === 0) ? accumulator + number : accumulator
);

const sumNumbers3 = (array) => array.reduce(sumPair1, 0);

console.log(sumNumbers3(numbers3)); // 152

//--------------------------------------------------------//

//-----usando map e reduce, para encontrar qual materia o estudante foi melhor---------//

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];
  
  const getBestClass = (acc, materia) => {
    if (acc.nota > materia.nota) return acc;
    return materia;
  };
  
  const reportBetter = (students) => students.map((student) => ({
    name: student.nome,
    materia: student.materias.reduce(getBestClass).name,
  }));
  
  console.log(reportBetter(estudantes));

  
//---------------------------------------------------------------------------//


