function secondLargest(arr) {
    let largest = -Infinity, secondLar = -Infinity;

    if (arr.length < 2) return { secondLar: null }

    for (let index = 0; index < arr.length; index++) {
        if (largest < arr[index]) {
            secondLar = largest
            largest = arr[index]
        } else if (secondLar < arr[index] && largest !== arr[index]) {
            secondLar = arr[index]
        }
    }
    return { secondLar }
}

let arr = [3, 4, -6, 1, -2, 4]

console.log(secondLargest(arr)) // 1
