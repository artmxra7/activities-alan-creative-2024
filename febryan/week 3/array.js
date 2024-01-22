function dataHandling(input) {
    for (var i = 0; i < input.length; i++) {
        var data = input[i];

        console.log("Nomor ID:  " + data[0]);
        console.log("Nama Lengkap:  " + data[1]);
        console.log("TTL:  " + data[2] + " " + data[3]);
        console.log("Hobi:  " + data[4]);

        console.log("");
    }
}


var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];


dataHandling(input);
