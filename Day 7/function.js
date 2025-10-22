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

// function addNumbers(...num) {
//     // console.log(num);

//     let sum = 0;
//     for (let n of num) {
//         sum += n;
//     }
//     console.log(sum);
// }

// addNumbers(6, 7);
// addNumbers(6, 7, 8);
// addNumbers(6, 7, 8, 9);
// addNumbers(7, 8, 12, 12, 11, 12, 41, 12);

// const arr = [5, 10, 15, 20, 25];
// const arr2 = [30, 35, 40];

// const [first, second, ...num] = arr;
// console.log(first, second, num);

// const ans = [arr,arr2];
// console.log(ans);

// function expression

// const addNumbers = function (num1, num2) {
//     return num1 + num2;
// }

// console.log(addNumbers(5, 10));

// function addNumbers(num1, num2) {
//     return num1 + num2;
// }

// arrow function

// const addNumbers = (num1, num2) => num1 + num2;

// If we have only one parameter, no need to use ()
// const squareNumber = n => n * n;

// console.log(squareNumber(5));
// console.log(addNumbers(5, 10));

// const greet = () => ({name: "John", age: 30});
// console.log(greet());

// Immediately Invoked Function Expression (IIFE)
// (function greet(){
//     console.log("Hello World!");
// })();

// (()=>{
//     console.log("Hello from IIFE Arrow Function");
// })();