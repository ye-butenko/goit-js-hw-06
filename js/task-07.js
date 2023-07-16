// Напиши скрипт, який реагує на зміну значення
//  input#font - size - control(подія input) і змінює інлайн - стиль
//  span#text, оновлюючи властивість font - size.В результаті,
//     перетягуючи повзунок, буде змінюватися розмір тексту.

const text = document.getElementById('text');
const sizeControl = document.getElementById('font-size-control');

sizeControl.addEventListener('input', () => {
  text.style.fontSize = sizeControl.value + 'px';
});
