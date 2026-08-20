function searchElement(arr, num) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element === num) {
            return index
        }
    }
    return -1
}

let arr = [3, 4, 6, 1, 2]

console.log(searchElement(arr, 4)) // 1
console.log(searchElement(arr, 3)) // 0
console.log(searchElement(arr, 1)) // 3
console.log(searchElement(arr, 10)) // -1