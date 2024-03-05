var rows3 = 5; // input the number of rows

// Looping untuk menampilkan asterisks dengan pola tertentu
for (var i = 1; i <= rows3; i++) {
  var asterisks = '';
  for (var j = 1; j <= i; j++) {
    asterisks += '*';
  }
  console.log(asterisks);
}
