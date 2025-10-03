// Array

let marks = [100,50,70,80,90];
console.log(marks);
console.log(marks.length);
let arr = [100,30,"Rohit",true];
// console.log(arr[2]);
// console.log(typeof arr);

// arr[1] = 90;
// console.log(arr);

// Push: It inserts elements at end.
arr.push(90);
arr.push("Hello");

console.log(arr);

// Pop: It deletes element from end.
arr.pop();
console.log(arr);

// Add elements at first -> unshift()

arr.unshift(15);
arr.unshift(30);
console.log(arr);

// Delete elements at first -> shift()

arr.shift();
console.log(arr);
