//Operator
// <, > , <= , >= , == , != , ===, !==

//if else statement
const temprature = 41

if(temprature > 35) {
    console.log("It's too hot today")
} else {
    console.log("The weather is nice today")
}

const score = 200
if(score > 100) {
    const power = "fly"
    console.log(`User power ${power}`)
}

//console.log(`User power ${power}`) // when i use const and print this outside the scope 
// i can't access this because it will show power variable is undefined
//but where the problem comes with declareing variable with var? 
//let's use var 
const run = 200
if(run > 100) {
    var power = "Great Innings"
    console.log(`Batsman played ${power}`)
}

console.log(`Batsman played ${power}`) //now it runs fine 
// because the var keyword is for global scope 
// and useing var is a bad practice in javascript bacause it could create confusion of scopes

let cgpa = 2.3

if(cgpa > 3.8) {
    console.log("Topper")
} else if(cgpa > 3.6 && cgpa < 3.8) {
    console.log("Sera vai sera!!!!!!!!")
} else if(cgpa >3.2 && cgpa<3.6) {
    console.log("Ham middle class adhmi hay kya bole or")
} else if(cgpa >3 && cgpa < 3.2) {
    console.log("Pass korlei Alhamdulliah")
} else {
    console.log("Ham vhi hain duniya main . Log nehi puchte hamko kabhi !!")
}