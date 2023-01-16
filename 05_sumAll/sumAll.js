/*Implement a function that takes 2 integers and returns 
the sum of every number between(and including) them:

sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

Hints
Think about how you would do this on pen and paper and 
then how you might translate that process into code:

make sure you pay attention to the function parameters
create a variable to hold the final sum
loop through the given numbers (link)
on each iteration add the number to the sum
return the sum after finishing the loop*/


const sumAll = function sumTotal(x, y) {

    if ((typeof x !== 'number') || (typeof y !== 'number')){
        return "ERROR";
    }

    if((x < 0) || (y<0)){
        return "ERROR";
    }
     
    if (x>y){
        let temp = y;
        y = x;
        x = temp;
    }

    let sum = 0;
    for (let i = x; i < y + 1; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
