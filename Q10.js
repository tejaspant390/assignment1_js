/*
Q9. check whether a number (entered by the user) is a perfect number or not.
A perfect number, a positive integer that is equal to the sum of its proper divisors. The smallest perfect number is 6, which is the sum of 1, 2, and 3.
Input: 6
Proper divisors of 6 are: 1, 2 and 3
Sum of proper divisors = (1 + 2 + 3) which is equal to 6 (our input)
Hence, 6 is perfect number 
*/

"use strict";

function perfnum(n){
    let i = 0;
    let each = 0;
    let sum = 0;
    var divisors = [];
    for(i = 0; i < n; i++){
        if(n % i == 0){
            divisors.push(i);
        }
    }
    console.log("Proper divisors of ",n," are: ",divisors);
    for(each in divisors){
        sum += divisors[each];
    }
    if(sum == n){
        return 1;
    }
    else{
        return 0;
    }

}

var num = prompt("Enter a number:");
if(perfnum(num) == 1){
    console.log("It is a perfect number");   
}
else{
    console.log("It's not a perfect number");
}
