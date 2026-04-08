const translations = {
    en: {
        heroTitle: "Elevate Your <span>Digital Identity</span>",
        heroDesc: "Curated premium domains for AI and Fintech pioneers.",
        gridTitle: "Available Portfolio", contactTitle: "Direct Acquisition",
        buy: "Buy Now", offer: "Make Offer", modalTitle: "Make an Offer",
        pName: "Full Name", pEmail: "Email", pOffer: "Amount ($)", pSubmit: "Submit Offer"
    },
    ar: {
        heroTitle: "ارتقِ بهويتك <span>الرقمية</span>",
        heroDesc: "نطاقات حصرية لرواد التكنولوجيا والذكاء الاصطناعي.",
        gridTitle: "المجموعة المتاحة", contactTitle: "الاستحواذ المباشر",
        buy: "شراء الآن", offer: "تقديم عرض", modalTitle: "قدم عرضك",
        pName: "الاسم", pEmail: "الايميل", pOffer: "المبلغ ($)", pSubmit: "إرسال"
    },
    fr: {
        heroTitle: "Identité <span>Numérique</span>",
        heroDesc: "Domaines premium pour l'IA et la Fintech.",
        gridTitle: "Portfolio Disponible", contactTitle: "Acquisition Directe",
        buy: "Acheter", offer: "Offrir", modalTitle: "Faire une offre",
        pName: "Nom", pEmail: "Email", pOffer: "Montant ($)", pSubmit: "Envoyer"
    },
    es: {
        heroTitle: "Identidad <span>Digital</span>",
        heroDesc: "Dominios premium para pioneros en IA.",
        gridTitle: "Portafolio Disponible", contactTitle: "Adquisición",
        buy: "Comprar", offer: "Oferta", modalTitle: "Hacer oferta",
        pName: "Nombre", pEmail: "Email", pOffer: "Monto ($)", pSubmit: "Enviar"
    }
};

const domains = [
    "Shinwariecommerce.com", "Logicvaultai.com", "Factorypay.com", "Logicvaultagent.com", 
    "Agentswiftai.com", "Brainpromote.com", "Brainpathagent.com", "Cyberpathai.com", 
    "Openpayagent.com", "Leapayai.com", "Leapxpay.com", "Opticesai.com", 
    "Thepathagent.com", "Resetllm.com"
];

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
