// Arrow Function
let cookFood = () => 1 + 3 +2.4;
let result: number = cookFood()
console.log(result);

let weather = (cloudy: number , rainy: number , sunny: number): number => (
    cloudy + rainy + sunny
)
let conculsion: number = weather(2,4,3);
console.log(conculsion);

let havelaptop = () => { return 1 + 2 + 0};
let response: number = havelaptop()
console.log(response);

let makeCoffee = () => {
    let ingredients = 1.5 + 1 + 2;
    return ingredients
};
let final: number = makeCoffee()
console.log(final);

let studing = (maths: number , science: number , english: number): number => {
    let preparedForTest = maths + science + english;
    return preparedForTest
};
let done: number = studing(2,4,1);
console.log(done);

