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
});];

function setLang(lang) {
    const t = translations[lang];
    document.getElementById('hero-title').innerHTML = t.heroTitle;
    document.getElementById('hero-desc').innerText = t.heroDesc;
    document.getElementById('grid-title').innerText = t.gridTitle;
    document.getElementById('contact-title').innerText = t.contactTitle;
    document.getElementById('modal-title').innerText = t.modalTitle;
    document.getElementById('p-name').placeholder = t.pName;
    document.getElementById('p-email').placeholder = t.pEmail;
    document.getElementById('p-offer').placeholder = t.pOffer;
    document.getElementById('p-submit').innerText = t.pSubmit;

    const grid = document.getElementById('domainList');
    grid.innerHTML = domains.map(d => 
        <div class="domain-card">
            <h3>${d}</h3>
            <div class="card-actions">
                <a href="https://sedo.com/search/details/?domain=${d}" target="_blank" class="buy-btn">${t.buy}</a>
                <button class="offer-btn" onclick="openForm('${d}')">${t.offer}</button>
            </div>
        </div>
    ).join('');

    if(lang === 'ar') document.body.classList.add('rtl');
    else document.body.classList.remove('rtl');

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    if(event) event.target.classList.add('active');
}

function openForm(domain) {
    document.getElementById('inquiryModal').style.display = "flex";
    document.getElementById('domainHiddenInput').value = domain;
}
function closeForm() { document.getElementById('inquiryModal').style.display = "none"; }

setLang('en');
