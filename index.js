const [form] = document.forms;
const login = form.elements.login;
const password = form.elements.password;
const loginPattern = /[a-z0-9_-]{3,15}$/i;
const passwordPattern = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/;
const submitBtn = document.querySelector('[type="submit"]');
submitBtn.disabled = true;

let amountInput = 0;

login.addEventListener('change', () => {
    console.log(amountInput);
    if (loginPattern.test(login.value.trim())) {
        amountInput++;
    }
    if (amountInput >= 2) {
        submitBtn.disabled = false;
    }
});

password.addEventListener('change', () => {
    console.log(amountInput);
    if (passwordPattern.test(password.value.trim())) {
        amountInput++;
    }
    if (amountInput >= 2) {
        submitBtn.disabled = false;
    }
});

submitBtn.disabled = true;
console.dir(login);
console.dir(form);

form.addEventListener('submit', (event) => {
    event.preventDefault();
});

