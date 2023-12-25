var a1 = 30
let a = 300
if(true) {
    let a = 100
    const b = 230
    console.log("Inner ",a)

}
//block scopes and global scopes

console.log(a)


//Closure in javascript

function one() {
    const username = "Mehedi Hasan Hridoy"
    function two() {
        const website = "youtube"
        console.log(username)
        console.log(website)
    }
    //out of scope so can't access variable website here
    console.log(username)
    two() //calling function two 

}
one() //calling function one


//two way of function 
console.log(addOne(5)) 
function addOne(num) {
    return num + 1
}

addOne(5) //suppose i comment this out and try access this before decalrin it .
//let's see what happens
//and when i run the code works as fine as it should be 

console.log(addTwo(5)) //for thie program generates error . and the code doesn't exicutes
const addTwo = function(num) {
    return num +2
}

addTwo(5) //now let's try for this one 

