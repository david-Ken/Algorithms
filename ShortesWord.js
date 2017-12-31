/* 
x Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.

findShort("bitcoin take over the world maybe who knows perhaps")== 3
findShort("turns out random test cases are easier than writing out basic ones") == 3
*/

function findShort(input) {

    input = (input.replace(/\s+/g, ' ')).split(' ');
    var result = input[0].length;

    for (var i = 1; i < input.length; i++) {
        if (input[i].length < result) {
            result = input[i].length;
        }
    }
    return result;
}