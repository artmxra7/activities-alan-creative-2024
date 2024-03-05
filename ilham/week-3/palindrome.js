function palindrome(kata) {
    // Remove spaces and convert to lowercase for accurate palindrome check
    const cleanedString = kata.replace(/\s/g, '').toLowerCase();
    
    // Compare the original string with its reverse
    return cleanedString === cleanedString.split('').reverse().join('');
  }
  
  // TEST CASES
  console.log(palindrome('katak')); 
  console.log(palindrome('blanket')); 
  console.log(palindrome('civic')); 
  console.log(palindrome('kasur rusak'));
  console.log(palindrome('mister')); 
  