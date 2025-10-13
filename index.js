const [form] = document.forms;
const fullname = form.elements.fullname;
const email = form.elements.email;
const username = form.elements.username;
const password = form.elements.password;
const repeat = form.elements.repeat;
const terms = form.elements.terms;
const submitBtn = form.querySelector('[type="submit"]');

submitBtn.disabled = true;
let amountInput = 0;

function checkField(field) {
  if (field.type === 'checkbox') {
    if (field.checked) amountInput++;
  } else {
    if (field.value.trim() !== '') amountInput++;
  }

  if (amountInput >= 5) {
    submitBtn.disabled = false;
  }
}

fullname.addEventListener('change', () => checkField(fullname));
email.addEventListener('change', () => checkField(email));
username.addEventListener('change', () => checkField(username));
password.addEventListener('change', () => checkField(password));
repeat.addEventListener('change', () => checkField(repeat));
terms.addEventListener('change', () => checkField(terms));

form.addEventListener('submit', (event) => {
  event.preventDefault();
});
