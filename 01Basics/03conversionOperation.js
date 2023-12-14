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

//************Operations**************//

let value = 3
let negValue = -value
console.log(negValue);

//Operation
console.log(2+2)
console.log(4-3)
console.log(2*2)
console.log(4/2)
console.log(2**3) //two power three
console.log(4%2)

let str1 = "Mehedi "
let str2 = "Hasan Hridoy"
let str3 = str1 + str2

console.log(str3)

console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + 2 + 2)   //122




