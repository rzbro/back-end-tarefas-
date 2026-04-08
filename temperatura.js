//Conversão de temperturas

const cidade ="Curitiba";
const tempCelsius = 18.5;

const tempFahrenheit =temCelsiu * (9/5)+ 32;
const tempKelvin = temCelsiu + 273.15;
const variacaoDiaria = 26.3 - temCelsiu;

console.log(`Temperatura em ${cidade} hoje está ${tempCelsius}.`);
console.log(`Celsius: ${tempCelsius} C°`);
console.log(`Fahrenheit: ${tempFahrenheit.toFixed(1)} F°`);
console.log(`Kelvin: ${tempKelvin} K°`);
console.log(`\nVariação prevista: ${variacaoDiaria.toFixed(1)} C°`);

//Fazer console.log para Fahrenheit e para Kelvin