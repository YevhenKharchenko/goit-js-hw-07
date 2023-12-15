const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  event.preventDefault();
  if (email === '' || password === '')
    return alert('All form fields must be filled in');

  const obj = {
    email: email.trim(),
    password: password.trim(),
  };

  console.log(obj);

  event.target.reset();
});

const input = document.querySelectorAll('label > input');
input.forEach(elem => elem.classList.add('input'));

const btn = document.querySelector('form > button');
btn.classList.add('btn');

const label = document.querySelectorAll('form > label');
label.forEach(elem => elem.classList.add('label'));
