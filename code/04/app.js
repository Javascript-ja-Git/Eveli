/*const weekdays = ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev", "pühapäev"];

console.log(weekdays[2]);

for (let i = 0; i < 7; i++) {
    console.log(weekdays[i]);
}

for (let i = 0; i < weekdays.length, i++) {
    console.log(weekdays[i]);
}
const temperatures = [10, 12, 14, 16, 18];

for (let i = 1; i <= 5; i++) {
 const temp = Number (prompt('Mitu kraadi on hetkel temperatuur?'));

temperatures.push(temp);
}

let sum = 0;

for (let i = 0; i < temperatures.length; i++) {
    sum = sum + temperatures[i];
    console.log(sum);
}
const average = sum / temperatures.length;

console.log(average);
console.log(temperatures[temperatures.length - 1]);


const Numbers = ["1", "55", "99", "44", "22", "97", "30", "76", "45", "30"];


for (let i = 0; i < Numbers.length; i++) {
    console.log(Numbers[i]);
 }

for (let i = Numbers.length - 1; i >= 0; i--) {
    console.log(i + 1, Numbers[i]);
 }


// Väljasta kõik hinnad koos käibemaksuga

const prices = ["1", "55", "99", "44", "22", "97", "30", "76", "45", "30"];

for (let i = 0; i < prices.length; i++) {
    console.log(prices[i] * 1.24);
 }


for (let i = 0; i < prices.length; i = i + 2) {
    console.log(prices[i] * 1.24);
 }




 let k = 'kolmapaev';

 k = 'kolmapäev';

 const weekdays = ["esmaspäev, "teisipäev", "kolmapaev", "neljapäev", "reede", "laupäev", "pühapäev"];

weekdays[2] = 'kolmapäev';

console.log(weekdays); 

// ______
// Math objekt

// console.log(Math, PI);

const sales = [10, 5, 15, 20];

const randomNumber = Math.floor(Math.random() * 4) - 1;

console.log(sales[randomNumber]); */


// Funktsioon, mis tagastab arvud vahemikus 1-6

function dice() {
 const randomNumber = Math.ceil(Math.random() * Number);
    return randomNumber;
}

/*const maxNumber = Number(prompt('Palun sisesta maksimaalne juhuarv'));

alert(dice(maxNumber)); */

const names = ['Jaan', 'Juta', 'Kalle', 'Malle', 'Juhan', 'Tiina'];

const randomNumber = dice(names.length);

console.log(names[randomNumber - 1]);


