const block1 = document.createElement('div');
block1.classList.add('wrap', 'collapse', 'beta', 'alpha');
block1.textContent = "Original";
document.body.appendChild(block1);

const clone1 = block1.cloneNode(true);
clone1.textContent = 'Clone';
document.body.appendChild(clone1);

document.addEventListener("DOMContentLoaded", function () {
    const ourLi = ['Main', 'Products', 'About us', 'Contacts'];
    const ourUl = document.createElement('ul');

    for (let i = 0; i < ourLi.length; i++) {
        const li = document.createElement('li');
        li.textContent = ourLi[i];
        ourUl.appendChild(li);
    }

    document.body.appendChild(ourUl); 
});

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const block = document.createElement('div');
    block.textContent = `${coursesAndDurationArray[i].title} (${coursesAndDurationArray[i].monthDuration} months)`;
    document.body.appendChild(block);  
}

let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray1.length; i++) {
    const el = document.createElement('div');
    el.classList.add('item');
    
    const elH1 = document.createElement('h1');
    elH1.classList.add('heading');
    elH1.textContent = coursesAndDurationArray1[i].title;
    el.appendChild(elH1);

    const elP = document.createElement('p');
    elP.classList.add('description');
    elP.textContent = coursesAndDurationArray1[i].monthDuration;
    el.appendChild(elP);

    document.body.appendChild(el);
}

const randomElement = document.createElement('div');
randomElement.classList.add('item');
const button = document.createElement('button');
button.textContent = 'Click me'
button.addEventListener("click", () => {
    if(randomElement){
        randomElement.remove();
    }
})

document.body.appendChild(randomElement);
document.body.appendChild(button);

const ourInput = document.createElement('input');
const outButton = document.createElement('button');
outButton.textContent = 'Click me';

outButton.addEventListener('click', () => {
    const inputValue = ourInput.value.trim(); 
    
    if (inputValue === '') {
        alert('You should type something!');
    }
   
    else if (Number(inputValue) > 18) {
        alert('You are welcome!');
    }
    
    else if (Number(inputValue) <= 18) {
        alert('Go to school, piggy!');
    }
});

document.body.appendChild(ourInput);
document.body.appendChild(outButton);

const inputName = document.createElement('input');
const inputSurName = document.createElement('input');
const inputAge = document.createElement('input');
const buttonSubmit = document.createElement('button');
const ourForm = document.createElement('form');

ourForm.appendChild(inputName);
inputName.placeholder = 'Name';
ourForm.appendChild(inputSurName);
inputSurName.placeholder = 'Surname';
ourForm.appendChild(inputAge);
inputAge.placeholder = 'Age';
ourForm.appendChild(buttonSubmit);
buttonSubmit.textContent = 'Submit';

class MyObject {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

document.body.appendChild(ourForm);

buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();  
    const div = document.createElement('div');
    const object = new MyObject(inputName.value, inputSurName.value, inputAge.value);
    div.textContent = `Name: ${object.name}, Surname: ${object.surname}, Age: ${object.age}`;
    document.body.appendChild(div);
})

const blockWithNumber = document.createElement('div');

blockWithNumber.id = 'counter';

let counter = localStorage.getItem('counter');

if (counter === null){
    counter = 0;
}
else{
    counter = parseInt(counter);
}

counter++;

localStorage.setItem('counter', counter);
blockWithNumber.textContent = counter;
document.body.appendChild(blockWithNumber);

// let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
// let currentTime = new Date().toLocaleString();
// sessionsList.push(currentTime); 
// localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
// let sessionsListContainer = document.getElementById('sessions-list-container');

// if (sessionsList.length > 0) {

//     let list = document.createElement('ul');

//     sessionsList.forEach(session => {
//         let listItem = document.createElement('li');
//         listItem.textContent = session;
//         list.appendChild(listItem);
//     });

//     sessionsListContainer.appendChild(list);
// } else {
//     sessionsListContainer.textContent = 'There are no visit records available.';
// }

const inputKg = document.createElement('input');
const inputFt = document.createElement('input');

inputKg.placeholder = 'Type the kilograms'
inputFt.placeholder = 'You will get pounds'

function convert(){
    const kg = parseFloat(inputKg.value)
    if(!isNaN(kg) && kg > 0){
        inputFt.value = (kg * 2.2).toFixed(2);
    } else {
        inputFt = '';
    }
}

inputKg.addEventListener('input', convert);

document.body.appendChild(inputKg)
document.body.appendChild(inputFt)

const onlyRight = new Promise((resolve, reject) => {
    const rightIf = false;
    if(rightIf){
        resolve('YUPIE!')
    } else {
        reject('NOT YUPIE!')
    }
})

onlyRight
    .then((rightMessage) => console.log(rightMessage))
    .catch((errorMessage) => console.log(errorMessage))

const after2Seconds = new Promise((resolve, reject) => {  
    const right = true;  
    if (right) {  
        setTimeout(() => {  
            reject('We got this after 2 seconds');  
        }, 2000);  
    } else {  
        resolve('We didn\'t get anything');  
    }  
});  

after2Seconds  
    .then((message) => console.log(message))  
    .catch((error) => console.log(error));  

const myPromise = new Promise((resolve, reject) => {
    const randIf = Math.floor(Math.random() * 2);
    if(randIf){
        resolve('WE GOT 0!')
    } else {
        reject('WE GOT 1!')
    }
})

myPromise
    .then((myMessage) => console.log(myMessage))
    .catch((myErrorMessage) => console.log(myErrorMessage))


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error))

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json[0].title))
    .catch((error) => console.log('A little bit a piggy'))

// fetch('https://wrong-url.com')
    // .then(response => response.json())
    // .then(json => console.log(json))
    // .catch(error => console.log("❌ Помилка:", error.message));
// 9️⃣ Відправ POST-запит на https://jsonplaceholder.typicode.com/posts з будь-якими даними


async function getTodoTitle() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        console.log(json.title); 
    } catch (error) {
        console.log(error); 
    }
}

getTodoTitle();

async function getTitle(){
    const resolve = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await resolve.json()
    console.log(data.title);
}

getTitle();

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitThreeSeconds() {
    console.log("⏳ Чекаємо 3 секунди...");
    await delay(3000); // Чекаємо 3 секунди
    console.log("We got this after 3 seconds");
}

waitThreeSeconds();

async function getUser(){
    const resolve = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resolve.json();
    console.log(data[0].name);
}

getUser();

async function getError(){
    try{
        const resolve = await fetch('https://wrong-url.com');
        if (!resolve.ok) {  
            throw new Error('Невірний URL abo інша помилка');
        }
        const data = resolve.json();
        console.log(data);
    } catch (error){
        console.log(error.message);
    }
}

getError();