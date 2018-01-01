/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items 
without any elements with the same value next to each other and preserving the original order of elements.

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/


var uniqueInOrder = function (iterable) {
    var array = Array.isArray(iterable) ? iterable : (iterable.replace(/\s/g, '')).split('');
    var result = [];

    for (var i = 0; i < array.length; i++) {
        if (result[result.length - 1] !== array[i]) {
            result.push(array[i]);
        }
    }

    return result;
}