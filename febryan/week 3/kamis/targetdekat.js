function targetTerdekat(arr) {
    let oIndex = arr.indexOf('o');

    if (oIndex === -1) {
        return 0;
    }

    let leftXIndex = arr.lastIndexOf('x', oIndex);
    let rightXIndex = arr.indexOf('x', oIndex);

    let leftDistance = leftXIndex !== -1 ? oIndex - leftXIndex : Infinity;
    let rightDistance = rightXIndex !== -1 ? rightXIndex - oIndex : Infinity;

    if (leftXIndex === -1 && rightXIndex === -1) {
        return 0;
    }

    return Math.min(leftDistance, rightDistance);
}


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
