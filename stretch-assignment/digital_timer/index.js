const digits = document.querySelector('.digits');
const tens = digits.querySelector('#secondTens');
const ones = digits.querySelector('#secondOnes');
const tenths = digits.querySelector('#msTens');
const hundredths = digits.querySelector('#msHundreds');

function increment() {
    // INCREASE HUNDREDTHS
    if (hundredths.textContent === '-') hundredths.textContent = '1';
    else if(hundredths.textContent === '9') hundredths.textContent = '0';
    else hundredths.textContent++;

    // INCREASE TENTHS
    if (hundredths.textContent === '0' && tenths.textContent === '-') tenths.textContent ='1';
    else if (hundredths.textContent === '0' && tenths.textContent === '9') tenths.textContent = '0';
    else if (hundredths.textContent === '0') tenths.textContent++;
}

let timer = window.setInterval(increment, 10);