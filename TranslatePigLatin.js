/*

Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.

translatePigLatin("california") == "aliforniacay".
translatePigLatin("paragraphs") == "aragraphspay".
translatePigLatin("glove") == "oveglay"
*/


function translatePigLatin(str) {

    var cmpt = 0;
    var letter = '';
    var newtab = str.split("");
    var tab = ["a", "e", "i", "y", "o", "u"];

    if (tab.indexOf(str.substr(0, 1)) !== -1) {
        str += 'way';
        return str;
    }

    for (var i = 0; i < newtab.length; i++) {
        if (tab.indexOf(newtab[i]) !== -1) {
            i = newtab.length;
        } else {
            letter += newtab[i];
            cmpt++;
        }
    }

    return str.substr(cmpt, str.length) + letter + 'ay';
}