console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
// --------------------------------------
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());
// --------------------------------------
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());
// --------------------------------------
let str = '           dirty string   '
console.log(str);
console.log(str.trim());
// --------------------------------------
let str_2 = 'Ревуть воли як ясла повні'

const stringToArray = (str) => {
    return console.log(str.split(' '))
}

stringToArray(str_2)
// --------------------------------------
const nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
const strNums = nums.map(num => num.toString())
console.log(nums);
console.log(strNums);
// --------------------------------------
let num1 = [11,21,3];
const sortNums = (arr, choice) => {
    if(choice == '+'){
        console.log(arr.sort((a, b) => a - b))
    }
    else if(choice == '-'){
        console.log(arr.sort((a, b) => b - a))
    }
}

sortNums(num1, '+')
sortNums(num1, '-')
// -------------------------------------
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
let longCourses = coursesAndDurationArray.filter(cours => cours.monthDuration >= 5)
const addIdCourses = coursesAndDurationArray.map((course, index) => ({
    id: index += 1,
    title: course.title, 
    monthDuration: course.monthDuration
}))


console.log(coursesAndDurationArray);
console.log(longCourses);
console.log(addIdCourses);
// -------------------------------------

const deck = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },

    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },

    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },

    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' }
];

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

const spadeAce = deck.find(card => {
    return card.value === 'ace' && card.cardSuit === 'spade'
})

console.log(spadeAce);

const onlySix = deck.filter(card => {
    return card.value === '6'
})

console.log(onlySix);

const onlyDiamond = deck.filter(card => {
    return card.cardSuit === 'diamond'
})

console.log(onlyDiamond);

const onlyRed = deck.filter(card => {
    return card.color === 'red'
})

console.log(onlyRed);

const onlyClubsMoreTheNine = deck.filter(card => 
    card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)
)

console.log(onlyClubsMoreTheNine);
// --------------------------------------------------------

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const groupedCards = deck.reduce((acc, card) => {
    acc[card.cardSuit].push(card);
    return acc;
}, {
    spade: [],
    diamond: [],
    heart: [],
    clubs: []
});

console.log(groupedCards);