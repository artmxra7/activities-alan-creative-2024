function balikKata(kata) {
    // Menggunakan metode split(), reverse(), dan join() untuk membalik kata
    var kataBalik = kata.split('').reverse().join('');
    
    return kataBalik;
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS

//   Mari kita bahas fungsi dari setiap langkah dalam baris kode tersebut:

// kata.split(''): Metode ini mengubah string kata menjadi array karakter. Dengan memberikan argumen berupa string kosong '' kepada metode split, kita memastikan bahwa setiap karakter dalam string menjadi elemen terpisah dalam array.

// .reverse(): Metode ini membalikkan urutan elemen dalam array. Sebagai contoh, jika awalnya array adalah ['H', 'e', 'l', 'l', 'o'], setelah menggunakan reverse(), menjadi ['o', 'l', 'l', 'e', 'H'].

// .join(''): Metode ini menggabungkan semua elemen dalam array menjadi sebuah string. Dengan memberikan argumen berupa string kosong '' kepada metode join, kita memastikan bahwa tidak ada karakter pemisah antara elemen-elemen yang digabungkan.

// Jadi, kombinasi dari ketiga metode tersebut, yaitu kata.split('').reverse().join(''), akan menghasilkan string yang merupakan versi terbalik dari string asal (kata).

// Dengan menggunakan metode-metode ini secara berurutan, kita dapat dengan cepat dan efisien membalikkan sebuah string dalam bahasa JavaScript.
  