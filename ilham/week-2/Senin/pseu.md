HTML:
- Buat struktur HTML dasar dengan formulir, input, tombol, dan kontainer untuk menampilkan hasil.

CSS:
- Gaya kontainer agar memiliki lebar maksimum dan tinggi opsional, dan pusatkan di tengah halaman.

JavaScript:
- Buat fungsi cekTahun() untuk menangani peristiwa klik tombol.
  - Ambil nilai yang dimasukkan dalam input.
  - Validasi bahwa input adalah nilai numerik positif.
  - Jika valid:
    - Panggil fungsi isLeapYear(year) untuk memeriksa apakah itu tahun kabisat.
    - Tampilkan sebuah peringatan dengan hasilnya.
  - Jika tidak valid, tampilkan sebuah peringatan meminta input yang valid.

Fungsi isLeapYear(tahun):
- Periksa apakah tahun tersebut dapat dibagi oleh 4 dan tidak dapat dibagi oleh 100, atau dapat dibagi oleh 400.
- Kembalikan true jika itu tahun kabisat, sebaliknya kembalikan false.
Deklarasi:
- yearToCheck: integer

Fungsi cekTahun():
    Baca yearToCheck dari input pengguna

    Jika isNumeric(yearToCheck) dan yearToCheck > 0:
        Jika isLeapYear(yearToCheck):
            Tampilkan pesan "Tahun kabisat" menggunakan notifikasi
        Else:
            Tampilkan pesan "Bukan tahun kabisat" menggunakan notifikasi
    Else:
        Tampilkan pesan "Masukkan tahun yang valid" menggunakan notifikasi

Fungsi isNumeric(value):
    Kembalikan true jika value merupakan nilai numerik, sebaliknya false

Fungsi isLeapYear(year):
    Kembalikan true jika (year mod 4 = 0 dan year mod 100 ≠ 0) atau (year mod 400 = 0), sebaliknya false
