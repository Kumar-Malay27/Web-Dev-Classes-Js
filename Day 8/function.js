// function

function greeting() {
    console.log("Hello World!");
}

function addNumbers(n1, n2, n3=0, n4=0) {
    const sum = n1 + n2 + n3 + n4;
    console.log(sum);
}

// greeting();
// addNumbers(5, 10);
addNumbers(54, 10);
addNumbers(1, 2, 3);
addNumbers(5, 10, 15, 20);