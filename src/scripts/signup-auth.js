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

