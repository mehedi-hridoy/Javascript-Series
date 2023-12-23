//two way to decalre objects
const tinderUser = new Object() //this is one way to declare objects 
console.log(tinderUser)

const fbUser = {}  //this is another way to declare objects ..and both have same functionality 
console.log(fbUser)

fbUser.id = "hridoy01"
fbUser.fullName = "Mehedi Hasan Hridoy"
fbUser.mail = "mehedi@facebook.com"

console.log(fbUser)

//nested objects 
const myObject = {
    name : "Mehedi ",
    occupation: "Student ",
    branch : "Computer Science",
    favouriceTopic: "Web Security",
    learning : {
        language : "HTML, CSS ,Javascript",
        domain: "web development",
        specilization : {
            architecture: "AWS",
            design : "react webflow"
        }

    }
}

//accessing nested object elements
console.log(myObject.branch)
console.log(myObject.learning.specilization.architecture)


//combining objects

const obj1 = {
    1: "Mehedi ",
    2: "Shakil",
    3: "Sadik"
}

const obj2 = {
    4: "Rony ",
    5: "Yasin",
    6: "Nishfa",
    7:"Nishat"
}

console.log({},obj1,obj2)
