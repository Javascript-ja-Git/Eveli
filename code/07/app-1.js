const testButton = document.getElementById('test-button');
function buttonPress () {
    console.log('Nuppu vajutati');
}
testButton.addEventListener('click', buttonPress);

const testButton1 = document.getElementById('test-button-1');
testButton1.addEventListener('click', buttonPress);

console.log('Nuppu vajutati');

const container = document.getElementById('container');
//Tekitame uue paragrahvi elemendi
const newParagraph = document.createElement('p');
//Lisame paragrahvile sisu
newParagraph.innerText = 'Siin on uus sisu, mis on tekitatud kasutades JavaScripti';
//Lisame loodud paragrahvi alaelemendina konteinerisse
container.appendChild(newParagraph);
