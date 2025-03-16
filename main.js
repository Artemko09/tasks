class User{
    constructor (id, name, surname, email, phone){
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    }
}

const users = []

const usernames = ["John", "Alice", "Bob", "Emma", "Michael", "Sophia", "David", "Olivia", "Daniel", "Emily"];
const surnames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Davis", "Miller", "Wilson", "Moore", "Taylor"];
const emails = usernames.map(name => `${name.toLowerCase()}@example.com`);
const phones = ["+1234567890", "+0987654321", "+1122334455", "+2233445566", "+3344556677", "+4455667788", "+5566778899", "+6677889900", "+7788990011", "+8899001122"];

for (let i = 0; i < 10; i++) {
    users.push(new User(i + 1, usernames[i], surnames[i], emails[i], phones[i]));
}

console.log(users);

const onlyEvenId = users.filter(user => user.id % 2 == 0)
console.log(onlyEvenId)
const sortedUsers = users.sort((a, b) => b.id - a.id)
console.log(sortedUsers);

class Client{
    constructor(id, name, surname, email, phone, order){
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}

const clients = []

clients.push(
    new Client(1, 'Jhon', 'Doe', 'smth@gmail.com', '+1234567890', ['Laptop', 'PC']),
    new Client(2, "Jane", "Smith", "jane.smith@example.com", "+987654321", ["Phone", "Charger", 'smth']),
    new Client(3, "Michael", "Brown", "michael.brown@example.com", "+111222333", ["Tablet"]),
    new Client(4, "Emily", "Johnson", "emily.johnson@example.com", "+444555666", ["Monitor", "Keyboard", 'smth', 'smth']),
    new Client(5, "David", "White", "david.white@example.com", "+777888999", ["Headphones"]),
    new Client(6, "Sarah", "Wilson", "sarah.wilson@example.com", "+333222111", ["Camera", "Tripod"]),
    new Client(7, "Robert", "Lee", "robert.lee@example.com", "+666555444", ["Smartwatch", 'smth', 'smth', 'smth', 'smth', 'smth']),
    new Client(8, "Laura", "Taylor", "laura.taylor@example.com", "+888777666", ["Printer", "Ink", 'smth', 'smth']),
    new Client(9, "Daniel", "Martinez", "daniel.martinez@example.com", "+555444333", ["Speakers", 'smth']),
    new Client(10, "Olivia", "Anderson", "olivia.anderson@example.com", "+999888777", ["Game Console", 'smth', 'smth'])
)

console.log(clients)

const sortOrder = clients.sort((a, b) => a.order.length - b.order.length)
console.log(sortOrder);

class Car {
    constructor(model, creator, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.creator = creator;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.drivers = [];
    }

    drive() {
        console.log(`WE ARE DRIVING WITH ${this.maxSpeed} km/h`);
    }

    info() {
        console.log(` Model: ${this.model}\n`, 
                    `Creator: ${this.creator}\n`, 
                    `Year: ${this.year}\n`, 
                    `Maximum speed: ${this.maxSpeed} km/h\n`, 
                    `Engine capacity: ${this.engineCapacity} L`);
    }

    increaseMaxSpeed(speed) {
        this.maxSpeed += speed;
    }

    changeYear(newYear) {
        this.year = newYear;
    }

    addDriver(driver) {
        this.drivers.push(driver);
    }
}

const firstCar = new Car('P1', 'McLaren', 2013, 500, 3.8)
console.log(firstCar);
firstCar.info()
firstCar.increaseMaxSpeed(100)
firstCar.changeYear(2018)
firstCar.info()
const firstDriver = {
    name: 'Oscar Piastri',
    driver: 'Second driver', 
    age: 21, 
    team: 'McLaren'
}
firstCar.addDriver(firstDriver)
const secondDriver = {
    name: 'Lando Norris',
    driver: 'First driver', 
    age: 24, 
    team: 'McLaren'
}
firstCar.addDriver(secondDriver)
// --------------------------------------------------