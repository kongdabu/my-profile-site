// Typing Effect for Hero Section
const typingText = document.getElementById('typing-text');
const textToType = 'IT 기획 전문가';
let charIndex = 0;

function typeCharacter() {
    if (charIndex < textToType.length) {
        typingText.innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeCharacter, 80);
    } else {
        // Add blinking cursor effect at the end
        typingText.style.borderRight = '3px solid #2563eb';
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    typeCharacter();
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation to section titles
            const title = entry.target.querySelector('.section-title');
            if (title) {
                title.style.animation = 'fadeIn 0.8s ease-out';
            }

            // Add animation to cards
            const cards = entry.target.querySelectorAll('.card-fade-in');
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
                card.style.animation = 'slideInUp 0.8s ease-out forwards';
            });

            // Add animation to competency items
            const competencies = entry.target.querySelectorAll('.competency-item');
            competencies.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
                item.style.animation = 'slideInUp 0.8s ease-out forwards';
            });

            // Add animation to skill badges
            const badges = entry.target.querySelectorAll('.skill-badge');
            badges.forEach((badge, index) => {
                badge.style.animationDelay = `${index * 0.1}s`;
                badge.style.animation = 'slideInUp 0.6s ease-out forwards';
            });

            // Unobserve after animation
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add subtle parallax effect on scroll
window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    const scrolled = window.pageYOffset;

    if (scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Scroll to section with fade-in effect
function revealOnScroll() {
    const revealElements = document.querySelectorAll('[class*="fade-in"], [class*="slide-in"]');
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Run on scroll
window.addEventListener('scroll', revealOnScroll);

// Run on page load
revealOnScroll();
