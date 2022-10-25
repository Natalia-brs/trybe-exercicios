//---------------------Exercicio 1-------------------------------//
//Retorna true ou false se caso algum nome exista ou não dentro do array names

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((index) => index === name);
};

console.log(hasName(names, 'Ana'));

//--------------------------------------------------------------//