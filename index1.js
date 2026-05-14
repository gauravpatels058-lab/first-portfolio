// 1. Elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");

// 2. Mobile Menu Toggle
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isActive = navLinks.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", isActive);
    });
}

// 3. Close menu on link click (Event Delegation)
navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove("active");
    }
});

// 4. Navbar scroll effect
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
}, { passive: true });

// 5. Intersection Observer for Reveal Animation
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target); // Animates only once
        }
    });
}, revealOptions);

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
