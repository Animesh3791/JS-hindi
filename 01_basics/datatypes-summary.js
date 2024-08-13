// Primitive

// 7 types : String, number, boolean, null , undefined, Symbol, BingInt

// const Score = 100
// const Score = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 3292878998779n

// Referance (Non Primitive)

// Array, Objects, Functions  ==> datatype is function

const heros = ["shaktiman", "gman", "doga"]

let myObj = {
    name: "Animesh",
    age: 24,
}


const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof bigNumber);
