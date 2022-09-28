//===========================Exercicios Funções====================================================//

//---------------Verificando se é um palindromo ------------------------------------//


let verifyPalindromo = '';
function palindromo (palavra) {
  verifyPalindromo = palavra.split('').reverse().join('');
      if (verifyPalindromo === palavra ) {
          verifyPalindromo = true;  
    } 
    else {
         verifyPalindromo = false;
    }
return verifyPalindromo;
}

console.log (palindromo('arara'));

//-------------------------------------------------------------------------------//

//--------------Função que retorna o indice do maior valor de um array-----------------------//


function maior (array) {
    let maiorIndice = 0;
    for (let index in array) {
        if (maiorIndice < array[index])
        maiorIndice = index
    }
    return maiorIndice;
   }
console.log (maior([5, 15, 45, 60, 80, 100]));
 

//-------------------------------------------------------------------------------------------//


//-------------Função que retorna o indice de menor valor------------------------------------//


function menor (array) {
    let indiceMenor = 0;
    for (let index in array) {
        if (array[index] < indiceMenor) {
            indiceMenor = index
        }
    }
return indiceMenor;
}
console.log (menor([5, 20, 15, 60, 80, -5]))


//--------------------------------------------------------------------------------------------//


//------------Função que retorna a string com maior numero de caracteres ---------------------//


function caracteres (nomes) {
    let maiorPalavra = nomes[0];
    for (let index in nomes) {
       if (maiorPalavra.length < nomes[index].length ) {
        maiorPalavra = nomes[index]

       }
    }
return maiorPalavra;
}
console.log (caracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))


//--------------------------------------------------------------------------------------------//


//----------------------Função do numero que mais se repete-----------------------------------//


function repete (numbers) {
    let contRep = 0;
    let cont = 0;
    let indexRep=0;
  
    for (let index in numbers) {
        let loop = numbers[index];
        for (let index2 in numbers) {
          if (loop === numbers[index2]) {
               cont += 1
          }
        }
        if (cont > contRep) {
            contRep = cont;
            indexRep = index;
        }
        cont = 0;
    }
return numbers[indexRep];
}

console.log (repete([2, 3, 2, 5, 8, 2, 3]))

//-----------------------------------------------------------------------------------//


//-----------Função somatorio de 1 ate N--------------------------------------------//


function soma (n) {
let totalSoma = 0;
    
    for (index = 1; index <= n; index += 1) {
        totalSoma = totalSoma + index;
    }
return totalSoma;
}
console.log (soma(5));


//--------------------------------------------------------------------------//







