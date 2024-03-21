function Balikkata(kata){
    var reverseString = kata.split('').reverse().join('');
    var resp1 = document.getElementById('resp1');
    resp1.innerHTML = reverseString   
}

function BandingkanAngka(Angka1, Angka2){
    var resp2 = document.getElementById('resp2');
    var result = '';
    Angka1 < Angka2 ? result = 'True' : Angka1 > Angka2 ? result = 'False' : result = '-1';
    resp2.innerHTML = result
}

function konversiMenit(detik){
    const resp3 = document.getElementById('resp3');
    const menit = Math.floor(detik / 60);
    const sisadetik = detik % 60;
    const formatdetik = sisadetik.toString().padStart(2, '0');
    resp3.innerHTML = `${menit} : ${formatdetik}`;
}

function XdanO(word){
    const resp4 = document.getElementById('resp4');
    const X = word.split('').filter(x => x.toLowerCase() === 'x').join('');
    const O = word.split('').filter(x => x.toLowerCase() === 'o').join('');
    resp4.innerHTML = X.length === O.length ? 'True' : 'False';
}