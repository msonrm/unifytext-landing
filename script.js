// Language Management - Initialize immediately
(function() {
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const isJapanese = browserLang.toLowerCase().startsWith('ja');
    
    // Check localStorage for saved preference
    const savedLang = localStorage.getItem('preferredLang');
    
    // Set language priority: saved > browser > default
    const currentLang = savedLang || (isJapanese ? 'ja' : 'en');
    
    // Apply language immediately
    document.documentElement.setAttribute('lang', currentLang);
    if (document.body) {
        document.body.setAttribute('data-lang', currentLang);
    }
})();

const languageManager = {
    defaultLang: 'en',
    currentLang: 'en',

    init() {
        // Detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        const isJapanese = browserLang.toLowerCase().startsWith('ja');
        
        // Check localStorage for saved preference
        const savedLang = localStorage.getItem('preferredLang');
        
        // Set language priority: saved > browser > default
        this.currentLang = savedLang || (isJapanese ? 'ja' : 'en');
        
        // Apply language
        this.setLanguage(this.currentLang);
        
        // Set up language switcher buttons
        this.setupSwitcher();
    },

    setLanguage(lang) {
        this.currentLang = lang;
        document.body.setAttribute('data-lang', lang);
        document.documentElement.setAttribute('lang', lang);
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // Save preference
        localStorage.setItem('preferredLang', lang);
        
        // Update page title and meta
        if (lang === 'ja') {
            document.title = 'UnifyText - 書いたら、どこでも、すぐそこに';
            document.querySelector('meta[name="description"]').content = 
                '暗号化されたテキスト同期。広告なし。サブスクなし。';
        } else {
            document.title = 'UnifyText - Copy here, Paste everywhere, Instantly';
            document.querySelector('meta[name="description"]').content = 
                'Seamless encrypted text sync across all your devices. No ads. No subscription.';
        }
    },

    setupSwitcher() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setLanguage(btn.dataset.lang);
            });
        });
    }
};

// Initialize language on DOM load
document.addEventListener('DOMContentLoaded', () => {
    languageManager.init();
});

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
