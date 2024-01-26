function mengelompokkanAngka(arr) {
    // Inisialisasi array multidimensi
    let result = [[], [], []];
  
    // Iterasi melalui setiap angka dalam array input
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
  
      // Kelompokkan angka ke dalam kategori yang sesuai
      if (num % 3 === 0) {
        result[2].push(num); 
      } else if (num % 2 === 0) {
        result[0].push(num); // Angka kelipatan 3
      } else {
        result[1].push(num); // Angka ganjil
      }
    }
  
    return result;
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]
  