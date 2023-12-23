//Arrays
const array = [2, 3 , 5 , 12, 34]
const name = ["mehedi","hasan","hridoy","shakil","rony","imran"]
const array2 = new Array(1,3,4,23)


const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);

const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];

//Finding the length of an array 
const products = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(products.length); // 5

const shop = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shop[0]);
// returns "bread"


const shopping1 = ["bread", "milk", "cheese", "hummus", "noodles"];
shopping1[0] = "tahini";
console.log(shopping1);
// shopping1 will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]

const random1 = ["tree", 795, [0, 1, 2]];

console.log(random1[2][2])
//outputs 2 
//random[2] // This is [0, 1, 2]
//random[2][2] // This is accessing the third element of [0, 1, 2], which is 2


// array in javascript is dynamic 
let arr = [2,3,4,5,6]
arr.push(7)
console.log(arr)
arr.push(8)
console.log(arr)
arr.push(9)
console.log(arr)
arr.pop(7)
console.log(arr) //will give outpout 2 3 4 5 6 7 8 
// because in javascript the pop function doesn't allows any arguments. it just simply removes the last element

console.log(arr.includes(10))
console.log(arr.indexOf(5))

const newArr = arr.join() //join binds this array into string
console.log(arr)
console.log(newArr)
console.log(typeof newArr)

//To add an item to the start of the array, use unshift():
const cities = ["Manchester", "Liverpool"];
cities.unshift("Edinburgh");
console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]


//To remove the first item from an array, use shift():
const cities1 = ["Manchester", "Liverpool"];
cities1.shift();
console.log(cities1); // [ "Liverpool" ]


//slice and splice
const a = [0,1,2,3,4,5]


const newA1 = a.slice(1,3)
console.log("A",newA1)

const newA2 = a.splice(1,3)
console.log("C",a)
console.log("B",newA2)


//Shallow copies and Deep Copies
/*
A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent. */

/*
A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too */






