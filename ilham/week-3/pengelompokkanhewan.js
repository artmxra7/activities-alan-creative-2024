function groupAnimals(animals) {
    // Inisialisasi objek untuk menyimpan hewan-hewan berdasarkan huruf pertama
    let animalGroups = {};
  
    // Iterasi melalui setiap hewan dalam array input
    for (let i = 0; i < animals.length; i++) {
      let animal = animals[i];
      let firstChar = animal[0];
  
      // Jika huruf pertama belum ada dalam objek, buat array baru
      if (!animalGroups[firstChar]) {
        animalGroups[firstChar] = [];
      }
      animalGroups[firstChar].push(animal);
    }
  
    // Mengonversi objek menjadi array multidimensi
    let result = Object.values(animalGroups);
  
    // Mengurutkan array hasil berdasarkan huruf pertama
    result.sort((a, b) => a[0][0].localeCompare(b[0][0]));
  
    return result;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
  