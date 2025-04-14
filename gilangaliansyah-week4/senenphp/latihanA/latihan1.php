<?php
    // Fungsi untuk mengecek apakah angka prima atau bukan
    function angkaPrima($angka) {
      if ($angka <= 1) {
        return false;
      }
      for ($i = 2; $i < $angka; $i++) {
        if ($angka % $i === 0) {
          return false;
        }
      }
      return true;
    }

    // Pengecekan saat formulir dikirimkan
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $inputAngka = $_POST["inputAngka"];
      
      if (angkaPrima($inputAngka)) {
        echo "<p>" . $inputAngka . " adalah bilangan prima.</p>";
      } else {
        echo "<p>" . $inputAngka . " bukan bilangan prima.</p>";
      }
    }
?>  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>angka prima</h2>
    <form method="post" action="">
        <label for="inputAngka">Masukkan angka</label>
        <input type="number" id="inputAngka" name="inputAngka" required>
        <button type="submit">cek angka</button>
    </form>
</body>
</html>
