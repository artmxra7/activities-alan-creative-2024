<?php
function angkaPrima($angka) {
    // you can only write your code here!
    if($angka <= 1) {
        return false;
    }
    for($i = 2; $i < $angka; $i++) {
        if($angka % $i == 0) {
            return false;
        }
    }
    return true;
}
  
// TEST CASES
var_dump(angkaPrima(3)); // true
var_dump(angkaPrima(7)); // true
var_dump(angkaPrima(6)); // false
var_dump(angkaPrima(23)); // true
var_dump(angkaPrima(33)); // false
?>
