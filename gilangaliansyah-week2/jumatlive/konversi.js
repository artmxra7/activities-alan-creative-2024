function konversiMenit(menit) {
    // Menghitung jumlah jam dan sisa menit
    var jam = Math.floor(menit / 60);
    var sisaMenit = menit % 60;
  
    // Menambahkan nol di depan menit jika diperlukan
    if (sisaMenit < 10) {
      sisaMenit = "0" + sisaMenit;
    }
  
    // Menggabungkan jam dan menit dalam format yang diinginkan
    var hasil = jam + ":" + sisaMenit;
  
    return hasil;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
  