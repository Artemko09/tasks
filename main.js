function area(a, b){
    return a * b
}

console.log(area(5, 2))
// ------------------------------------
function areaCircle(r){
    return Math.PI * r ** 2
}

console.log(areaCircle(5));
// -----------------------------------
function areaCylinder(r, h){
    return 2 * Math.PI * r * (h + r)
}

console.log(areaCylinder(5, 7))
// -----------------------------------
function takeArray(arr){
    for(let el of arr){
        console.log(el);
    }
}

array = [1, 2, 3 ,4, 5, 6]
console.log(takeArray(array));
// ----------------------------------
function typeSmth(text){
    return document.write(`<p>${text}</p>`)
}

typeSmth('Hello, world!')
// ----------------------------------
function createList(text, howMuch){
    document.write(`<ul>`)
    for (let i = 0; i < howMuch; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

createList('Lol', 3)
// ----------------------------------
let arr = [1, 'Hello', true, 25, 'Walter']

function createFromArray(array){
    document.write(`<ul>`)
    for (const el of array) {
        document.write(`<li>${el}</li>`)
    }
    document.write(`</ul>`)
}

createFromArray(arr)
// ---------------------------------
let users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "David", age: 28 },
    { id: 5, name: "Eve", age: 35 }
];

function divObject(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>`);
        document.write(`<p>${arr[i].id}, ${arr[i].name}, ${arr[i].age}</p>`);
        document.write(`</div>`);
    }
}

divObject(users);
// ---------------------------------

const myArr = [34, 21, 10, 75, 38, 19]

function minEl(array){
    let min = array[0]
    for (let i = 1; i < array.length; i++) {
        if (min > array[i]){
            min = array[i]
        }
    }
    return min
}

console.log(minEl(myArr))
// ---------------------------------
const ar = [2, 5, 9, 4, 25]

function sumOfArr(array){
    let sum = array[0]
    for (let i = 1; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

console.log(sumOfArr(ar))
// ----------------------------------
function swap(arr, index1, index2) {
    let temp = arr[index1];
    
    arr[index1] = arr[index2];
    arr[index2] = temp;
    
    return arr;
}

const number = [11, 22, 33, 44];
console.log(swap(number, 0, 1));
// // -----------------------------------
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

const valutaVubir = [{currency: 'USD', value: 41.25}, {currency: 'EUR', value: 44.9}, {currency: 'PLN', value: 10.25}]

function exchange(hryvni, arr_vubir){
    let valuta = prompt('Enter the curency: ')
        if(valuta == 'USD'){
            console.log(`You got ${hryvni / arr_vubir[0].value} USD`);
        }
        else if (valuta == 'EUR'){
            console.log(`You got ${hryvni / arr_vubir[1].value} EUR`);
        }
        else if (valuta == 'PLN'){
            console.log(`You got ${hryvni / arr_vubir[2].value} PLN`);
        }
    
}

exchange(1000, valutaVubir)

function exchange(hryvni, array, currency){
    if(currency == array[0].currency){
        console.log(`You got ${hryvni / array[0].value} USD`)
    }
    else if (currency == array[1].currency){
        console.log(`You got ${hryvni / array[1].value} EUR`)
    }
    else if(currency == array[2].currency){
        console.log(`You got ${hryvni / array[2].value} PLN`)
    }
}

exchange(10000, valutaVubir,'PLN')