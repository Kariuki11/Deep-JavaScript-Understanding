// Find the smallest missing positive integer

            // Write a function in Node.js that:
            // Takes in an array of integers A (length N).
            // Returns the smallest positive integer (greater than 0) that does not occur in A.


// An array is a simple way to store multiple values in a single variable instead of declaring many variables separately.
// A function is a form of reusable code that performs a specific task.
// An integer is a whole number (Simply a number without a fractional part or even a decimal point)

function smallestMissingPositive(A) {
    const set = new Set(A.filter(num => num > 0));
    let N = A.length;

    for (let i = 1; i <= N + 1; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
}

console.log(smallestMissingPositive([1, 4, 3]));


// .filter is an array method that creates a new array containing elements that pass a test (Condition).