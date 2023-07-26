/*6. Nested Objects.

Write a function that takes an object representing a person as input, and extracts the name and street 
properties from a nested object using object destructuring. The function should return an object with these two 
properties. A sample object is given below */

const person={
    name:"Hrushikesh",
    age:23,
    address:{
        street:"123 A BC",
        city:"Mumbai",
        state:"Maharashtra"
    }
}

function getVariable(obj){
    const {
        name, address:{street}
    }=obj
    return {name,street}
}

console.log(getVariable(person))