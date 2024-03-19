// Primitive

/* 
7 types : string , Number, Boolean, null, undefined, symbol, BigInt
*/

const socre = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)



// Reference (Non Primitive)

// Array , Object, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name : "pavan",
    age : "22"
}

const myFunction = function() {
    console.log("Hello World !!!")
}
