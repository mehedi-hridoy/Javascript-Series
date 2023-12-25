const user = {
    username : "Mehedi Hasan Hridoy",
    price: "Limited Edition",

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to our website `);
        
       
    }
   


}

console.log(user.username)

user.username = "Looser of Life" // try to change the username 
console.log(user.username) //prints the upodated user name "Loosers of life "
//This thing is possible for using this keyword . by this keyword we can access things under curret contex
function chai() {
    console.log(this)
}