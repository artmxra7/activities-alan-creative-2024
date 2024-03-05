function xo(str) {
    // Menghitung jumlah karakter 'x' dan 'o' dalam string
    var countX = 0;
    var countO = 0;
  
    for (var i = 0; i < str.length; i++) {
      if (str[i] === 'x') {
        countX++;
      } else if (str[i] === 'o') {
        countO++;
      }
    }   
  
    // Cetak jumlah 'x' dan 'o' di console
    console.log('Jumlah karakter x: ' + countX);
    console.log('Jumlah karakter o: ' + countO);
  
    // Membandingkan jumlah 'x' dan 'o'
    return countX === countO;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
  