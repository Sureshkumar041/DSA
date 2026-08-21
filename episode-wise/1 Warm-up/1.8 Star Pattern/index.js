let n0 = 4

console.log("Pattern 1")
for (let i = 0; i < n0; i++) {
    let row = "";
    for (let j = 0; j < n0; j++) {
        row = row + "*"
    }
    console.log(row)
}

console.log("\n")
// Output :-
// ****
// ****
// ****
// ****

console.log("Pattern 2")
for (let i = 0; i < n0; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
        row = row + "*"
    }
    console.log(row)
}

console.log("\n")
// Output :-
// *
// **
// ***
// ****

console.log("Pattern 3")
for (let i = 0; i < n0; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + (j + 1)
    }
    console.log(row)
}

console.log("\n")
// Output :-
// 1
// 12
// 123
// 1234

console.log("Pattern 4")
for (let i = 0; i < n0; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + (i + 1)
    }
    console.log(row)
}

console.log("\n")
// Output :-
// 1
// 22
// 333
// 4444

console.log("Pattern 5")
for (let i = n0; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + j
    }
    console.log(row)
}

console.log("\n")
// Output :-
// 1234
// 123
// 12
// 1

console.log("Pattern 6")
for (let i = 0; i < n0; i++) {
    let row = "";
    for (let j = 0; j < n0 - i; j++) {
        row = row + "*"
    }
    console.log(row)
}

console.log("\n")
// Output :-
// ****
// ***
// **
// *

console.log("Pattern 7")
for (let i = 0; i < n0; i++) {
    let row = "";
    for (let j = 0; j < n0 - (i + 1); j++) {
        row = row + "-"
    }
    for (let k = 0; k < i + 1; k++) {
        row = row + "*"
    }

    console.log(row)
}

console.log("\n")
// Output :-
// ---*
// --**
// -***
// ****

console.log("Pattern 8");
for (let i = 0; i < n0; i++) {
    let row = "", toggle = 1;
    for (let j = 0; j <= i; j++) {
        row += toggle
        toggle = toggle === 1 ? 0 : 1
    }
    console.log(row)
}

console.log("\n")
// Output :-
// 1
// 10
// 101
// 1010

console.log("Pattern 9");
let toggle = 1;
for (let i = 0; i < n0; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += toggle
        toggle = toggle === 1 ? 0 : 1
    }
    console.log(row)
}

console.log("\n")
// Output :-
// 1
// 01
// 010
// 1010