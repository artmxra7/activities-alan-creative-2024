// Perulangan 1-100 pakai pertambahan 1
 for (let counter = 1; counter <= 100; counter++) {
    // Cek apakah angka genap atau ganjil
    if (counter % 2 === 0) {
      console.log(counter + " GENAP ");
    } else {
      console.log(counter + " GANJIL ");
    }
  }

  console.log();
  
  // Perulangan pakai pertambahan 2
  for (let counter = 1; counter <= 100; counter += 2) {
    // Cek kelipatan 3
    if (counter % 3 === 0) {
      console.log(counter + " KELIPATAN 3");
    }
  }

  console.log();
  
  // Perulangan pakai pertambahan 5
  for (let counter = 1; counter <= 100; counter += 5) {
    // Cek kelipatan 6
    if (counter % 6 === 0) {
      console.log(counter + " KELIPATAN 6");
    }
  }

  console.log();
  
  // Perulangan pakai pertambahan 9
  for (let counter = 1; counter <= 100; counter += 9) {
    // Cek kelipatan 10
    if (counter % 10 === 0) {
      console.log(counter + " KELIPATAN 10");
    }
  }
  