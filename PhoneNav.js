const menuToggle = document.querySelector('.MenuToggle');
const navLink = document.querySelector('.NavLink');

menuToggle.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        navLink.classList.toggle('active');
    }
});