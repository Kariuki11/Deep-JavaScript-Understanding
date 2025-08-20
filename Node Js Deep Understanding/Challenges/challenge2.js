// Cyclic Rotation


// Problem Statement

// Write a function in Node.js that:
// Takes in an array of integers A and an integer K.
// Rotates the array A, K times to the right.
// Returns the rotated array.

function cyclicRotation(A, K) {
    let N = A.length;
    if (N === 0) return A //Takes care of an empty array.

    K = K % N; 

    return A.slice(N - K).concat(A.slice(0, N - K));
}

console.log(cyclicRotation([3, 8, 9, 7, 6], 3));