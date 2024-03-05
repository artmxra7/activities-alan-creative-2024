function angkaPalindrome(num) {
    // Helper function to check if a number is a palindrome
    function isPalindrome(number) {
      const strNum = String(number);
      return strNum === strNum.split('').reverse().join('');
    }
  
    // Check if the given number is already a palindrome
    if (isPalindrome(num)) {
      num++;
    }
  
    // Find the next palindrome number
    while (!isPalindrome(num)) {
      num++;
    }
  
    return num;
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); 
  console.log(angkaPalindrome(10)); 
  console.log(angkaPalindrome(117)); 
  console.log(angkaPalindrome(175)); 
  console.log(angkaPalindrome(1000));
  