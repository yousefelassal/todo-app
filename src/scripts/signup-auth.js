import '../style.css';
import Pattern from '../images/pattern.svg';

const pattern = document.getElementById('pattern');
pattern.src = Pattern;

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');


confirmPassword.addEventListener('input', () => {
    if(password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Password did not match');
    } else {
        confirmPassword.setCustomValidity('');
    }
});

let revealPassword = document.querySelectorAll('.revealPassword');

revealPassword.forEach((element) => {
    element.addEventListener('click', () => {
        if(password.type === 'password') {
            password.type = 'text';
            confirmPassword.type = 'text';
            revealPassword.forEach((element) => {
                element.classList.add('active');
            });
        } else {
            password.type = 'password';
            confirmPassword.type = 'password';
            revealPassword.forEach((element) => {
                element.classList.remove('active');
            });
        }
    });
});

let emailIcon = document.querySelector('.email-icon');
let email = document.getElementById('email');

//change email icon color if valid or invalid
email.addEventListener('input', () => {
    if(email.validity.valid) {
        emailIcon.classList.add('valid');
        emailIcon.classList.remove('invalid');
    } else {
        emailIcon.classList.add('invalid');
        emailIcon.classList.remove('valid');
    }
});