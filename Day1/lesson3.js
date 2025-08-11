//objects

// task is to define a customer

var customer =
{
    firstName: "Rahul12",
    lastName: "Shrivastav",
    age: 24,
    isActive: true,
    cars: ["benz", "audi"]
}
var newCustomer =
{
    firstName: "John",
    lastName: "Adams",
    age: 22,
    isActive: false
}

console.log(newCustomer.isActive)

console.log(`${customer.firstName} is ${customer.isActive}`)

//dot notation
customer.firstName = "Rahul"
// bracket notation
customer['lastName'] = "david"
console.log(`${customer.firstName} , ${customer.lastName}`)


//arrays
var companies = ["Google", "microsoft", "tesla"]
var cars = ["bmw", "benz"]
companies[0] = "Infosys"

var numbers = [1,3, 6, 7]

console.log(companies[2])


// {}  --> it is an object (properties)
// []   --> array

// array of numbers --> students marks