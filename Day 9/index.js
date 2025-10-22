// scope and closure , HOF
// scope : block scope, function scope, global scope

// global scope
// let a = 10;
// const b = 20;

// block scope
// if (true) {
//     console.log(b);
//     var c = 30;
// }

// console.log(c); // var is function scoped and global scoped, not block scoped

// function scope
// function greet() {
//     console.log(a);
// }

// greet();

// let global = 30;

// function greet(){
//     let global = 40;
    
//     function meet(){
//         let global = 50;
//         console.log(global);
//     }

//     meet();
// }

// greet();

// function createCounter() {
//     let count = 0;
//     function increment() {
        // console.log("Incremented");
//         count++;
//         return count;
//     }
//     return increment;
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// console.log(count);