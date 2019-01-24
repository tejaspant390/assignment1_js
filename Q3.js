/* Q3. The Temperature Converter
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

"use strict";

var celsius = 38;
var fahren = (celsius * (9/5)) + 32;
console.log(celsius, "°C is ", fahren, "°F");

var celsius = (fahren - 32) * (5/9);
console.log(fahren, "°F is ", celsius, "°C");
