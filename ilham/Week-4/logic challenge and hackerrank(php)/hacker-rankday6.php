<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $t = intval($_POST["test_cases"]);

    for ($i = 0; $i < $t; $i++) {
        $input = trim($_POST["input_$i"]);

        $even = '';
        $odd = '';

        for ($j = 0; $j < strlen($input); $j++) {
            if ($j % 2 == 0) {
                $even .= $input[$j];
            } else {
                $odd .= $input[$j];
            }
        }

        echo $even . ' ' . $odd . PHP_EOL;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String Splitter</title>
</head>
<body>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label for="test_cases">Enter the number of test cases:</label>
        <input type="text" name="test_cases" id="test_cases" required>
        <br>

        <?php
        for ($i = 0; $i < $t; $i++) {
            echo "<label for='input_$i'>Test Case $i:</label>";
            echo "<input type='text' name='input_$i' required><br>";
        }
        ?>

        <input type="submit" value="Submit">
    </form>
</body>
</html>
