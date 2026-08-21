
function palindrome(num) {

    if (num < 0) return false

    let rev = 0, originalNum = num;

    while (num > 0) {
        let rem = num % 10
        rev = (10 * rev) + rem
        num = Math.floor(num / 10)
    }

    console.log("rev: ", rev)

    if (originalNum === rev) { return true }
    else { return false }
}

console.log("palindrome: ", palindrome(3443))