var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]


function dataHandling(input){
    var i = 0;
    var result = "";
    for(i = 0; i < input.length; i++){
        result += 
        `
Nomor ID : ${input[i][0]}
Nama Lengkap : ${input[i][1]}
TTL : ${input[i][2]+" "+input[i][3]}
Hobi : ${input[i][4]}
\n
        `
    }

    return result
}

console.log(dataHandling(input))