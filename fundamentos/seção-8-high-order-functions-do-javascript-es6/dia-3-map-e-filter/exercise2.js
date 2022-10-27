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

const cities2 = () => {
    return cities.map((city) => {
     const getState = states.find((state) => state.short === city.state)
     const getRegion = regions.find((regions) => regions.short === city.region)
      const meuObj = {
        state: getState.name,
        city: city.name,
        region: getRegion.name,
     } 
     return meuObj;
    })

  }
 console.log(cities2());
 