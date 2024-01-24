function cariMean(isi) {

    const sum = isi.reduce((acc, num) => acc + num, 0);
    const mean = sum / isi.length;
  
    const roundedMean = Math.ceil(mean);
  
    return roundedMean;
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7
  