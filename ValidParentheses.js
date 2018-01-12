/*
Write a function called that takes a string of parentheses, and determines if the order of the 
parentheses is valid. The function should return true if the string is valid, and false if it's 
invalid.

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

You may assume that the input string will only contain opening and closing parenthesis and will not be an empty string.
It should work for random input too
*/

function validParentheses(parens) {
    var re = /\(\)/;
    while (re.test(parens)) parens = parens.replace(re, "");
    return !parens;
}