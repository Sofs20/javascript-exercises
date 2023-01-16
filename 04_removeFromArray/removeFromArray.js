/*Implement a function that takes an array and some other 
arguments then removes the other arguments from that array:

removeFromArray([1, 2, 3, 4], 3); // should remove 3 and
 return [1,2,4]
Hints
The first test on this one is fairly easy, but there are a
 few things to think about(or google) here for the later 
 tests:

how to remove a single element from an array
how to deal with multiple optional arguments in a javascript
function
Check this link. Scroll down to the bit about Array.from 
or the spread operator. - Or this link.*/


const removeFromArray = function remove(numbers, str) {
    
    
   for (let i=1; i<arguments.length; i++){
    numbers.splice(arguments[i]-1, 1);
   }
   if(str === arguments){
    str.slice(arguments, 1)
}
    return numbers;
};

let result = removeFromArray([1, 2, 3, "ho"], "ho", 3);
console.log(result);

/*  
    ✕ ignores non present values (6 ms)
    ✕ can remove all values (2 ms)
    ✕ works with strings (1 ms)
    ✕ only removes same type (1 ms)*/

// Do not edit below this line
module.exports = removeFromArray;
