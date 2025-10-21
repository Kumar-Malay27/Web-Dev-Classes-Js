// function

// function greeting() {
//     console.log("Hello World!");
// }

// function addNumbers(n1, n2, n3=0, n4=0) {
//     const sum = n1 + n2 + n3 + n4;
//     console.log(sum);
// }

// greeting();
// addNumbers(5, 10);

// rest operator

function addNumbers(...num) {
    // console.log(num);

    let sum = 0;
    for (let n of num) {
        sum += n;
    }
    console.log(sum);
}

addNumbers(6, 7);
addNumbers(6, 7, 8);
addNumbers(6, 7, 8, 9);
addNumbers(7, 8, 12, 12, 11, 12, 41, 12);