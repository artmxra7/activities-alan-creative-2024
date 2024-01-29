function box(isi) {
    let wadah = [[], [], []];

    for (let i = 0; i < isi.length; i++) {
        let kemasan = isi[i];

        if (kemasan % 3 === 0) {
            wadah[2].push(kemasan);
        } else if (kemasan % 2 === 0) {
            wadah[0].push(kemasan);
        } else {
            wadah[1].push(kemasan);
        }
    }

    return wadah;
}

console.log(box([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(box([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(box([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(box([])); // [ [], [], [] ]
