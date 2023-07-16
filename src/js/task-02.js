const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const fragment = document.createDocumentFragment();

for (const ingredient of ingredients) {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList = 'item';
  fragment.appendChild(liEl);
}

document.getElementById('ingredients').appendChild(fragment);
