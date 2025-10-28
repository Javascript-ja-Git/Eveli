/*let i = 0;
//while - tsükkel
while(i < 5){
    console.log(i);
    i++;
}*/

// Väljasta arvud 5 kuni 15

/*
let i = 5;

while(i <= 15){
    // console.log(i);
    i++;
}
// for - tsükkel
console.log(i)*/
/*
for(let i = 5; i <= 15; i++) {
   // console.log(i)
   }

console.log(i) 

for(let i = 0; i > 0; i++) {
    console.log('hello');
}

let i = 1;
do {
    console.log(i);
    i++;
} while (i<=5)
*/

// Programm, mis küsib kasutajalt arvu ja siis väljastab nullist kuni sisestatud 
// arvuni arvud(ka

/*
const count = Number(prompt('Palun sisesta number:'));

let i = 0;
let sum = 0;

while(i <= count) {
    if(i !== 3) {
    sum = sum + i;
    }
    if (sum > 10) {
        console.log(i,sum);
    } else {
    console.log(i, sum);}
    i++;} 

*/

// Kivi-paber-käärid mäng
/*
const player1 = prompt('Mängija 1, vali Kivi - paber - käärid');
const player2 = prompt('Mängija 2, vali Kivi - paber - käärid');
    
if(player1 === player2) {
    alert('viik');
} else if(player1 === 'kivi' && player2 === 'käärid') {
    alert('Mängija1 võitis')
} else if (player1 === 'paber' && player2 === 'kivi'){
    alert('Mängija1 võitis')
} else if(player1 ==='käärid' && player2 === 'paber') {
    alert('Mängija1 võitis');
} else{
    alert('Mängija2 võitis')
}
*/

//Funktsioonid
/*
function add(a, b) {
    const sum = a + b;
    return sum;
}

const result = add(2, 3);
console.log(add(2, 3));
console.log(add(5, 3));
console.log(add(200, 3));*/
/*
function greeting(name) {
    const message = 'Tere,' + name;
return message
}

console.log(greeting('Eveli')); // -> 'Tere, Eveli!'

//Küsi kasutajalt nimi ja kasutades funktsiooni, kuva tervitus kasutajale.

const username = prompt('Sisesta oma nimi');
const message = greeting(username);
alert(message);
*/

function triangleArea(base, height) {
    const area = (base * height) / 2;
    return area;
}

console.log(triangleArea(5, 10));
console.log(triangleArea(8, 4));

