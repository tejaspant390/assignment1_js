/* Q8. Find the length of the string (entered by the user) without using the built-in function.
Following is the example of output:
Input string: javascript
Output: Length of string: 10 */

function strLength(s)
{
    var length = 0;
    while(s[length] != undefined)
    {
        length++;
    }
    return length;
}

var name = prompt("Input string: ");
console.log("Length of String: ",strLength(name));
