const [form] = document.forms;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const login = form.elements.login.value.trim();
    const password = form.elements.password.value.trim();
    if (login.length >= 5 && password.length >= 8) {
        form.submit();
        return;
    }
    alert('enter login or password');
});
