// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Блок ${i}: текст<div>`)
// }

// let x = 0
// while (x < 20){
//     document.write(`<div>Блок ${x}: текст<div>`)
//     x++
// }
// ----------------------------------------------------
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js']

// document.write(`<ul>${listOfItems[2]}`)

// for (let i = 0; i < listOfItems.length; i++) {
//     if (i === 2) {
//         continue
//     }
//     else{
//         document.write(`<li>${listOfItems[i]}</li>`)
//     }
// }

// document.write(`</ul>`)
// ----------------------------------------------------
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     }
// ];

// document.write(`<div class="products">`); 

// for (let i = 0; i < products.length; i++) {
//     document.write(`
//         <div class="product-card">
//             <h3 class="product-title">${products[i].title} - Price: ${products[i].price}</h3>
//             <img src="${products[i].image}" alt="${products[i].title}" class="product-image"/>
//         </div>
//     `);
// }

// document.write(`</div>`); 

// ---------------------------------------------------------

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

console.log('Тільки true');

for (let key in users){
    if(users[key].status == true){
        console.log(users[key])
    }
}

console.log('Тільки false');

for (let key in users){
    if(users[key].status !== true){
        console.log(users[key])
    }
}

console.log('Старші 30');

for (let key in users){
    if(users[key].age > 30){
        console.log(users[key])
    }
}
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років