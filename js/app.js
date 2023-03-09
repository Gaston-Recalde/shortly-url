const btnOpen = document.querySelector('.open');
const btnClose = document.querySelector('.close');
const navbar = document.querySelector('.nav__container__items');
const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('.form__button');
const small = document.querySelector('small');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInput();
});

function checkInput() {

    const linkValue = input.value.trim();

    if(linkValue === '') {
        input.classList.add('error')
        small.style.display = 'inline-block'
      } else {
        input.classList.remove('error')
        small.style.display = 'none'
      }
};

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