/*const weekdays = ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev", "pühapäev"];

console.log(weekdays[2]);

for (let i = 0; i < 7; i++) {
    console.log(weekdays[i]);
}

for (let i = 0; i < weekdays.length, i++) {
    console.log(weekdays[i]);
}
    */

const temperatures = [10, 12, 14, 16, 18];
/*
for (let i = 1; i <= 5; i++) {
 const temp = Number (prompt('Mitu kraadi on hetkel temperatuur?'));

temperatures.push(temp);
}*/

let sum = 0;

for (let i = 0; i < temperatures.length; i++) {
    sum = sum + temperatures[i];
    console.log(sum);
}
const average = sum / temperatures.length;

console.log(average);
console.log(temperatures[temperatures.length - 1]);

