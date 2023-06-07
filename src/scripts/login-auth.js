import '../style.css';

const password = document.getElementById('password');
let revealPassword = document.querySelector('.revealPassword');

revealPassword.addEventListener('click', () => {
    if(password.type === 'password') {
        password.type = 'text';
        revealPassword.classList.add('active');
    } else {
        password.type = 'password';
        revealPassword.classList.remove('active');
    }
});

let email = document.getElementById('email');
let emailIcon = document.querySelector('.email-icon');

email.addEventListener('input', () => {
    if(email.validity.valid) {
        emailIcon.classList.add('valid');
        emailIcon.classList.remove('invalid');
    } else {
        emailIcon.classList.add('invalid');
        emailIcon.classList.remove('valid');
    }
});
