const btnOpen = document.querySelector('.open');
const btnClose = document.querySelector('.close');
const navbar = document.querySelector('.nav__container__items');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();

});

btnOpen.addEventListener('click' , () => {
    btnOpen.style.display = 'none';
    btnClose.style.display = 'inline-block';
    navbar.style.display = 'block';
});

btnClose.addEventListener('click' , () => {
    btnOpen.style.display = 'inline-block';
    btnClose.style.display = 'none';
    navbar.style.display = 'none';
});