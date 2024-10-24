// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3124235353452134252n



// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["Zoro", "Luffy", "Sanji", "Brook"]
let myObj = {
    name: "Zoro",
    age: 22,
}

const myFunction = function(){
    console.log("Roronoa Zoro");
}

console.log(typeof(anotherId));



// **********************************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "Roronoa_Zoro"

let anothername = myYoutubeName
anothername = "monkeyDluffy"

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "luffy@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)