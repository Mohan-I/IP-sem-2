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


window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-wrapper");

    // Add a slight delay (e.g., 500ms) so the user actually sees the 
    // cool animation if the site loads too fast.
    setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 500);
});