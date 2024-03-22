/* 
snack 1
*/
let tableName = 'Tavolo Vip';
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

let placeholder = inviteList.map((guest, i) => {
    return {
        tableName: tableName,
        guestName: guest,
        place: i + 1
    }
});
console.log(placeholder);

/*
Snack 2
*/
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
// we transform to Uppercases all the students into our array
let nameUppercase = nuovaClasse.map(student => student.Name.toUpperCase());
console.log(nameUppercase);

let gradesMoreThan70 = nuovaClasse.filter(student => student.Grades > 70);
console.log(gradesMoreThan70);

let gradesID = nuovaClasse.filter (student => student.Grades > 70 && student.Id > 120);
console.log(gradesID);