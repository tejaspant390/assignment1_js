/*
Q1. Want to find out how old you'll be? Calculate it!

Store your birth year in a variable.
Store a future year in a variable.
Calculate your 2 possible ages for that year based on the stored values. For example, if you were born in 1988,
then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.
 */
var birthy = 1998;
var futurey = 2058;

const g = (a=0,b=0) =>b-a;
const h = (a=0,b=0)=>b-a+1;

console.log("I will be either "+ g(birthy,futurey) + " or "+ h(birthy,futurey) + " in 2058");
