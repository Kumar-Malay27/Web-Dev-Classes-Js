// // Operators
// // Arithmetic Operators
// console.log(5 + 3); // Addition
// console.log(5 - 3); // Subtraction
// console.log(5 * 3); // Multiplication
// console.log(5 / 3); // Division
// console.log(5 % 3); // Modulus -> Remainder
// console.log(5 ** 3); // Exponentiation -> 5*5*5

// // Assignment Operators
// let x = 20;
// let y = 10;
// // shorthand assignment
// x += y; // x = x + y
// x -= y; // x = x - y
// x *= y; // x = x * y
// x /= y; // x = x / y
// x %= y; // x = x % y
// x **= y; // x = x ** y
// console.log(x);

// // Comparison Operators
// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x == y);
// console.log(x != y);
// console.log(x === y); // first check TYPE then compare VALUE
// console.log(x !== y); // first check TYPE then compare VALUE

// // NaN (Not a Number) -> type of NaN is number
// let a = "121ac";
// let b = Number(a);
// console.log(b);
// console.log(typeof b);

// // Number -> String
// let c = 10;
// let d = String(c);
// console.log(d);
// console.log(typeof d);

// // boolean -> number
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0

// // null -> number
// console.log(Number(null)); // 0
// // undefined -> number
// console.log(Number(undefined)); // NaN

// // null is loosely equal to undefined only and vice versa
// console.log(null == undefined); // true
// console.log(null === undefined); // false
// console.log(null==0);   // false
// console.log(null=="");  // false
// console.log(null==false);   // false
// console.log(null==true);    // false

// // >,<,>=,<= (converting null --> number, undefined --> NaN)

// console.log(null>=0); // true
// console.log(null<=0); // true
// console.log(null>0); // false
// console.log(null<0); // false
// console.log(null>=undefined); // false
// console.log(undefined>=0);  // false

// // comparing string with string
// console.log("Malay" > "malay") // false (based on ASCII values) compares first different character
// console.log("2">"12"); // true (based on ASCII values) compares first different character

// logical operators
// AND (&&), OR (||)
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// let a = "Rohit";
// let b = "Mohit";
// console.log(a && b); // "Mohit"
// console.log(a || b); // "Rohit"

// !=
console.log(5!=5);