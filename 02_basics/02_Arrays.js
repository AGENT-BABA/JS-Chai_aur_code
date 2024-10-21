const heros=["Shaktiman","DoggyDon","Batman"]

const heros2=["Superman","Salman Khan","Shahid Kapoor"]

//  heros2.push(heros)
// console.log(heros2)
// console.log(heros2[3][2])

const allheros= heros2.concat(heros)
    console.log(allheros)

const allnewheros=[...heros,...heros2]
console.log(allnewheros)


const anotherarr=[2,3,4,1,[5,3,55,3],3,1,[7,4,6],7]
const realanotherarr=anotherarr.flat(Infinity)
console.log(realanotherarr)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))

console.log(Array.from({name:"Hitesh"}))

const score1=100;
const score2=200;
const score3=300;

console.log(Array.of(score1,score2,score3))

