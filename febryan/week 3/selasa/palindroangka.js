function angkaPalindrome(angka) {
    function isPalindrome(num) {
        var strNum = num.toString();
        return strNum === strNum.split('').reverse().join('');
    }
    function findNexpalindrome(num) {
        while (!isPalindrome(num)) {
            num++;
        }
        return num;
    }
    return findNexpalindrome(angka + 1)
}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001