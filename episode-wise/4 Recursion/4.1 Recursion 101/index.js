// Recursion

console.log("Recursion");

let n = 5;
function getPrint(num) {

    if (num == 0) return;

    console.log(num);
    getPrint(--num);
}

getPrint(10)