/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

convertToRoman(2) == "II".
convertToRoman(12) should return "XII".
convertToRoman(83) should return "LXXXIII".
convertToRoman(99) should return "XCIX".
convertToRoman(798) should return "DCCXCVIII".
convertToRoman(3999) should return "MMMCMXCIX".
*/

function convertToRoman(num) {

    var romanNumeralMap = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    };


    var result = '';
    for (var prop in romanNumeralMap) {
        while (num >= romanNumeralMap[prop]) {
            result += prop;
            num -= romanNumeralMap[prop];
        }

    }

    return result;
}