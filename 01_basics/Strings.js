const name="Krushna"
const Count= 90

console.log(`Hello my name is ${name} and repoCount is ${Count}`)

const gamename = new String('hteshhc')
console.log(gamename)
console.log(gamename[2])
console.log(gamename.__proto__)

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('h'));

const newString = gamename.substring(0,4)
console.log(newString.toUpperCase());

const anotherString = gamename.slice(-6,-4)
console.log(anotherString)

const stringtest = "    hello     "
console.log(stringtest.trimStart())
console.log(stringtest.trimEnd())
console.log(stringtest.trim())

const url="https://www.goo%50gle.com"
console.log(url.replace('%50','_'))

console.log(url.includes('goo'))

console.log(gamename.split('-'))