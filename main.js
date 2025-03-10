let arr = [1, 2, 'new', true, false, 5, 'google', 91, 'word', 'name']

for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    console.log(el);
}

console.log(...arr);
// ------------------------------------------------------------------
const obj = {
    title: 'Harry Potter',
    pageCount: 300,
    genre: 'satira'
}
// ------------------------------------------------------------------
const books = {
    title: 'Better Call Saul',
    pageCount: 450, 
    genre: 'genre', 
    author: [{name: 'Gilligan',
              age: 45
    }]
}
// ------------------------------------------------------------------
const users = [
    { name: 'Walter', username: 'Heisenberg', password: 'p1' },
    { name: 'Jessie', username: 'Fugu', password: 'p2' },
    { name: 'Jimmy', username: 'Saul Goodman', password: 'p3' },
    { name: 'Gustavo', username: 'Gus', password: 'p4' },
    { name: 'Skyler', username: 'Bitch', password: 'p5' },
    { name: 'Todd', username: 'Redhair piggy', password: 'p6' },
    { name: 'Hank', username: 'Officer Shredure', password: 'p7' },
    { name: 'Mike', username: 'Legend', password: 'p8' },
    { name: 'Brok', username: 'Muchacho', password: 'p9' },
    { name: 'Jane', username: 'Overdrug bitch', password: 'p10' }
]

for (let i = 0; i < users.length; i++) {
    const el = users[i].password;
    console.log(el);
}

users.forEach(user => console.log(user.password))
// ------------------------------------------------------------------
const weatherOfTheWeek = [
    [10, 15, 20], // Monday
    [10, 15, 20], // Tuesday
    [10, 15, 20], // Wednesday
    [10, 15, 20], // Thursday
    [10, 15, 20], // Friday
    [10, 15, 20], // Saturday
    [10, 15, 20]  // Sunday
];
// --------------------------------------------------------------------
time = -1 //prompt('Enter the time: ')

if (time < 15 && time > 0){
    console.log('This time belongs to first quater');
}
else if (time >= 15 && time < 30){
    console.log('This time belongs to second quater');
}
else if (time >=30 && time < 45){
    console.log('This time belongs to third quater');
}
else if(time >=45 && time < 60){
    console.log('This time belongs to fourth quater');
}
else{
    console.log('You can only type from 0 to 59');
}
// ----------------------------------------------------------------------
let x = -3

if (x != 0){
    console.log('Respect')
}
else{
    console.log('Disrespect');
}
// ------------------------------------------------------------------------
let day = 16
if (day > 0 && day < 11){
    console.log('It\'s first decade');
}
else if (day >= 11 && day < 21){
    console.log('It\'s second decade')
}
else if (day >= 21 && day <= 31){
    console.log('It\'s third decade');
}
else{
    console.log('It`s no where');
}
// -----------------------------------------------------------------------
dayOfWeek = 'Monday' // prompt('Enter the day you want:')

switch(dayOfWeek){
    case 'Monday':
        console.log('You choice the Monday');
        break;
    case 'Tuesday':
        console.log('You choice the Thuesday');
        break;
    case 'Wednesday':
        console.log('You choice the Wednesday');
        break;
    case 'Thursday':
        console.log('You choice the Thursday');
        break;
    case 'Friday':
        console.log('You choice the Friday');
        break;
    case 'Saturday':
        console.log('You choice the Saturday');
        break;
    case 'Sunday':
        console.log('You choice the Sunday');
        break;
    default:
        console.log('You are invalid');
        break;
}
// --------------------------------------------------------------------------
firstNumber = prompt('Enter the first number: ')
secondNumber = prompt('Enter the second number: ')
if (firstNumber > secondNumber) {
    console.log(firstNumber);
}
else if (firstNumber < secondNumber){
    console.log(secondNumber);
}
else if (firstNumber == secondNumber){
    console.log(`${firstNumber} = ${secondNumber}`);
}
// --------------------------------------------------------------------------
let random = 5
if (!random){
    random = 'default'
}
console.log(random)
// --------------------------------------------------------------------------
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if(coursesAndDurationArray[i].monthDuration > 5){
        console.log('Super');
    }
}