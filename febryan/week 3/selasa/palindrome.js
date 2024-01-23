function palindrome(kata) {
    kata = kata.toLowerCase().replace(/\s/g, '');
    var reversedkata = kata.split('').reverse().join('');
    return kata === reversedkata;

}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
