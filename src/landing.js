import './style.css'
import Socrates from './images/socrates.jpg'
import VladimirLenin from './images/Vladimir_Lenin.jpg'
import RoomFinder from './images/room-finder.png'
import ProductImg from './images/product-page.png'

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
const roomFinder = document.getElementById('room-finder');
const productImg = document.getElementById('product-img');

socrates.src = Socrates;
lenin.src = VladimirLenin;
roomFinder.src = RoomFinder;
productImg.src = ProductImg;


const featuresLink = document.getElementById('features-link');
const productLink = document.getElementById('product-link');

const featuresSection = document.getElementById('features-section');

featuresLink.addEventListener('click', () => {
    featuresSection.scrollIntoView({ behavior: 'smooth'});
});

productLink.addEventListener('click', () => {
    featuresSection.scrollIntoView({ behavior: 'smooth'});
});