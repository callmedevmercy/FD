// asset/js/components.js

async function loadComponents() {
    // 1. Load Navbar
    // We use '/components/...' so it looks in the root components folder
    try {
        const navResponse = await fetch('/components/navbar.html');
        const navData = await navResponse.text();
        document.getElementById('navbar-placeholder').innerHTML = navData;
    } catch (error) {
        console.error("Error loading navbar:", error);
    }

    // 2. Load Footer
    try {
        const footerResponse = await fetch('/components/footer.html');
        const footerData = await footerResponse.text();
        document.getElementById('footer-placeholder').innerHTML = footerData;
    } catch (error) {
        console.error("Error loading footer:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadComponents);