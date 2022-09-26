// ------------for in iterando por objetos --------------------------//
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let person in names) {  
    console.log ( 'Olá ' + names[person]) 
  }

  //-------------------------------------------------------------//


  //-------------------------------------------------------------//
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let index in car) {
    console.log (index, car[index])
  }
  //--------------------------------------------------------//