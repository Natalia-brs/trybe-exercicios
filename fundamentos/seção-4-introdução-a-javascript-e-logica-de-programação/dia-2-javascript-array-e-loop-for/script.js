 // ---------------- imprimindo todos os valores do array --------------//
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 for (let index = 0; index < numbers.length; index += 1 ) {
     console.log (numbers [index]);
}
// -------------------------------------------------------------------- //


// ------ somando todos os valores contidos no array e exibindo  ------- //
  let soma = 0;
 for (let index = 0; index < numbers.length; index +=1) {
    soma = soma + numbers[index];
}
  console.log (soma);
// ------------------------------------------------------------------------//


 // ------ fazendo a media dos elementos do array -----------//
 let media = soma/numbers.length;
 console.log (media);
// -----------------------------------------------------------//

 
 //------ Exibindo se o valor e maior ou igual a 20 ----------//
  if (media > 20) {
     console.log ('Valor maior que 20')
 } 
 else {
    console.log ('Valor menor ou igual a 20')
}
// ----------------------------------------------------------//


 // ------- exibir o maior valor dentro do array -----------//
  let maior = 0;
  for (let index = 0; index < numbers.length; index += 1) {
      if (numbers[index] > maior) {
          maior = numbers[index]
       }
   }
   console.log (maior)
//--------------------------------------------------------------//


//----------- valores impares do array -----------------------//
   let contimpares =0;
   for (let index = 0; index < numbers.length; index += 1) {
       if (numbers[index] % 2 !== 0 ) {
              contimpares += 1
       }
  }
  if (contimpares == 0) {
     console.log ('Nenhum valor encontrado')
 }
 else {
     console.log (contimpares)
 }
 // -----------------------------------------------------------------//
 

 // ----------- menor valor contido no array ------------------------ //
 let menor = numbers[0]
  for (let index = 1; index < numbers.length; index += 1) {
      if (numbers[index] < menor) {
          menor = numbers[index]
    }
  }
  console.log (menor);
// -------------------------------------------------------------------//


 //-- criando array de 1 a 25 e fazendo a divisão de cada elemento por 2 --//
  let array = [];

  for (let index = 1; index <= 25; index += 1) {
    array.push(index);
   }

   console.log(array);

  for (let index = 0; index < array.length; index += 1) {
      console.log(array[index] / 2);
    };
// ---------------------------------------------------------------- //