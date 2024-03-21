function groupAnimals(animals) {
    let dictionary = {};
   
    for (let animal of animals) {
       let firstChar = animal.charAt(0);
        if (!dictionary[firstChar]) {
            dictionary[firstChar] = [];
        }
        dictionary[firstChar].push(animal);
    }
   
    let groupedAnimals = Object.values(dictionary).sort();
   
    return groupedAnimals;
   }
   
   // TEST CASES
   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
   // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
   // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]