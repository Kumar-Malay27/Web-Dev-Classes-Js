// Operators
// Arithmetic Operators
console.log(5 + 3); // Addition
console.log(5 - 3); // Subtraction
console.log(5 * 3); // Multiplication
console.log(5 / 3); // Division
console.log(5 % 3); // Modulus -> Remainder
console.log(5 ** 3); // Exponentiation -> 5*5*5

// Assignment Operators
let x = 20;
let y = 10;
// shorthand assignment
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y
x %= y; // x = x % y
x **= y; // x = x ** y
console.log(x);

// Comparison Operators
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y);
console.log(x != y);
console.log(x === y); // first check TYPE then compare VALUE
console.log(x !== y); // first check TYPE then compare VALUE

// NaN (Not a Number) -> type of NaN is number
let a = "121ac";
let b = Number(a);
console.log(b);
console.log(typeof b);

// Number -> String
let c = 10;
let d = String(c);
console.log(d);
console.log(typeof d);

