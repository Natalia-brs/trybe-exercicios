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
  

//-------------------------------- Parte 1 ---------------------------------------------//
//Retorne do objeto as informaçoes no formato nome do livre - genero do livro - nome do autor/a.

//   function formatedBookNames() {
//     return books.map((book) => ` ${book.name} - ${book.genre} - ${book.author.name}`);
//   }
//   console.log(formatedBookNames());

//--------------------------------------------------------------------------------------------//

//-------------------------------- Parte 2 ---------------------------------------------------//
//Retorne um array de objetos com o nome do autor e a sua idade quando seu livro foi lançado e ordene
// de forma crescente

// function nameAndAge() {
//     return books.map((book)=> {
//        const obj = {
//             author: book.author.name,
//             age: book.releaseYear - book.author.birthYear
//         }
//         return obj 
//     })
//     .sort((author1, author2) => author1.age - author2.age);  
//   }
//    console.log(nameAndAge());

//-----------------------------------------------------------------------------------------------//