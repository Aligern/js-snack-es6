/*  snack 1 */
// this is the name of our table:
let tableName = 'Tavolo Vip';
// this is the guests list:
let inviteList = [ 
'Brad Pitt', 
'Johnny Depp', 
'Lady Gaga', 
'Cristiano Ronaldo', 
'Georgina Rodriguez', 
'Chiara Ferragni',  
'George Clooney', 
'Amal Clooney', 
'Fedez', 
'Amadeus', 
'Fiorello'
];
// here we print on console the guests names with their placeholders:
let placeholder = inviteList.map((guest, i) => {
    return {
        tableName: tableName,
        guestName: guest,
        place: i + 1
    }
});
console.log(placeholder);

/* Snack 2 */
// this is our array of students objects:
const nuovaClasse = [
    {
        Id: '213',
        Name: 'Marco della Rovere',
        Grades: '78',
    },
    {
        Id: '110',
        Name: 'Paola Cortellessa',
        Grades: '96',
    },
    {
        Id: '250',
        Name: 'Andrea Mantegna',
        Grades: '48',
    },
    {
        Id: '145',
        Name: 'Gaia Borromini',
        Grades: '74',
    },
    {
        Id: '196',
        Name: 'Luigi Grimaldello',
        Grades: '68',
    },
    {
        Id: '102',
        Name: 'Piero della Francesca',
        Grades: '50',
    },
    {
        Id: '120',
        Name: 'Francesca da Polenta',
        Grades: '84',
    },
];
// we transform to Uppercases all the students names into our array:
let nameUppercase = nuovaClasse.map(student => student.Name.toUpperCase());
console.log(nameUppercase);
// we show on console all the students with a grade value higher than 70:
let gradesMoreThan70 = nuovaClasse.filter(student => student.Grades > 70);
console.log(gradesMoreThan70);
// we show on console all the students with a grade value higher than 70 and an ID higher than 120:
let gradesID = nuovaClasse.filter (student => student.Grades > 70 && student.Id > 120);
console.log(gradesID);

/* Snack 3 */
// this is our bikes array:
const bicycles = [
    {
        Name: 'rossa',
        Weight: 18, 
    },
    {
        Name: 'verde',
        Weight: 35, 
    },
    {
        Name: 'gialla',
        Weight: 22, 
    },
    {
        Name: 'blu',
        Weight: 41, 
    },
    {
        Name: 'arancione',
        Weight: 12, 
    }
];
// we initialize our lessWeightBike variable by giving it the first array object:
let lessWeightBike = bicycles[0];
// we use i = 1 because we already initialized our let with the first array object with [0] so we will relate to the 2nd:
for (let i = 1; i < bicycles.length; i++) {
    if (bicycles[i].Weight < lessWeightBike.Weight) {
        lessWeightBike = bicycles[i];
    }
}
const {Name, Weight} = lessWeightBike; // destructuring here
console.log(`La bici con peso minore è la ${Name} e pesa ${Weight}Kg.`);

/* Snack 4 */
// we have our teams array:
let teams = [
    {
        TeamName: 'Inter',
        Score: 0,
        Foul: 0
    },
    {
        TeamName: 'Juventus',
        Score: 0,
        Foul:  0
    },
    {
        TeamName: 'Milan',
        Score: 0,
        Foul: 0
    },
    {
        TeamName: 'Napoli',
        Score: 0,
        Foul: 0
    }
];
// we generate random values for our teams Scores and foul:
for (let i = 0; i < teams.length; i++) {
    teams[i].Score = getRndInteger(0,4);
    teams[i].Foul = getRndInteger(0,3);
};
// we create our new array with TeamName and Foul scores:
let foulTeams = teams.map(({TeamName, Foul}) => ({TeamName, Foul}));
// printing the final result on console:
console.log(foulTeams);

// randomizer function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}