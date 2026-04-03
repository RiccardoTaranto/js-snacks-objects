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


// Snack2, Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const teams = {
    team_1: {
        name: 'Juventus',
        points: 0,
        fouls: 0,
    },
    team_2: {
        name: 'Milan',
        points: 0,
        fouls: 0,
    },
    team_3: {
        name: 'Inter',
        points: 0,
        fouls: 0,
    },
    team_4: {
        name: 'Napoli',
        points:0,
        fouls: 0,
    },
    team_5: {
        name: 'Roma',
        points: 0,
        fouls: 0,
    },
}

console.log(teams);

// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
for (let team in teams) {
    teams[team].points = Math.floor(Math.random() * 10);
    teams[team].fouls =Math.floor(Math.random() *10);

    console.log(teams[team]);
}

//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.




