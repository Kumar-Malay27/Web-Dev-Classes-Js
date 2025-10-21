function greet(){
    console.log("Hello how are you?");
}

function meet(callback){
    console.log("I am going to meet someone!");
    callback();
}

meet(greet);