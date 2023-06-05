import './style.css'

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