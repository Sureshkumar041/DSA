function countNegative(arr) {
    let count = 0
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element < 0) {
            count++;
        }
    }
    return count
}

let arr = [3, 4, -6, 1, -2]

console.log(countNegative(arr)) // 1
