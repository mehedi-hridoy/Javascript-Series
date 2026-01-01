// map , filter and reduce are higher order functions in JavaScript that operate on arrays.

// for each loop => calls a function once for each array element
const a = [1, 2, 3, 4, 5];
a.forEach((value,index,array) => {
    console.log(value, index, array);
})

// map => creates a new array by processing some operation on each array element
const b = [1, 2, 3, 4, 5];
b.map((value,index) => {
    return value * 2;
})

// filter => filters an array with values that pass a test. creates a new array 
const c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = c.filter((value) => {
    return value % 2 === 0;
})
console.log(evenNumbers); // [2,4,6,8,10]