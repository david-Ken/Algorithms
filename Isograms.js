/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false 
*/

function isIsogram(str) {

    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        var letter = str.charAt(i);
        if (str.indexOf(letter) !== str.lastIndexOf(letter)) {
            return false;
        }
    }
    return true
}