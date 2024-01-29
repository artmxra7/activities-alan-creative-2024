<?php

function angkaPrima($angka)
{
    // Bilangan prima harus lebih besar dari 1
    if ($angka <= 1) {
        return false;
    }

    // Loop dari 2 hingga akar kuadrat dari angka
    for ($i = 2; $i <= sqrt($angka); $i++) {
        // Jika angka dapat dibagi habis oleh $i, maka bukan bilangan prima
        if ($angka % $i === 0) {
            return false;
        }
    }

    // Jika tidak ada pembagi selain 1 dan angka itu sendiri, maka bilangan prima
    return true;
}

// TEST CASES
var_dump(angkaPrima(3)); // true
var_dump(angkaPrima(7)); // true
var_dump(angkaPrima(6)); // false
var_dump(angkaPrima(23)); // true
var_dump(angkaPrima(33)); // false
