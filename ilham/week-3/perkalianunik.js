function perkalianUnik(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let product = 1;
  
      // Menghitung hasil kali semua elemen kecuali elemen pada indeks ke-i
      for (let j = 0; j < arr.length; j++) {
        if (j !== i) {
          product *= arr[j];
        }
      }
  
      // Menyimpan hasil kali ke dalam array hasil
      result.push(product);
    }
  
    return result;
  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); 
  console.log(perkalianUnik([1, 2, 3, 4, 5])); 
  console.log(perkalianUnik([1, 4, 3, 2, 5]));
  console.log(perkalianUnik([1, 3, 3, 1])); 
  console.log(perkalianUnik([2, 1, 8, 10, 2]));
  