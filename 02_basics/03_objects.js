// singleton 

// object literals
// Object.create

const mySym = Symbol("key1")

const JsUser = { 
    //use [] to use a symbol
    [mySym]:"key2",
    name : "Krushna",
    age : 19,
    location : "banglore",
    isLoggedIn : false,
    LastLogin:["Monday", " Thursday", "Friday"]
}
console.log(JsUser.name)
console.log(JsUser["location"]);
console.log(JsUser[mySym]);

JsUser.name = "Swami";
// Object.freeze(JsUser);
JsUser.name = "Neha";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS User,${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());