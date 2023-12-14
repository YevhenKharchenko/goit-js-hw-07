const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  event.preventDefault();
  if (email === "" || password === "")
    return alert("All form fields must be filled in");

  const obj = {
    email: email.trim(),
    password: password.trim(),
  };

  console.log(obj);

  event.target.reset();
});
