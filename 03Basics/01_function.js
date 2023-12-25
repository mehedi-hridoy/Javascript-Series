//function
function myFun() {
    console.log("Mehedi Hasan Hridoy")
    console.log("DevOps Architect")
}

myFun() //function call

function sum(num1 , num2) {
    console.log(num1 + num2)
}

sum(10,25)

function multiply(num1 , num2) {
    let ans = num1 * num2;
    return ans
    console.log("I love you") // This line of code will never be exicuted.
    // just because after return keyword nothing exicuted on function 
    // As my love remains untold forever 😂
}

let ans = multiply(10,5)
console.log("The result is ",ans)

function loginUserMessage(message) {
    return `${message} just logged in`
}

console.log(loginUserMessage("Hridoy"))


function cart(...num) {  //rest and spread operator in javascript
    return num
}

console.log(cart(120,200,400))

//with object 
const user =  {
    username: "Mehedi Hasan Hridoy",
    price: "1 Quadrillion"
}

function handleObject(anyobject) {
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)






