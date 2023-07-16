function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const changeColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', onChangeColor);

function onChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  changeColor.textContent = getRandomHexColor();
}
