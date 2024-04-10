// build a function converting fahrenheit to celsius
const convertToCelsius = (farenheit) => {
    return (farenheit - 32) / 1.8;
}

console.log(convertToCelsius(55));
console.log(convertToCelsius(72));

// build a function converting miles to kilometers
let mile = 0;
 
const convertToKm = (mile) => {
    return mile * 0.62;
}

console.log(convertToKm(5));
console.log(convertToKm(10));


