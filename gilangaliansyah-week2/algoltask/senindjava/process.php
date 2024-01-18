<?php
function washClothes($totalClothes) {
    echo "<h2 style='color: green;'>Washing $totalClothes clothes...</h2>";

    // Pseudocode untuk mencuci pakaian
    for ($i = 1; $i <= $totalClothes; $i++) {
        echo "Washing clothes $i...<br>";
        // Proses mencuci pakaian dapat ditambahkan di sini
    }

    echo "<h2 style='color: green;'>Washing complete!</h2>";
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $totalClothes = isset($_POST["totalClothes"]) ? $_POST["totalClothes"] : 0;

    if ($totalClothes < 20) {
        echo "<h2 style='color: red;'>Masukkan minimal 20 baju untuk memulai mencuci.</h2>";
        for ($i = 1; $i <= $totalClothes; $i++) {
            echo "gagal mencuci clothes $i...<br>";
            // Proses mencuci pakaian dapat ditambahkan di sini
        }
        echo "<h2 style='color: red;'>gagal mencuci!</h2>";
    } elseif ($totalClothes > 20) {
        echo "<h2 style='color: red;'>Jumlah pakaian melebihi 20.</h2>";
        
        // Proses lain jika jumlah pakaian lebih dari 20 dapat ditambahkan di sini
    } else {
        washClothes($totalClothes);
    }
} else {
    echo "Invalid request.";
}
?>
