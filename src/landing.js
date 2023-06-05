import './style.css'
import Socrates from './images/socrates.jpg'
import VladimirLenin from './images/Vladimir_Lenin.jpg'

const navbar = document.getElementById('navbar');
const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');

openNav.addEventListener('click', () => {
    navbar.classList.remove('hidden');
    navbar.classList.add('flex');
});

closeNav.addEventListener('click', () => {
    navbar.classList.remove('flex');
    navbar.classList.add('hidden');
});  

const socrates = document.getElementById('socrates');
const lenin = document.getElementById('lenin');

socrates.src = Socrates;
lenin.src = VladimirLenin;