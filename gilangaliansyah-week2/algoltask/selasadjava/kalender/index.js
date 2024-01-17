var tanggal;
var bulan;
var tahun;
var bulanText;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan tanggal: ', (inputTgl) => {
    tanggal = parseInt(inputTgl);
    if (tanggal < 1 || tanggal > 31) {
        console.log('Tanggal tidak valid');
        rl.close();
        return;
    }

    rl.question('Masukkan bulan (1-12): ', (inputBulan) => {
        bulan = parseInt(inputBulan);

        rl.question('Masukkan tahun: ', (inputTahun) => {
            tahun = parseInt(inputTahun);
            if (tahun < 1900 || tahun > 2200) {
                console.log('Tahun tidak valid');
                rl.close();
                return;
            }
            
            switch (bulan) {
                case 1:
                    bulanText = 'Januari';
                    break;
                case 2:
                    bulanText = 'Februari';
                    break;
                case 3:
                    bulanText = 'Maret';
                    break;
                case 4:
                    bulanText = 'April';
                    break;
                case 5:
                    bulanText = 'Mei';
                    break;
                case 6:
                    bulanText = 'Juni';
                    break;
                case 7:
                    bulanText = 'Juli';
                    break;
                case 8:
                    bulanText = 'Agustus';
                    break;
                case 9:
                    bulanText = 'September';
                    break;
                case 10:
                    bulanText = 'Oktober';
                    break;
                case 11:
                    bulanText = 'November';
                    break;
                case 12:
                    bulanText = 'Desember';
                    break;
                default:
                    bulanText = 'Bulan tidak valid';
            }

            console.log(tanggal + ' ' + bulanText + ' ' + tahun);
            rl.close();
        });
    });
});
