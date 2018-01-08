/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) == [1, 3, 2, 5, 4].

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) == [1, 3, 2, [5], [4]].

uniteUnique([1, 2, 3], [5, 2, 1]) == [1, 2, 3, 5].

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])== [1, 2, 3, 5, 4, 6, 7, 8].
*/


function uniteUnique(arr) {
    var args = Array.from(arguments);
    var newarr = [],
        lastarr = [];

    for (var i = 0; i < args.length; i++) {
        newarr = newarr.concat(args[i]);
    }

    lastarr.push(newarr[0]);
    for (var j = 0; j < newarr.length; j++) {
        if (lastarr.includes(newarr[j]) === false) {
            lastarr.push(newarr[j]);
        }
    }
    return lastarr;
}