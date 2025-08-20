// You are given an array A consisting of an odd number of integers.
//     Each element of the array can be paired with another element that has the same value, except for one element that occurs odd number of times (once, three times, etc.).
//     Write a function in Node.js that finds and returns the value of that unpaired element



function findUnpaired(A) {
    let result = 0;
    for (let num of A) {
        result ^= num;  //XOR each number
    }
    return result;
}

console.log(findUnpaired([9, 3, 9, 3, 9, 7, 9])); 