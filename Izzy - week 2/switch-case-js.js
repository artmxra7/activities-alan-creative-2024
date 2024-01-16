var tahun = document.getElementById('tahun');
var bulan = document.getElementById('bulan');
var tanggal = document.getElementById('hari');
const cl = (dat) => console.log(dat);

var tahunSekarang = 2200

for (var i = tahunSekarang; i >= tahunSekarang - 300; i--) {
  var option = document.createElement('option');
  option.value = i;
  option.text = i;
  tahun.appendChild(option);
}

for (var i = 1; i <= 12; i++) {
  var option = document.createElement('option');
  option.value = i;
  option.text = i;
  bulan.appendChild(option);
}

function updateTanggal() {
  var tahunVal = tahun.value;
  var bulanVal = bulan.value;
  tanggal.innerHTML = "<option value='' selected disabled>DD</option>";

  if (tahunVal && bulanVal) {
    var jumlahHari;

    if (bulanVal === '2') {
      if ((tahunVal % 4 === 0 && tahunVal % 100 !== 0) || tahunVal % 400 === 0) {
        jumlahHari = 29;
      } else {
        jumlahHari = 28;
      }
    } else if (bulanVal === '4' || bulanVal === '6' || bulanVal === '9' || bulanVal === '11') {
      jumlahHari = 30;
    } else {
      jumlahHari = 31;
    }

    for (var i = 1; i <= jumlahHari; i++) {
      var option = document.createElement('option');
      option.value = i;
      option.text = i;
      tanggal.appendChild(option);
    }
  }
}

tahun.addEventListener('change', updateTanggal);
bulan.addEventListener('change', updateTanggal);

updateTanggal();

const answer = () => {
    const answer = document.getElementById('answer');
    const container = document.getElementById('container');
    const SContainer = document.getElementById('SContainer');
    const body = document.getElementById('body');
    const button = document.getElementById('button');
    var BulanConvert;

    if(!bulan.value) {
        answer.style.display = 'block';
        answer.style.color = 'red';
        answer.innerHTML = 'Pilih Bulan';
        return;
    }else if(!tahun.value) {
        answer.style.display = 'block';
        answer.style.color = 'red';
        answer.innerHTML = 'Pilih Tahun';
        return;
    }else if(!tanggal.value) {
        answer.style.display = 'block';
        answer.style.color = 'red';
        answer.innerHTML = 'Pilih Tanggal';
        return;
    }

    container.style.animation = 'hideDiv 0.75s ease-in-out';
    body.style.animation = 'normalBody 0.75s ease-in-out';

    setTimeout(() => {
    SContainer.style.display = 'none';
    button.style.display = 'none';
    }, 750)

    switch (bulan.value) {
        case '1':
            BulanConvert = 'Januari';
            break;
        case '2':
            BulanConvert = 'Februari';
            break;
        case '3':
            BulanConvert = 'Maret';
            break;
        case '4':
            BulanConvert = 'April';
            break;
        case '5':
            BulanConvert = 'Mei';
            break;
        case '6':
            BulanConvert = 'Juni';
            break;
        case '7':
            BulanConvert = 'Juli';
            break;
        case '8':
            BulanConvert = 'Agustus';
            break;
        case '9':
            BulanConvert = 'September';
            break;
        case '10':
            BulanConvert = 'Oktober';
            break;
        case '11':
            BulanConvert = 'November';
            break;
        case '12':
            BulanConvert = 'Desember';
            break;
        default:
            BulanConvert = 'Tidak Valid';
            break;
    }

    console.log(BulanConvert);
    answer.innerHTML = tanggal.value + '  ' + BulanConvert + '  ' + tahun.value ;

    setTimeout(() => {
    container.style.animation = 'showDiv 0.75s ease-in-out';
    body.style.animation = 'centerBody 1s ease-in-out';  
    answer.style.display = 'block';  

    },750);
}