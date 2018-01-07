/*Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, one and itself. 
For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.

sumPrimes(10) should return  a number.
sumPrimes(10) == 17.
sumPrimes(977) == 73156.

*/


function sumPrimes(num) {

    function is_Prime(n) {

        if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
        if (n % 2 === 0) return (n == 2);
        if (n % 3 === 0) return (n == 3);

        var m = Math.sqrt(n);

        for (var i = 5; i <= m; i += 6) {
            if (n % i === 0) return false;
            if (n % (i + 2) === 0) return false;
        }
        return true;
    }

    var tab = [];
    for (var j = 0; j <= num; j++) {
        if (is_Prime(j)) tab.push(j);
    }

    return tab.reduce(function add(a, b) {
        return a + b;
    }, 0);
}