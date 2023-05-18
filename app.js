const toggle = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');
const bod = document.querySelector('body');


toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
    bod.classList.toggle('active');
})