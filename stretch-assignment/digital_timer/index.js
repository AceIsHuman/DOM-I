const digits = document.querySelector('.digits');
const tens = digits.querySelector('#secondTens');
const ones = digits.querySelector('#secondOnes');
const tenths = digits.querySelector('#msTens');
const hundredths = digits.querySelector('#msHundreds');
const button = document.querySelector('.button');
const resetButton = document.querySelector('.button.reset');
let timer; let flashTimer;

function flashRed() {
    digits.classList.toggle('redDigit');
}

function increment() {
    // INCREASE HUNDREDTHS
    if (hundredths.textContent === '-') hundredths.textContent = '1';
    else if(hundredths.textContent === '9') hundredths.textContent = '0';
    else hundredths.textContent++;

    // INCREASE TENTHS
    if (hundredths.textContent === '0' && tenths.textContent === '-') tenths.textContent = '1';
    else if (hundredths.textContent === '0' && tenths.textContent === '9') tenths.textContent = '0';
    else if (hundredths.textContent === '0') tenths.textContent++;

    // INCREASE ONES
    if (hundredths.textContent === '0' && tenths.textContent === '0' && ones.textContent === '-') ones.textContent = '1';
    else if (hundredths.textContent === '0' && tenths.textContent === '0' && ones.textContent === '9') ones.textContent = '0';
    else if (hundredths.textContent === '0' && tenths.textContent === '0') ones.textContent++;
    
    if (hundredths.textContent === '0' && tenths.textContent === '0' && ones.textContent === '0') {
        tens.textContent = '1';
        clearInterval(timer);
        flashRed();
        flashTimer = setInterval(flashRed, 300);
        resetButton.classList.remove('disabled');
    }
}

button.addEventListener('click', () => {
    event.stopPropagation();
    timer = window.setInterval(increment, 10);
    button.classList.add('disabled');
});

resetButton.addEventListener('click', () => {
    tens.textContent = '-';
    ones.textContent = '-';
    tenths.textContent = '-';
    hundredths.textContent = '-';

    resetButton.classList.add('disabled');
    button.classList.remove('disabled');
    clearInterval(flashTimer);
    digits.classList.remove('redDigit')
});