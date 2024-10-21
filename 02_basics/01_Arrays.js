const Myarr = [0,4,2,4,9,2,5]
const myhero = [ "shaktiman","Superamn"]
console.log(Myarr[1])

Myarr.push(7)
Myarr.unshift(2)
//unshift inserts a number at first place

console.log(Myarr)

Myarr.pop()
//remove the last element
Myarr.pop()

console.log(Myarr)
Myarr.shift()
console.log(Myarr)
console.log(Myarr.includes(5))

const newarr=Myarr.join()
console.log(Myarr)
console.log(newarr)
console.log(typeof newarr)

//slice && splice

console.log("A ",Myarr)

const mynewarr1=Myarr.slice(1,3)
console.log(mynewarr1)
console.log("B ",Myarr);


const mynewarr2=Myarr.splice(1,3)
console.log(mynewarr2)
console.log("B ",Myarr);