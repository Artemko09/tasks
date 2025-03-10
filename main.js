let arr = [1, 2, 'new', true, false, 5, 'google', 91, 'word', 'name']

for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    console.log(el);
}
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
// -----------------------------------------------------------------