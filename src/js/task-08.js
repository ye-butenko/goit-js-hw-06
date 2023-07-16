const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const user = {};

  for (const element of form.elements) {
    if (element.tagName === 'INPUT') {
      if (element.value.trim() === '') {
        alert('Будь ласка, заповніть всі поля форми');
        return;
      }
      user[element.name] = element.value;
    }
  }
  console.log(user);

  form.reset();
}
