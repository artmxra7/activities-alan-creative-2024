function angkaPalindrome(num) {
    let reversed = +num.toString().split('').reverse().join('');
    return num === reversed ? num : angkaPalindrome(num + 1);
}
  
console.log(angkaPalindrome(8)); 
console.log(angkaPalindrome(10)); 
console.log(angkaPalindrome(117));
console.log(angkaPalindrome(175));
console.log(angkaPalindrome(1000));