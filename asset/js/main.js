/* =========================================
   1. MOBILE MENU TOGGLE
   ========================================= */
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

// When the hamburger icon is clicked
menuIcon.addEventListener('click', () => {
    // Toggle the .active class on the links (shows/hides them)
    navLinks.classList.toggle('active');
    
    // Optional: Toggle an 'active' class on the icon if you want to animate it into an 'X'
    menuIcon.classList.toggle('open');
});

function toggleMenu() {
    // 1. Get the Navbar element
    const navbar = document.querySelector('.navbar');
    
    // 2. Toggle the class "active" on it
    navbar.classList.toggle('active');
}

/* =========================================
   2. NAVBAR SCROLL EFFECT
   ========================================= */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* =========================================
   3. CLOSE MENU WHEN CLICKING A LINK
   ========================================= */
// This ensures that when a user on mobile clicks a link, the menu closes automatically
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('open');
    });
});