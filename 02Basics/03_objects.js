//Singletone

//Objec literals
//object declaration
const mySymbol = "symbol1"

const jsUser = {
    name : "Hridoy",
    age: 22,
    "university ": "Daffodil International University",
    location: "Narayanganj",
    [mySymbol] : "newSymbol", //way to decalre symbol in objects ...very important for interview 
    email: "hridoy15-5097@diu.edu.bd",
    lastLogIn : ["Saturday","Friday"]
}

//accessing objects
// console.log(jsUser.name)
// console.log(jsUser["location"])  //why neeed to konw this ? because on # marked case it's not possible to access in other way

// console.log(jsUser["university "])
// console.log(jsUser.symbol1) //way to print symbol 
// console.log(jsUser[mySymbol]) //way to print symbol

//changing the value of objects 
jsUser.email = "hridoy@chatgpt.com"
console.log(jsUser)

//freezing the objects that no one could change it 
//Object.freeze(jsUser) //now the object jsUser is freezed and no change is possible
//try to change 
jsUser.email = "mehedi@google.com"
console.log(jsUser) //you can see that the updatation failed to change 


jsUser.greeting = function() {
    console.log("Hello Javascript User");
}

jsUser.greetingTwo = function() {
    console.log(`Hello javascript user, ${this.name} welcome`);
}
//I was facing the problem because  i already freezed the object . 
//that's why change doesn't working. then i comment out the freezing and it's works fine 
// if i want to freeze then i have to update first and then use freezing 
// as suppose now i can freeze in line 43 


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
