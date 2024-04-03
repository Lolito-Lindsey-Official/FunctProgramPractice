// build a function converting fahrenheit to celsius
let farenheit = 32;

const convertToCelsius = (farenheit) => {
    return (farenheit - 32) / 1.8;
}

console.log(convertToCelsius(32));
console.log(convertToCelsius(72));