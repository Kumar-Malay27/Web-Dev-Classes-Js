// console.log(Math.abs(-19));
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.SQRT2);
// console.log(Math.ceil(7.5));
// console.log(Math.floor(7.5));
// console.log(Math.log10(20));
// console.log(Math.max(23,324,54,4,854,83));
// Math.random() generates random values between[0,1) where 0 is included but 1 is not.
// console.log(Math.random());

// generating random numbers

// for (0-9)/(1-10)
// console.log(Math.floor(Math.random()*10)+1);

// for (1-6)
// console.log(Math.floor(Math.random()*6)+1);

// formulae: (Math.floor(Math.random()*totalNumberOfOutcomes)+shift)

// (15-25)
// console.log(Math.floor(Math.random()*11)+15);

// practical use
// OTP Generate: 4 digit: 1000-9999(not used in practical life because it isn't actually random)
console.log(Math.floor(Math.random()*9000)+1000)