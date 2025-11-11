/*const pin = prompt('Sisesta pin: ');
const pinAsNumber = Number(pin);

if (pinAsNumber) {
    alert('Sisend on korrektne');
} else {
    alert ('Sisend ei ole korrektne');
}

console.log(Boolean(pinAsNumber);

const name = prompt('Sisesta kasutajanimi: ');

if (!name) {
    if (username === 'admin') {
     const password = prompt ('Sisetsa parool: ');
     if (password) {
     if (password === '1234') {
     alert('Tere tulemast!');
      } else {
        alert ('Sisestatud parool on vale');
     }
     } else {
        alert('Sa ei sisestanud parooli '); 
     }
    } else {
        alert('Sul ei ole süsteemile ligipääsuõigust!');
    }
} else {
    alert('Sisestasid vale kasutajanime');
}



// Kontrollige, kas sisestatud number on vahemikus 1 kuni 100
*/
const number = Number(prompt('Sisesta number vahemikus 1 kuni 100: '));
/*
if (number < 1 || number > 100) {
    alert('Sisestatud arv ei ole vahemikus 1 - 100');
} else {
    alert('Sisestatud arv on vahemikus 1-100');
}
*/

if (number <= 1 && number >= 100) {
    alert('Sisestatud arv ei ole vahemikus 1 - 100');
} else {
    alert('Sisestatud arv on vahemikus 1-100');
}

