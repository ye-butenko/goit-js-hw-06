const counterValueSpan = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

decrement.addEventListener('click', decrementCounter);
increment.addEventListener('click', incrementCounter);

let counterValue = 0;

function updateCounterValue() {
  counterValueSpan.textContent = counterValue;
}

function decrementCounter() {
  counterValue--;
  updateCounterValue();
}

function incrementCounter() {
  counterValue++;
  updateCounterValue();
}
