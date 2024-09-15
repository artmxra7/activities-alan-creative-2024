function processData(input) {
    // Split the input into an array of lines
    const lines = input.split('\n');

    // Get the number of test cases (first line)
    const t = parseInt(lines[0], 10);

    // Loop through each test case
    for (let i = 1; i <= t; i++) {
        // Get the current string
        const currentString = lines[i];

        // Initialize even and odd strings
        let evenChars = '';
        let oddChars = '';

        // Loop through each character of the string
        for (let j = 0; j < currentString.length; j++) {
            // Check if the index is even or odd
            if (j % 2 === 0) {
                evenChars += currentString[j];
            } else {
                oddChars += currentString[j];
            }
        }

        // Print the result in the specified format
        console.log(evenChars + ' ' + oddChars);
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
