<?php
    function cuciPakaian($jumlahPakaian, $inputJumlahPakaian) {
        $totalPakaian = $jumlahPakaian + $inputJumlahPakaian;
        $response = array();

        if ($totalPakaian < 20) {
            $response['peringatanKurang'] = "Baju kurang, tolong masukkan baju lagi.";
            $response['peringatanSukses'] = "";
        } else if ($totalPakaian === 20) {
            $response['jumlahPakaian'] = $totalPakaian;
            $response['inputJumlahPakaian'] = "";
            $response['peringatanKurang'] = "";
            $response['peringatanSukses'] = "Pakaian berhasil dicuci. Mesin cuci dinyalakan!";
            $response['hidupkanMesinCuci'] = true;
        } else {
            $response['jumlahPakaian'] = $totalPakaian;
            $response['inputJumlahPakaian'] = "";
            $response['peringatanKurang'] = "";
            $response['peringatanSukses'] = "";
            $response['consoleLog'] = "Jumlah pakaian lebih dari 20.";
        }

        return $response;
    }

    function hidupkanMesinCuci() {
        return "Mesin cuci dinyalakan!";
    }

    // Initializations
    $jumlahPakaian = 0;
    $inputJumlahPakaian = "";
    $peringatanKurang = "";
    $peringatanSukses = "";

    // Handle form submission
    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["cuciPakaian"])) {
        $inputJumlahPakaian = isset($_POST["inputJumlahPakaian"]) ? intval($_POST["inputJumlahPakaian"]) : 0;

        $response = cuciPakaian($jumlahPakaian, $inputJumlahPakaian);

        if (isset($response['jumlahPakaian'])) {
            $jumlahPakaian = $response['jumlahPakaian'];
        }
        $inputJumlahPakaian = isset($response['inputJumlahPakaian']) ? $response['inputJumlahPakaian'] : $inputJumlahPakaian;
        $peringatanKurang = isset($response['peringatanKurang']) ? $response['peringatanKurang'] : $peringatanKurang;
        $peringatanSukses = isset($response['peringatanSukses']) ? $response['peringatanSukses'] : $peringatanSukses;
        if (isset($response['hidupkanMesinCuci']) && $response['hidupkanMesinCuci']) {
            $pesanMesinCuci = hidupkanMesinCuci();
        }
    }
?>

<!DOCTYPE html>
<html lang="en">



<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laundry</title>
    
</head>

<body>

    <div>

        <h1>Laundry</h1>

        <p>Welcome selamat datang</p>

        <form action="" method="post">
            <label>
                <input
                    type="number"
                    name="inputJumlahPakaian"
                    placeholder="Masukkan jumlah pakaian"
                    value="<?php echo htmlspecialchars($inputJumlahPakaian); ?>"
                />
            </label>
            <div>
                <button  type="submit" name="cuciPakaian">
                    Cuci Pakaian
                </button>
            </div>
        </form>

        <p style="color: #e74c3c; margin-top: 10px;"><?php echo htmlspecialchars($peringatanKurang); ?></p>
        <p style="color: #2ecc71; margin-top: 10px;"><?php echo htmlspecialchars($peringatanSukses); ?></p>

        <?php if (isset($pesanMesinCuci)) : ?>
            <p><?php echo htmlspecialchars($pesanMesinCuci); ?></p>
        <?php endif; ?>

    </div>

</body>

</html>