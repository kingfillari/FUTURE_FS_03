// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu after click
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Contact form handling (Formspree)
const form = document.getElementById('contactForm');
const statusDiv = document.getElementById('formStatus');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        statusDiv.innerHTML = '<p>Sending...</p>';
        const formData = new FormData(form);
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                statusDiv.innerHTML = '<p style="color: green;">✅ Message sent successfully! We\'ll get back to you soon.</p>';
                form.reset();
            } else {
                statusDiv.innerHTML = '<p style="color: red;">❌ Oops! Something went wrong. Please try again.</p>';
            }
        } catch (error) {
            statusDiv.innerHTML = '<p style="color: red;">❌ Network error. Please check your connection.</p>';
        }
    });
}