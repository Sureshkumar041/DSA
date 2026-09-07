// Sum of all numbers in Array
function sumofAllNumArr(n) {
    let isOdd = arr[n] % 2 !== 0 ? arr[n] : 0;
    if (n === 0) {
        return isOdd;
    }

    return isOdd + sumofAllNumArr(n - 1);
};

let arr = [5, 3, 2, 0, 1], n = arr.length - 1;

console.log("sumofAllNumArr: ", sumofAllNumArr(n));