const textInput = document.querySelector('#controls > input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

btnCreate.addEventListener('click', () => {
  const amount = parseInt(textInput.value);
  createBoxes(amount);
});
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement('div');
    const boxSize = 30 + i * 10;

    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.display = 'inline-block';
    divEl.style.width = `${boxSize}px`;
    divEl.style.height = `${boxSize}px`;
    fragment.appendChild(divEl);
  }
  boxesContainer.innerHTML = '';
  boxesContainer.appendChild(fragment);
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
  textInput.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
