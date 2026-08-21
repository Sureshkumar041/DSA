
function findDigit(n) {

    n = Math.abs(n)
    if (Math.abs(n) === 0) return 1

    let count = 0
    while (n > 0) {
        n = Math.floor(n / 10)
        count++
    }

    return count
}

console.log(findDigit(-1889))