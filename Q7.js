/* Q6. The Pluralizer
Write a function named pluralize that: takes 2 arguments, a noun and a number. returns the number and pluralized form, like "5 cats" or "1 dog".
For example:
pluralize('cat', 1) // Outputs: 1 cat
pluralize('cat', 2) // Outputs: 2 cats
*/

"use strict";

function pluralize(noun, number){
    if(number > 1) {
        noun = noun+'s';
    }
    return(number+" "+noun);
}

let output = pluralize('cat', 3);
console.log(output);
