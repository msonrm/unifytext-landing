// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature and platform elements
document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');
    const platforms = document.querySelectorAll('.platform');
    
    features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(30px)';
        feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(feature);
    });
    
    platforms.forEach(platform => {
        platform.style.opacity = '0';
        platform.style.transform = 'translateY(30px)';
        platform.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(platform);
    });
});

// Add active state to navigation on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // You can add header behavior here if needed in the future
    
    lastScroll = currentScroll;
});
