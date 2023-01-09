/*
Strings in JavaScript cannot be reversed directly so you're
going to have to split it into something else first.. do 
the reversal and then join it back together into a string.*/


function reverseString(str){
    const myArray = str.split("");
    let reverseArray = myArray.reverse();
    let joinArray = reverseArray.join(""); 
    return joinArray;  
}

let result = reverseString("hello there");
console.log(result);
   
module.exports = reverseString;
