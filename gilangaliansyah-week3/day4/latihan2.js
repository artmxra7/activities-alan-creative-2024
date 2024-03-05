function kriteria(binatang){
    let kandang =  {};
    for (let i = 0; i < binatang.length; i++){
        let hewan = binatang[i];
        let katapertama = hewan[0];
        if (!kandang[katapertama]){
            kandang[katapertama] = [];
        }
        kandang[katapertama].push(hewan);
    }
    let kuncikandang = Object.values(kandang).sort();

    return kuncikandang;
}

// TEST CASES
console.log(kriteria(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(kriteria(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]