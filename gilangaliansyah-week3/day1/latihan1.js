var isi = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling(isi) {
    for (var i = 0; i < isi.length; i++) {
      var dataanggota = isi[i];
  
      console.log("Nomor ID:  " + dataanggota[0]);
      console.log("Nama Lengkap:  " + dataanggota[1]);
      console.log("TTL:  " + dataanggota[2] + " " + dataanggota[3]);
      console.log("Hobi:  " + dataanggota[4]);
      console.log();
    }
}

console.log(dataHandling(isi));