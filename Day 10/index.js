// scope and closure , HOF

let a = 10;
const b = 20;

if (true) {
    console.log(b);
}

function greet() {
    console.log(a);
}

greet();