//Dates

let myDate= new Date()
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toTimeString())

console.log(typeof myDate)
console.log(typeof Date)

let MyCreatedDate =new Date(2023 , 3 , 23,5,59)
console.log(MyCreatedDate.toDateString());
console.log(MyCreatedDate.toLocaleString());

let MCreatedDate =new Date("01-14-2023")
console.log(MCreatedDate.toLocaleDateString())

let TimeStamp =Date.now()

console.log(TimeStamp);
// console.log(TimeStamp.getTime());
console.log(Math.floor(Date.now()/1000));


let NewDate =new Date()
console.log(NewDate);
console.log(NewDate.getMonth() + 1);
console.log(NewDate.getDay())

console.log(
    NewDate.toLocaleString('default',{
        weekday: "long",
        day: "2-digit"
    }))