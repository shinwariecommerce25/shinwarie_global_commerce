const domainsData = {
    "AI Tech": ["Logicvaultai.com", "Resetllm.com", "Cyberpathai.com", "Opticesai.com"],
    "Agents & Tools": ["Logicvaultagent.com", "Agentswiftai.com", "Brainpathagent.com", "Thepathagent.com", "Openpayagent.com"],
    "Growth": ["Brainpromote.com"],
    "Fintech": ["Leapayai.com", "Leapxpay.com"]
};

// All text is strictly mapped to English keys to keep code clean
const langConfig = {
    en: { h: "Specializing in AI-Driven Domains and Global Tech Infrastructure.", b: "Buy Now", o: "Make Offer", c: "Direct Acquisition", p: "Privacy", r: "Refund", t: "Terms", v: "View Portfolio" },
    ar: { h: "Specializing in AI Domains (AR)", b: "Buy (AR)", o: "Offer (AR)", c: "Contact (AR)", p: "Privacy (AR)", r: "Refund (AR)", t: "Terms (AR)", v: "Portfolio (AR)" },
    fr: { h: "Spécialisé dans les domaines IA.", b: "Acheter", o: "Offrir", c: "Contact", p: "Confidentialité", r: "Remboursement", t: "Conditions", v: "Portfolio" },
    es: { h: "Especializado en dominios de IA.", b: "Comprar", o: "Oferta", c: "Contacto", p: "Privacidad", r: "Reembolso", t: "Términos", v: "Portafolio" },
    it: { h: "Specializzato in domini AI.", b: "Acquista", o: "Offerta", c: "Contatti", p: "Privacy", r: "Rimborso", t: "Termini", v: "Portfolio" }
};

function changeLanguage(lang) {
    const data = langConfig[lang];
    document.getElementById('txt-hero-title').innerText = data.h;
    document.getElementById('txt-contact-title').innerText = data.c;
    document.getElementById('txt-privacy').innerText = data.p;
    document.getElementById('txt-refund').innerText = data.r;
    document.getElementById('txt-terms').innerText = data.t;
    document.getElementById('txt-view-btn').innerText = data.v;

    const list = document.getElementById('portfolio-list');
    list.innerHTML = '';

    for (const group in domainsData) {
        const section = document.createElement('div');
        section.className = 'category-block';
        section.innerHTML = 
            <h3 class="category-name">${group}</h3>
            <div class="grid">
                ${domainsData[group].map(name => 
                    <div class="card">
                        <h3>${name}</h3>
                        <a href="https://sedo.com/search/details/?domain=${name}" target="_blank" class="btn-buy">${data.b}</a>
                        <button class="btn-offer" onclick="window.location.href='mailto:sales@shinwariecommerce.com?subject=Offer for ${name}'">${data.o}</button>
                    </div>
                ).join('')}
            </div>
        ;
        list.appendChild(section);
    }

    document.getElementById('main-body').className = (lang === 'ar' ? 'rtl-mode' : '');
    document.querySelectorAll('.btn-lang').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + lang).classList.add('active');
}

// Default start
changeLanguage('en');
