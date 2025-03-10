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

function divObject(arr){
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>`)
        document.write(`<p>${arr[i].id}, ${arr[i].name}, ${arr[i].age}</p>`)
        document.write(`</div>`)
    }
}

divObject(users)