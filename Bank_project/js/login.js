document.getElementById('login-submit').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const usreEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (usreEmail == 'sontan@baap.com' && userPassword == 'abcde') {

        window.location.href = "banking.html";
    }
})