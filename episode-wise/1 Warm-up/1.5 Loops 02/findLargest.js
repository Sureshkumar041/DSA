function findLargest(arr) {
    // let max = arr.length ? arr[0] : null;
    let largest = -Infinity
    for (let index = 0; index < arr.length; index++) {
        if (largest < arr[index]) {
            largest = arr[index]
        }
    }
    return largest
}

let arr = [53, 4, -6, 33, 1, -2, 17]

console.log(findLargest(arr)) 

// To do - Find second largest Number
