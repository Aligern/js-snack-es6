/* 
snack 1
*/
const vipTable = [ 
    {
        tableName: 'table: Johnson',
        guestName: 'Brad Pitt',
        place: '1'
},
{
    tableName: 'table: Johnson',
    guestName: 'Johnny Depp',
    place: '2'
},
{
    tableName: 'table: Johnson',
    guestName: 'Lady Gaga',
    place: '3'
},
{
    tableName: 'table: Johnson',
    guestName: 'Cristiano Ronaldo',
    place: '4'
},
{
    tableName: 'table: Johnson',
    guestName: 'Georgina Rodriguez',
    place: '5'
},
{
    tableName: 'table: Johnson',
    guestName: 'Chiara Ferragni',
    place: '6'
},
{
    tableName: 'table: Johnson',
    guestName: 'George Clooney',
    place: '7'
},
{
    tableName: 'table: Johnson',
    guestName: 'Amal Clooney',
    place: '8'
},
{
    tableName: 'table: Johnson',
    guestName: 'Fedez',
    place: '9'
},
{
    tableName: 'table: Johnson',
    guestName: 'Amadeus',
    place: '10'
},
{
    tableName: 'table: Johnson',
    guestName: 'Fiorello',
    place: '11'
}
];

for (let key of vipTable){
    console.log(key.tableName,key.guestName,key.place);
};

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

let nameUppercase = nuovaClasse.map(student => student.Name.toUpperCase());
console.log(nameUppercase);