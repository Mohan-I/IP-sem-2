const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('is-active');
});

document.querySelectorAll('.navlinks a'). forEach(link => {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('is-active');
});
