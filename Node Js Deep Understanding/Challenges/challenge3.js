function findUnpaired(A) {
    let result = 0;
    for (let num of A) {
        result ^= num;  //XOR each number
    }
    return result;
}

console.log(findUnpaired([9, 3, 9, 3, 9, 7, 9])); 