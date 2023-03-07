const btnOpen = document.querySelector('.open');
const btnClose = document.querySelector('.close');

btnOpen.addEventListener('click' , () => {
    btnOpen.style.display = 'none';
    btnClose.style.display = 'inline-block';
});

btnClose.addEventListener('click' , () => {
    btnOpen.style.display = 'inline-block';
    btnClose.style.display = 'none';
});