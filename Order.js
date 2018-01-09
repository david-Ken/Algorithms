/*
Your task is to sort a given string. Each word in the String will contain a single number. 
This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0)
If the input String is empty, return an empty String.
The words in the input String will only contain valid consecutive numbers.
For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

your_order("is2 Thi1s T4est 3a") return  "Thi1s is2 3a T4est"
*/


function order(words) {
    if (words) {
        var output = "";
        var tab = [];
        var regex = new RegExp(/\d/);
        words = words.split(" ");

        for (var i = 0; i < words.length; i++)
            tab.push((words[i].match(regex))[0]);

        tab = tab.sort();

        for (var i = 0; i < tab.length; i++) {
            for (var j = 0; j < tab.length; j++) {
                if (words[j].includes(tab[i])) {
                    output += words[j] + " ";
                }
            }
        }

        return output.trim();
    }
    return words;
}

/* refactoring 
function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  }    


  */