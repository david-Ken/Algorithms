/*
Given an array of integers, remove the smallest value.Do not mutate the original array/list. 
If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
*/

function removeSmallest(numbers) {
    var temp = numbers[0];
    
    var index = numbers.length;
    
   for( var i=0 ; i <numbers.length; i++){
        if(numbers[i] <=temp){
          temp = numbers[i];
        }
    }
  
    numbers.splice(numbers.indexOf(temp), 1);
    return numbers;
  }
