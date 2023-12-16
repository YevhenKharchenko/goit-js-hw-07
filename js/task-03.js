const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  const result = event.currentTarget.value.trim();

  if (!result) {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = result;
  }
});
