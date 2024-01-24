function tentukanDeretAritmatika(isi) {

    const selisih = isi[1] - isi[0];
  

    for (let i = 2; i < isi.length; i++) {
      if (isi[i] - isi[i - 1] !== selisih) {
        return false;
      }
    }
  
    return true;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 9])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 7])); // false
  console.log(tentukanDeretAritmatika([5, 10, 15, 20])); // true
  