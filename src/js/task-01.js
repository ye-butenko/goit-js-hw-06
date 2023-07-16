const categories = Array.from(document.querySelectorAll('#categories > li'));
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const title = category.querySelector('h2');
  const count = category.querySelector('ul');
  console.log(
    `Category: ${title.textContent} \nElements: ${count.childElementCount}`
  );
});
