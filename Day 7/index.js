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

// const user = {
//     name: "Malay",
//     age: 20,
//     emailId: "malay290@gmail.com",
//     amount: 65000
// }

// const user2 = user;
// user2.age = 90;

// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for in loop
// for(let keys in user){
//     console.log(keys, user[keys]);
// }

// const user = {
//     name: "Malay",
//     age: 20,
//     emailId: "malay290@gmail.com",
//     amount: 65000
// }

// // for of loop
// // const temparr = Object.keys(user);
// // console.log(temparr);
// // for(let keys of temparr){
// //     console.log(keys);
// // }

// console.log(Object.entries(user));
// for(let [keys, values] of Object.entries(user)){
//     console.log(keys, values);
// }

const user = {
    name: "Malay",
    age: 20,
    emailId: "malay290@gmail.com",
    amount: 65000,
    greeting: function(){
        console.log(`Hello world ${user.name}`);
        return 20;
    }
}

const va = user.greeting();
console.log(va);
