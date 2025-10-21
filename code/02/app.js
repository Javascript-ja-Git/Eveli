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

const color = prompt('Mis värvi on foorituli?')

if (color === 'roheline') {
    alert('Võid üle tee minnna');
} else {
    alert('Pead veel ootama');
}
