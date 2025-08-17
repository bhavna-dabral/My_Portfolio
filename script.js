// Smooth Scroll
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// EmailJS Contact Form
(function(){ emailjs.init("YOUR_EMAILJS_USER_ID"); })();

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(() => {
            formStatus.textContent = "Message sent successfully! I'll reply soon.";
            formStatus.style.color = "#00ffea";
            contactForm.reset();
        }, (error) => {
            formStatus.textContent = "Oops! Something went wrong. Try again.";
            formStatus.style.color = "red";
            console.error(error);
        });
});
