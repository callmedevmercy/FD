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

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuPath = document.getElementById('menu-icon-path');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            
            // Change icon from hamburger to X
            if (!isHidden) {
                menuPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            } else {
                menuPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            }
        });
    }
});