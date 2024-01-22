function palindrome(kata) {
    var balik = '';
    for (var i = kata.length - 1; i >= 0; i--) {
      balik += kata[i];
    }
    if (kata === balik) {
      return true;
    }
    return false;
  }
  
  console.log(palindrome('katak')); 
  console.log(palindrome('blanket'));
  console.log(palindrome('civic')); 
  console.log(palindrome('kasur rusak')); 
  console.log(palindrome('mister'));