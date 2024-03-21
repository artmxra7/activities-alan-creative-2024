function targetTerdekat(arr) {
    const oIndex = arr.indexOf('o');
  
    if (oIndex === -1) {
      return 0; 
    }
  
    const xIndices = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'x') {
        xIndices.push(i);
      }
    }
  
    let minDistance = Infinity;
    for (const xIndex of xIndices) {
      const distance = Math.abs(oIndex - xIndex);
      if (distance < minDistance) {
        minDistance = distance;
      }
    }

  
    return minDistance === Infinity ? 0 : minDistance;
}

  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2