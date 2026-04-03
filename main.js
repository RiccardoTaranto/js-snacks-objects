console.log('js-snacks-objects');

// Snack 1, Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa
// con le seguenti proprietà: nome e peso.
const bikes = {
    bike_1: {
        name: 'Bianchi',
        weight: 10,
    },
    bike_2: {
        name: 'Atala',
        weight: 12,
    },
    bike_3: {
        name: 'Colnago',
        weight: 8,
    },
    bike_4: {
        name: 'Pinarello',
        weight: 9,
    },
    bike_5: {
        name: 'De Rosa',
        weight: 11,
    }
}

console.log(bikes);

// Stampare a schermo la bici con peso minore.
let lightestBike = bikes.bike_1;

for (let bike in bikes) {
    if (bikes[bike].weight < lightestBike.weight) {
        lightestBike = bikes[bike];
    }
}

console.log('La bici più leggera è: ', lightestBike);