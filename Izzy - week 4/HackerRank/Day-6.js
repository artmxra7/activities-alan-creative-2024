function processData(input) {
    // Split the input into an array of strings
    var inputArray = input.trim().split('\n');
    
    // Get the number of strings
    var numStrings = parseInt(inputArray[0]);
    
    // Iterate over each string
    for (var i = 1; i <= numStrings; i++) {
        var str = inputArray[i];
        var result = '';
        
        // Iterate over the characters of the string
        for (var j = 0; j < str.length; j += 2) {
            result += str[j];
        }
        
        // Output the result for this string
        console.log(result + ' ' + str.slice(1).split('').filter((char, index) => index % 2 === 0).join(''));
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
