// => Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let  userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// => non Primitive / Refrence 

// Array, Objects Functions 

const heros = ["Ali haider", "Ali", "Hadi"];
let myObj =  {
    name: "Ali Haider",
    age: 22,
}

const myFunction = function(){
    console.log("Helo World");
}

console.log(typeof outsideTemp);
