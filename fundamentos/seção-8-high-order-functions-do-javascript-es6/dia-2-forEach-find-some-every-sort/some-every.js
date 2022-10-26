//---------------------Exercicio 1-------------------------------//
//Retorna true ou false se caso algum nome exista ou não dentro do array names

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((index) => index === name);
};

console.log(hasName(names, 'Ana'));

//--------------------------------------------------------------//


//------------------Exercicio 2---------------------------------//


const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    return arr.every((index) => index.age >= minimumAge)
  };
  
  console.log(verifyAges(people, 18));


//--------------------------------------------------------------//