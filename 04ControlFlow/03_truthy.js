//Truthy and falsy values
const userEmail = ""
if(userEmail) {
    console.log("Found user email")
} else {
    console.log("User email not found")
}

//falsy
// false , 0, -0, BigInt, "", NULL , undefined, Nan= Not an number
// all the other values are truthy values

//truthy surperising
// "0" // inside string 0 is a truthy value
//'false' truthy inside string any value is truthy values
//" " even a space is truthy value inside string
// [] truthy values empty array 
// {} also this 
// function() {}  this also a truthy value

// check if an array is empty 
const arr = []
if(arr.length === 0) {
    console.log("array is empty ")
}


//check if an object is empty 
const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty ")
}

//Nuslish Coalescing operator (??): Null undefined
let val1 ;
val1 = null ?? 10
console.log(val1)
