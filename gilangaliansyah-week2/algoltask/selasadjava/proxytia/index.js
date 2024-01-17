var nama;
var peran;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('------------Siapa nama kamu : ', (nama) => {
    rl.question('------------Siapa peranmu   : ' , (peran) => {
        if (nama === '') {
            console.log('Nama kamu siapa?');
        } else {
            if (peran === '') {
                console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
            } else if (peran === 'Ksatria') {
                console.log('-----------Selamat datang di Dunia Proxytia, ' + nama + '----------');
                console.log('-Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!-');
            } else if (peran === 'Tabib') {
                console.log('-----------Selamat datang di Dunia Proxytia, ' + nama + '----------');
                console.log('-Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.-');
            } else if (peran === 'Penyihir') {
                console.log('-----------Selamat datang di Dunia Proxytia, ' + nama + '----------');
                console.log('-Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!-');
            } else {
                console.log(nama + ' Peran yang dimasukkan tidak valid. Pilih antara Ksatria, Tabib, atau penyihir.');
            }
        }
        rl.close();
    });
});
