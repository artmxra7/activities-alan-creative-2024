function palindrome(kata){
  const sapubersih = kata.replace(/ /g,'').toLowerCase();
  return kata === sapubersih.split('').reverse().join('');
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
