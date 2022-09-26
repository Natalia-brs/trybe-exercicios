

// ---------Montando um objeto ---------------//

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver:3,
//     },
// };

// console.log (player.name + ' ' + player.lastName); // pode se acessar os elementos utlizando .
// console.log (player ['name'] + " " + player['lastName']) // pou pode acessar os elementos utilizando []
// console.log (player.medals.golden)
// console.log (player)

//------------------------------------------------------------------------------------------------------------//


//-----------Selecionando uma chave especifica ------------------//

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log ('Bem-vinda,' + ' ' + info.personagem)

//-----------------------------------------------------------------//


//------------Inserindo uma nova propriedade com brackets notation----------//

  // info['recorrente'] = 'Sim';
  // console.log (info['recorrente'])

//--------------------------------------------------------------------------//  

//----------------For/in exibindo apenas as chaves do objeto ---------------//

  // for (let key in info) {
  //   console.log (key)
  // }

//--------------------------------------------------------------------------//

//-------------- for/in exibindo apenas os valores das chaves --------------//

  // for (let key in info) {
  //   console.log (info[key])
  // }

//--------------------------------------------------------------------------//

//------------ Novo objeto criado e exibindo os valores dos dois objetos juntos ----------//

  // let info2 = {
  //   personagem: 'Tio Patinhas',
  //   origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  //   nota: 'MacPatinhas',
  //   recorrente: 'Sim',
  // };

  // for (let index in info) {
  //   console.log (info[index] + ' ' + 'e' + ' ' + info2[index])
  // }

  //--------------------------------------------------------------------------------------------//

 
//=================================== Leitura de Objetos =======================================//

//-----------------------------Acessando a propriedade de um objeto que está em um array------------------------------------------------------------------------------------------//


  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log ('O livro favorito de' + ' ' +  leitor.nome + ' '+  leitor.sobrenome + ' ' + 'se chama: ' + ' ' + leitor.livrosFavoritos[0].titulo)


// ----------------------------------------------------------------------------------------------------------------------------------------------------------//


//---------------------------------Adicionando um objeto em um array----------------------------------------------------------------------------------------//


  leitor.livrosFavoritos.push (
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    }
    
  );

  console.log ('O livro favorito de ' + '' + leitor.nome  + ' ' + '' + leitor.sobrenome  + ' ' + 'se chama: ' + ' ' + leitor.livrosFavoritos[1].titulo)


//----------------------------------------------------------------------------------------------------------------------------------------------------------//


//-------------------------------------------------------------------- Exibindo a quantidade de elementos do array ------------------------------------------//


  console.log (leitor.nome + ' ' + 'tem a quantidade de ' + ' ' + leitor.livrosFavoritos.length + ' ' + 'livros favortos')


//----------------------------------------------------------------------------------------------------------------------------------------------------------//