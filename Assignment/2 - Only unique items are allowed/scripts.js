/*You are building a program that takes an array of numbers as input and you need to remove all the duplicates 
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that 
contains only the unique elements. */

let myArray=[1,2,4,5,2,4,6,7,2,9]

function uniqueSet(myArray){
    return new Set(myArray)
}
let uniquesets=uniqueSet(myArray)
console.log(uniquesets)