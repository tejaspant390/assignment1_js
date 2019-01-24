/*
Q4. The Calculator

Write a function that will take one argument (a number) and perform the following operations:
Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
 */
function theCalculator(number = 1){
    var half = number/2
    var sq = half*half
    var area = 3.14*sq*sq
    return area
}
console.log(theCalculator(10))
