function tentukanDeretAritmatika(arr) {
    // Menghitung selisih pertama dan menyimpannya dalam variable selisih
    let selisih = arr[1] - arr[0];
  
    // Iterasi melalui array untuk memeriksa selisih antar angka
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] !== selisih) {
        return false; // Jika selisih tidak konsisten, mengembalikan false
      }
    }
  
    return true; // Jika selisih konsisten untuk setiap pasangan angka, mengembalikan true
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
  