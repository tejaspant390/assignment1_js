/* Q4. The MixUP
Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
mixUp('mix', 'pod'); // Outputs: 'pox mid'
mixUp('dog', 'dinner'); // Outputs:  'dig donner' */

"use strict";

function mixUp(str1, str2)
{
    let str3 = str2.slice(0, 2) + str1.slice(2);
    let str4 = str1.slice(0, 2) + str2.slice(2);
    return(str3+" "+str4);
}

let output = mixUp('dog', 'dinner');
console.log(output);
