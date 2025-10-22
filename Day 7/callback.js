// function greet(){
//     console.log("Hello how are you?");
// }

// function dance(){
//     console.log("Dancing...");
// }

// function meet(callback){
//     console.log("I am going to meet someone!");
//     callback();
//     console.log("Meeting is over.");
// }

// meet(greet);
// meet(dance);


function blinkitOrderPlaced(){
    console.log("We have started packing your Order");
}

function zomatoOrderPlaced(){
    console.log("We have started preparing your food");
}

function payment(amount,callback){
    console.log(`${amount} payment has initilized`)
    console.log("Payment is received");
    callback();
}

payment(500,zomatoOrderPlaced);
payment(300,blinkitOrderPlaced);