const categories = Array.from(document.querySelectorAll('#categories > li'));
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const title = category.firstElementChild;
  const count = category.lastElementChild;
  console.log(
    `Category: ${title.textContent} \nElements: ${count.childElementCount}`
  );
});
