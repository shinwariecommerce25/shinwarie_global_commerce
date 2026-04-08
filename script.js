document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal Elements on Scroll
    const revealOnScroll = () => {
        const elements = document.querySelectorAll('.asset-card, .c-box, .section-title');
        const windowHeight = window.innerHeight;

        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
                el.style.transition = "all 0.6s ease-out";
            }
        });
    };

    // Initial state for animation
    const initAnimation = () => {
        const elements = document.querySelectorAll('.asset-card, .c-box');
        elements.forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
        });
    };

    initAnimation();
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    console.log("SHINWARI GLOBAL | Logic Vault System Active");
});
