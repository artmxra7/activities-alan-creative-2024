function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "

    // Sample input for testing
    var i2 = +(readLine());
    var d2 = +(readLine());
    var s2 = readLine();

    console.log(i + i2);
    console.log((d + d2).toFixed(1));
    console.log(s + s2);
}

// Sample input array for testing
var input_stdin_array = ["2", "2.5", "is awesome"];

// Set initial line for testing
var input_currentline = 0;

// Run the main function
main();
