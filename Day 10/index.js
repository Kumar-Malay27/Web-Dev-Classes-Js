// scope and closure , HOF
// scope : block scope, function scope, global scope

// global scope
let a = 10;
const b = 20;

// block scope
if (true) {
    console.log(b);
}

// function scope
function greet() {
    console.log(a);
}

greet();