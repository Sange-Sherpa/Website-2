const navButton = document.querySelector('.menu__icon');
const navbar  = document.querySelector('.navigation');

navButton.addEventListener('click', () => {
    navbar.classList.toggle('show_links');
})