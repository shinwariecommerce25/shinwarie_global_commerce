const domainsData = {
    "AI Tech Infrastructure": ["Logicvaultai.com", "Resetllm.com", "Cyberpathai.com", "Opticesai.com"],
    "AI Agents & Automation": ["Logicvaultagent.com", "Agentswiftai.com", "Brainpathagent.com", "Thepathagent.com", "Openpayagent.com"],
    "Digital Growth & Fintech": ["Brainpromote.com", "Leapayai.com", "Leapxpay.com"]
};

const langConfig = {
    en: { 
        h: "Specializing in AI-Driven Domains and Global Tech Infrastructure.", 
        b: "Buy Now", o: "Make Offer", c: "Direct Acquisition", 
        v: "View Portfolio", call: "Call Us", email: "Email Sales", wa: "WhatsApp Business",
        navP: "Portfolio", navC: "Contact"
    },
    ar: { 
        h: "متخصصون في نطاقات الذكاء الاصطناعي والتكنولوجيا.", 
        b: "شراء الآن", o: "تقديم عرض", c: "استحواذ مباشر", 
        v: "عرض المحفظة", call: "اتصل بنا", email: "البريد الإلكتروني", wa: "واتساب بيزنس",
        navP: "المحفظة", navC: "تواصل معنا"
    }
};

function renderDomains(d) {
    const list = document.getElementById('portfolio-list');

    if (!list) {
        console.error("portfolio-list مش موجود");
        return;
    }

    list.innerHTML = '';

    Object.keys(domainsData).forEach(group => {
        const section = document.createElement('div');
        section.className = 'category-block';

        section.innerHTML = `
            <h3 class="category-name">${group}</h3>
            <div class="grid">
                ${domainsData[group].map(name => `
                    <div class="card">
                        <h3>${name}</h3>

                        <div style="margin-bottom:10px; color:#38bdf8; font-weight:bold;">
                            $2,499
                        </div>

                        <a href="https://sedo.com/search/details/?domain=${name}" target="_blank" class="btn-buy">
                            ${d.b}
                        </a>

                        <button class="btn-offer" data-domain="${name}">
                            ${d.o}
                        </button>
                    </div>
                `).join('')}
            </div>
        `;

        list.appendChild(section);
    });

    // زرار العرض (Event Delegation)
    document.querySelectorAll('.btn-offer').forEach(btn => {
        btn.addEventListener('click', function () {
            const domain = this.getAttribute('data-domain');
            window.location.href = `mailto:contact@shinwariecommerce.com?subject=Offer for ${domain}`;
        });
    });
}

function changeLanguage(lang) {
    const d = langConfig[lang] || langConfig['en'];

    // نصوص
    document.getElementById('txt-hero-title').innerText = d.h;
    document.getElementById('txt-contact-title').innerText = d.c;
    document.getElementById('txt-view-btn').innerText = d.v;
    document.getElementById('nav-portfolio').innerText = d.navP;
    document.getElementById('nav-contact').innerText = d.navC;
    document.getElementById('txt-wa-label').innerText = d.wa;
    document.getElementById('txt-call').innerText = d.call;
    document.getElementById('txt-email').innerText = d.email;

    renderDomains(d);

    // RTL
    document.getElementById('main-body').className = (lang === 'ar' ? 'rtl-mode' : '');

    // Active button
    document.querySelectorAll('.btn-lang').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById('btn-' + lang);
    if (activeBtn) activeBtn.classList.add('active');
}

// تشغيل
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('en');
});
