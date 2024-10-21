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

// const obj3 = {obj1,obj2}
const obj3 =Object.assign({},obj1,obj2)
//use {} this is not necessary but using these is 
console.log(obj3)

