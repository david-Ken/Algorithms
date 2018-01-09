/*
Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching property and 
value pairs (second argument). Each property and value pair of the source
object has to be present in the object from the collection if it is to be included in the returned 
 array.

whatIsInAName([{ first: "Romeo", last: "Montague" }, 
               { first: "Mercutio", last: null }, 
               { first: "Tybalt", last: "Capulet" }], 
               { last: "Capulet" })];

               should return [{ first: "Tybalt", last: "Capulet" }]

whatIsInAName([{ "a": 1, "b": 2 }, 
               { "a": 1 }, 
               { "a": 1, "b": 2, "c": 2 }], 
               { "a": 1, "c": 2 })]
               
               should return [{ "a": 1, "b": 2, "c": 2 }]               
*/
function whatIsInAName(collection, source) {

    var arr = [],
        tab = [];
    var prop = Object.keys(source);
    var getSource = source[Object.keys(source)];

    if (prop.length === 1) {

        for (var i = 0; i < collection.length; i++) {
            var element = collection[i];
            if (element[prop] === getSource) arr.push(element);
        }
        return arr;
    }

    for (var j = 0; j < collection.length; j++) {
        var get = collection[j];
        if ((get[prop[0]] === source[prop[0]]) &&
            (get[prop[1]] === source[prop[1]])) tab.push(get);

    }
    return tab;
}