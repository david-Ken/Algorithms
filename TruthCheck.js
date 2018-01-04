/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
Remember, you can access object properties through either dot notation or [] notation.

truthCheck([{"user": "Tinky-Winky","sex": "male"}, 
            {"user": "Dipsy", "sex": "male"}, 
            {"user": "Laa-Laa", "sex": "female"}, 
            {"user": "Po","sex": "female"}], "sex") 
    should return true.

truthCheck([{"single": ""}, {"single": "double"}],"single") 
            should return false

truthCheck([{"single": "double"}, 
            {"single": undefined}], "single") 
            should return false

truthCheck([{"single": "double"}, 
           {"single": NaN}], "single") 
           should return false
*/

function truthCheck(collection, pre) {
    var cmpt = 0;
    if (collection.length === 1)
        if (collection[0].hasOwnProperty(pre)) return true;

    for (var i = 0; i < collection.length; i++)
        if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) cmpt += 1;

    return cmpt === collection.length;
}