/*
Q2. Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
 */
 
"use strict";
const PI = 3.14;

function Circle(radius) {

let c = 2 * PI * radius;
console.log("The circumference is " + c);
let a = PI * radius * radius;
console.log("The area is " + a);
}
Circle(7);
