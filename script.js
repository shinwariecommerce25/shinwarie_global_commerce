const domainsData = {
    "AI Tech Infrastructure": ["Logicvaultai.com", "Resetllm.com", "Cyberpathai.com", "Opticesai.com"],
    "AI Agents & Automation": ["Logicvaultagent.com", "Agentswiftai.com", "Brainpathagent.com", "Thepathagent.com", "Openpayagent.com"],
    "Digital Growth & Fintech": ["Brainpromote.com", "Leapayai.com", "Leapxpay.com"]
};

const langConfig = {
    en: { 
        h: "Specializing in AI-Driven Domains and Global Tech Infrastructure.", 
        b: "Buy Now", o: "Make Offer", c: "Direct Acquisition", 
        p: "Privacy Policy", t: "Terms of Service", 
        v: "View Portfolio", call: "Call Us", email: "Email Sales", wa: "WhatsApp Business",
        navP: "Portfolio", navC: "Contact"
    },
    ar: { 
        h: "\u0645\u062a\u062e\u0635\u0635\u0648\u0646 \u0641\u064a \u0646\u0637\u0627\u0642\u0627\u062a \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0648\u0627\u0644\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627.", 
        b: "\u0634\u0631\u0627\u0621 \u0627\u0644\u0622\u0646", o: "\u062a\u0642\u062f\u064a\u0645 \u0639\u0631\u0636", c: "\u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0645\u0628\u0627\u0634\u0631", 
        p: "\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629", t: "\u0634\u0631\u0648\u0637 \u0627\u0644\u062e\u062f\u0645\u0629", 
        v: "\u0639\u0631\u0636 \u0627\u0644\u0645\u062d\u0641\u0638\u0629", call: "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627", email: "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a", wa: "\u0648\u0627\u062a\u0633\u0627\u0628 \u0628\u064a\u0632\u0646\u0633",
        navP: "\u0627\u0644\u0645\u062d\u0641\u0638\u0629", navC: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627"
    }
};

function changeLanguage(lang) {
    const d = langConfig[lang] || langConfig['en'];
    
    // Update Texts
    document.getElementById('txt-hero-title').innerText = d.h;
    document.getElementById('txt-contact-title').innerText = d.c;
    document.getElementById('txt-view-btn').innerText = d.v;
    document.getElementById('nav-portfolio').innerText = d.navP;
    document.getElementById('nav-contact').innerText = d.navC;
    document.getElementById('txt-wa-label').innerText = d.wa;
    document.getElementById('txt-call').innerText = d.call;
    document.getElementById('txt-email').innerText = d.email;

    // Refresh Portfolio List
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
                        <a href="https://sedo.com/search/details/?domain=${name}" target="_blank" class="btn-buy">${d.b}</a>
                        <button class="btn-offer" onclick="window.location.href='mailto:contact@shinwariecommerce.com?subject=Offer for ${name}'">${d.o}</button>
                    </div>
                ).join('')}
            </div>
        ;
        list.appendChild(section);
    }

    // RTL for Arabic
    document.getElementById('main-body').className = (lang === 'ar' ? 'rtl-mode' : '');
    document.querySelectorAll('.btn-lang').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + lang).classList.add('active');
}

// Start with English
document.addEventListener('DOMContentLoaded', () => changeLanguage('en'));
