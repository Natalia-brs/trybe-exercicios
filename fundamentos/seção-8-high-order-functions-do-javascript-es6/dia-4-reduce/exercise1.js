//----------------------------- Parte 1 ----------------------------------//
//Utilize o reduce para transformar uma matriz em um array.

// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
//   ];
  
//   function flatten(arr) {
//     return arrays.reduce((acc, curr) => acc.concat(curr));
//   }

//   console.log(flatten(arrays));

//----------------------------------------------------------------------//

//-------- array base para os exercicios -------------------------------//

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
//--------- Adicione o código do exercício aqui: ---------------------//

//   function reduceNames() {
//     return books.reduce((acc, book) => `${acc} ${book.author.name}.`, '')
//   }

//   console.log(reduceNames());

//---------------------------------------------------------------------//

//----------------------------------------------------------------------//

function averageAge() {
    const totalBooks = books.length;
    return books.reduce((sum, book) => sum + (book.releaseYear - book.author.birthYear), 0) / totalBooks
  }
  console.log(averageAge());

//----------------------------------------------------------------------//

//------------------Encontre o livro com o maior nome--------------------//

function longestNamedBook() {
    // escreva seu código aqui
  }

//------------------------------------------------------------------------//