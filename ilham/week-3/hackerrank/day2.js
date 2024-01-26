// Function to read input line by line
function readLine() {
    return inputString[currentLine++];
}

// Function to solve the problem
function solve(meal_cost, tip_percent, tax_percent) {
    let total_cost;
    total_cost = meal_cost + meal_cost * (tip_percent / 100) + meal_cost * (tax_percent / 100);
    
    console.log(Math.round(total_cost));
}

// Main function to read input and call solve function
function main() {
    const meal_cost = parseFloat(readLine().trim());
    const tip_percent = parseInt(readLine().trim(), 10);
    const tax_percent = parseInt(readLine().trim(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}

// Sample input for testing
var inputString = ["12.00", "20", "8"];

// Set initial line for testing
var currentLine = 0;

// Run the main function
main();
