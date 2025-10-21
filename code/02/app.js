// Tervituse programm
/*
const name = prompt ('Mis su nimi on?')

alert('Tere ' + name); 
*/

// Vanuse arvutamine
/*
const year =  prompt ('Mis su sünniaasta on?')
const currentYear = 2025;
const age = currentYear - year;

alert('Sinu vanus on ' + age)

// alert('Sinu vanuson: ' + (2025-prompt('Sisesta oma vanus')))
*/

//Ristküliku pindala arvutamine
/*
const width = prompt('Sisesta ristküliku laius')
const height = prompt('Sisesta ristküliku kõrgus')
const area = width * height;
alert('Ristküliku pindala on: ' + area)*/

//Temperatuuri teisendaja
/*
const C = prompt ('Mis on temperatuur Celsiuse kraadides?')

alert( C * 9 / 5 + 32)

const temperatureCelsius = prompt('Palun sisesta temperatuur Celsiuse kraadies')
const temperatureFarenheit = temperatureCelsius * 9 / 5 + 32;

alert('temperatuur Farenheiti skaalal: ' + temperatureFarenheit )*/

//Tingimuslaused
/*
const color = prompt('Mis värvi on foorituli?')

if (color === 'roheline') {
    alert('Võid üle tee minnna');
} else {
    alert('Pead veel ootama');
}


if (color === 'roheline') {
    alert('Võid edasi sõita');
} else if ( color === 'kollane*') {
    alert('Pead veel tükk aega ootama');
} else if(color === 'punane') {
    alert('Oota veel pisut')
} else { 
    alert('Sellist värvi ei tohiks olla');
} 
*/

//Parooli kontrollimine
/*
const parool = prompt('Mis on parool?')

if (parool === 'parool') {
    alert('Tere tulemast!');
} else {
    alert('Vale parool');
} 

const existingParool = 'admin123';

if (parool !== existingParool) {
 alert('Tere tulemast!');
} else {
    alert('Vale parool');
} 

// Vanuse kontroll

const age = prompt('Kas sa oled täisealine? Sisesta oma vanus.');

const ageLimit = 18;

if (age < ageLimit) {
alert('Oled alaealine'); 
} else {
    alert('Oled täisealine'); 
} 

const age = (prompt('Sisesta oma vanus'));

alert(typeof age);
*/

// Lihtne kalkulaator

const number1 = Number(prompt('Sisesta esimene arv'));
const number2 = Number(prompt('Sisesta teine arv'));

const operator = prompt('Millist tehet soovid teha? (+, -, /, *)')

if (operator === '+') {
    alert(number1 + number2);
} else if (operator === '-') {
    alert(number1 - number2);
} else if (operator === '*') {
    alert(number1 * number2);
} else if (operator === '/') {
    alert(number1 / number2);
}

