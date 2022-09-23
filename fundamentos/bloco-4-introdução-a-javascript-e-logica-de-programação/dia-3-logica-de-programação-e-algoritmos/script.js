// -------- Exercicio fatorial ------------------- //
 let fatorial = 1;

 for (let index = 5; index > 0; index -= 1) {
     fatorial = fatorial * index
   }
   console.log (fatorial);
// ----------------------------------------------------//


// ------------ inverter palavra ----------------------//
 let word = 'narnia'
 let palavraReversa = '';

 for (let index = word.length - 1; index >= 0; index -= 1) {
     palavraReversa = palavraReversa + word[index];
   }
 console.log (palavraReversa);
//-------------------------------------------------------//


//--------- Maior e menor palavra do array ---------------//
let array = ['java', 'javascript', 'python', 'html', 'css'];

let palavraMaior = array[0];
let palavraMenor = array [0];
 
for (let index = 0; index < array.length; index += 1 ) {
    if (array[index].length > palavraMaior.length) {
        palavraMaior = array[index]
    }
  }

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < palavraMenor.length) {
    palavraMenor = array[index]
    }
  }

console.log (palavraMaior);
console.log (palavraMenor);
//---------------------------------------------------------//