const states = [
    { short: "AM", name: "Amazonas" },
    { short: "PA", name: "Pará" },
    { short: "TO", name: "Tocantins" },
    { short: "MG", name: "Minas Gerais" },
    { short: "BA", name: "Bahia" },
    { short: "PR", name: "Paraná" },
    { short: "SP", name: "São Paulo" },
    { short: "RN", name: "Rio Grande do Norte" },
    { short: "CE", name: "Ceará" },
    { short: "MT", name: "Mato Grosso" },
  ];
  
  const regions = [
    { short: "N", name: "Norte" },
    { short: "NE", name: "Nordeste" },
    { short: "CW", name: "Centroeste" },
    { short: "SE", name: "Sudeste" },
    { short: "S", name: "Sul" },
  ];
  
  const cities = [
    { state: 'AM', name: 'Manaus', region: 'N'},
    { state: 'PA', name: 'Belém', region: 'N'},
    { state: 'TO', name: 'Porto Nacional', region: 'N'},
    { state: 'MG', name: 'Nepomuceno', region: 'SE'},
    { state: 'BA', name: 'Cachoeira', region: 'NE'},
    { state: 'PR', name: 'Curitiba', region: 'S'},
    { state: 'SP', name: 'Hortolândia', region: 'SE'},
    { state: 'RN', name: 'Touros', region: 'NE'},
    { state: 'CE', name: 'Jericoacoara', region: 'NE'},
    { state: 'TO', name: 'Três Pedras', region: 'N'},
    { state: 'MG', name: 'João Pinheiro', region: 'SE'},
    { state: 'MT', name: 'Cuiabá', region: 'CW'},
  ];

  // Transforme o array de objetos cities em um array de objetos no seguinte formato:
// {
//   state: "Amazonas",
//   city: "Manaus",
//   region: "Norte"
// }


//------------------------------- Resolução ---------------------------------------//
// Utilizei o map para iterar sobre os elementos do array e com o find para encontrar e trazer para mim os 
// elementos que iriam participar do novo objeto solicitado

const cities2 = () => {
    return cities.map((city) => {
     const getState = states.find((state) => state.short === city.state);
     const getRegion = regions.find((regions) => regions.short === city.region);
      const meuObj = {
        state: getState.name,
        city: city.name,
        region: getRegion.name,
     };
     return meuObj;
    });
  };
 console.log(cities2());
 
 //---------------------------------------------------------------------------------------//

 //E SE EU QUISER SABER TODOS OS ESTADOS E CIDADES DE UMA DETERMINADA REGIÃO?
//FORMATO:
// {
//   region: "NE",
//   states: ["Estado1", "Estado2"],
//   cities: ["Cidade1", "Cidade2"],
// }


//----------------------------------- Resolução ----------------------------------------------//
//Nesse exercicio criamos dois arrays vazios que vão receber os estados e a cidades e utilizamos o map para interar cada elemento do array regions e com o filter poder filtrar e comparar cada regiao
// no array cities, assim utilizamos o if para que as cidades nao se repitam com o operador de negação -> ! <- e por fim adicionamos no obejto no final da operação.

const findState = () => {
     return regions.map((region) => {
        let getStates = [];
        let getCities = [];
       cities.filter((city) => city.region === region.short).forEach((element) => {
         if(!getStates.includes(element.state)) {
            getStates.push(element.state)
         }

         if(!getCities.includes(element.name)) {
            getCities.push(element.name);
         }
       })
       const obj = {
        region: region.name,
        states: getStates,
        cities: getCities,
       }
       return obj;
    })
}
console.log(findState());

//-------------------------------------------------------------------------------------------------------//