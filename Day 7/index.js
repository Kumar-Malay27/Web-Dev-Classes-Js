// Object
// CRUD Operation: Create Read Update delete
// Create
// const user = {
//     name: "Malay",
//     age: 20,
//     emailId: "malay290@gmail.com",
//     amount: 65000,
//     "home address": "bokaro"
// }

// console.log(user("name")); 
// console.log(user.age); 
// console.log(user("age")); 
// console.log(user("home address")); 

// // Read
// console.log(user); 
// console.log(user.emailId);
// // Update
// user.aadhar = 1234;
// user.amount = 50000;
// console.log(user);
// // Delete
// delete user.emailId;
// console.log(user); 

const user = {
    name: "Malay",
    age: 20,
    emailId: "malay290@gmail.com",
    amount: 65000
}

// const user2 = user;
// user2.age = 90;

// console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
