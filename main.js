"use strict";
// Arrow Function
let cookFood = () => 1 + 3 + 2.4;
let result = cookFood();
console.log(result);
let weather = (cloudy, rainy, sunny) => (cloudy + rainy + sunny);
let conculsion = weather(2, 4, 3);
console.log(conculsion);
let havelaptop = () => { return 1 + 2 + 0; };
let response = havelaptop();
console.log(response);
let makeCoffee = () => {
    let ingredients = 1.5 + 1 + 2;
    return ingredients;
};
let final = makeCoffee();
console.log(final);
let studing = (maths, science, english) => {
    let preparedForTest = maths + science + english;
    return preparedForTest;
};
let done = studing(2, 4, 1);
console.log(done);
