// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123ssfa"
tinderUser.name = "Krushna"
tinderUser.isLogIn = false

// console.log(tinderUser);

const regularUser = {
    email:"someGmail.com",
    fullname:{
        username:{
            Userfullname:"Swami Sonawane"
        }
    }
}
// console.log(regularUser.fullname?.username.Userfullname);

const obj1 ={1: "a",2: "b"}
const obj2 ={3: "a",4: "b"}

// const obj3 = { obj1 , obj2 }

const obj3 = Object.assign({},obj1,obj2)
// const obj10 = Object.assign( ...obj1, ...obj2 )
//use {} this is not necessary but using these is 
// console.log(obj10)
console.log(obj3)

const users = [
    {
        id:1,
        email:"Krushna@jh.njinv"
    },
    {
        id:2,
        email:"Krushna2@jh.njinv"
    },
    {
        id:3,
        email:"Krushna3@jh.njinv"
    },
]
users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogIn'))

const course = {
    coursename : "Krushna",
    price:"100$",
    courseinstructor: "Swami"
}

//course.courseInstructor

const{courseinstructor:Instructor} = course

console.log(courseinstructor)

