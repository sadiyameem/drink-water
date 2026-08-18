const smallCups = document.querySelectorAll('.cup-small');
const liters = document.querySelector('#liters');
const percentage = document.querySelector('#percentage');
const remained = document.querySelector('#remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => {
        highlightCups(idx);
    })
})

function highlightCups(index) {
    if(index === 7 && smallCups[index].classList.contains("full")) {
        index--;
    } else if (smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains("full")) {
        index--;
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= index) {
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }
    })

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.visibility = "visible";
        percentage.style.height = 0;
    } else {
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;
        percentage.textContent = `${(fullCups / totalCups) * 100}px`;
    }

    if(fullCups === totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    } else {
        remained.style.visibility = "visible";
        liters.textContent = `${2 - (250 * fullCups) / 1000}L`;
    }
}

let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    'It forms saliva and mucus',
    'It boost skin health',
    'The digestive system depends on it',
    'It helps maintain blood pressure',
    'It flushes body waste',
    'It prevents kidney damage',
    'It reduces the chance of a hangover',
    'The airways need it',
    'It regulates body temperature',
    'It delivers oxygen throughout the body'
];

btn.addEventListener('click', function() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})