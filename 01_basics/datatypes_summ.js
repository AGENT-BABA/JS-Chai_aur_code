//Primitive datatypes

//Number,Boolean,String,Symbol,BigInt,null,undefined


const score=100;
const scorevalue=100.8;

const IsLoggedin= false
const outsidetemp=null
const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id == anotherid)

const BigNum=39469578439354233n
console.log(typeof anotherid)
console.log(typeof BigNum)
//Reference (Non primitive)

//Array,Objects,Functions
const heros=["shaktiman",
    "naagraj","doga"
]

const myObj=
{
    name:"Krushna",
    age:19,
}

const myfunction=function()
{
    console.log("Hello World!")
}
console.log(typeof myfunction)
console.log(typeof myfunctionkflsd)

//++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive) memory and heap(NOn-Primitive) memory

let myName = "Krushna"
let anothername = myName
anothername = "Swami"

console.log(anothername)
console.log(myName)

let userOne = 
{
email : "skrushna1983@gmail.com",
Upi : "user@ybl"

}
let userTwo=userOne

userTwo.email = "ktackle0706@gmail.com"

console.log(userOne.email)

console.log(userTwo.email)