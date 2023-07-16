const textInput = document.getElementById('validation-input');

textInput.addEventListener('blur', () => {
  if (textInput.value.length == textInput.dataset.length) {
    textInput.classList = 'valid';
  } else {
    textInput.classList = 'invalid';
  }
});
