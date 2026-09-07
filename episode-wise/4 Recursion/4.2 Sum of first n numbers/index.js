// Sum of First N Numbers:
function sum(n) {
    if (n == 0) return 0; // Base Case

    return n + sum(n - 1); // Recursive Case
};

console.log("sum(n): ", sum(5))