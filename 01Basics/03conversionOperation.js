let score = "33aaa"
//let score = 33 //output should be number
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) //will output NaN..when it cannot convert 

//"33" => 33
//"33abc" => NaN ..Not an Number


let isLoggedIn = 1
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn)
// 1 => true
// 0 => false
// "hridoy" => true
// "" => false 
