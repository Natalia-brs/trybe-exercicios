
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver:3,
    },
};

console.log (player.name + ' ' + player.lastName); // pode se acessar os elementos utlizando .
console.log (player ['name'] + " " + player['lastName']) // pou pode acessar os elementos utilizando []
console.log (player.medals.golden)
console.log (player)