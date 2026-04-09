const domainsData = {
    "AI Tech Infrastructure": ["Logicvaultai.com","Cyberpathai.com","Opticesai.com","Agentswiftai.com"],
    "AI Agents": ["Logicvaultagent.com","Brainpathagent.com","Thepathagent.com"],
    "Fintech / Payment": ["Leappayai.com","Leapxpay.com","Openpayagent.com"],
    "Digital Growth": ["Brainpromote.com","Resetllm.com"]
};

const langConfig = {
    en: { h:"Specializing in AI-Driven Domains and Global Tech Infrastructure.", b:"Buy Now", o:"Make Offer", c:"Direct Acquisition", v:"View Portfolio", call:"Call Us", email:"Email Sales", wa:"WhatsApp Business", navP:"Portfolio", navC:"Contact" },
    ar: { h:"متخصصون في نطاقات الذكاء الاصطناعي والتكنولوجيا.", b:"شراء الآن", o:"تقديم عرض", c:"استحواذ مباشر", v:"عرض المحفظة", call:"اتصل بنا", email:"البريد الإلكتروني", wa:"واتساب بيزنس", navP:"المحفظة", navC:"تواصل معنا" },
    fr: { h:"Spécialisé dans les domaines pilotés par l'IA.", b:"Acheter Maintenant", o:"Faire Offre", c:"Acquisition Directe", v:"Voir le Portfolio", call:"Appeler", email:"Email", wa:"WhatsApp Business", navP:"Portfolio", navC:"Contact" },
    es: { h:"Especializados en dominios impulsados por IA.", b:"Comprar Ahora", o:"Hacer Oferta", c:"Adquisición Directa", v:"Ver Portafolio", call:"Llamar", email:"Correo Electrónico", wa:"WhatsApp Business", navP:"Portafolio", navC:"Contacto" },
    it: { h:"Specializzati in domini AI.", b:"Acquista Ora", o:"Fai Offerta", c:"Acquisizione Diretta", v:"Visualizza Portfolio", call:"Chiama", email:"Email", wa:"WhatsApp Business", navP:"Portfolio", navC:"Contatto" }
};

function renderDomains(d) {
    const list = document.getElementById('portfolio-list');
    if(!list) return;
    list.innerHTML = '';

    Object.keys(domainsData).forEach(group=>{
        const section = document.createElement('div');
        section.className = 'category-block';
        section.innerHTML = <h3 class="category-name">${group}</h3>
        <div class="portfolio-grid">
        ${domainsData[group].map(name=>
            <div class="card">
                <h3>${name}</h3>
                <a href="https://sedo.com/search/details/?domain=${name}" target="_blank" class="btn-buy">${d.b}</a>
                <button class="btn-offer" data-domain="${name}">${d.o}</button>
            </div>
        ).join('')}
        </div>;
        list.appendChild(section);
    });

    document.querySelectorAll('.btn-offer').forEach(btn=>{
        btn.addEventListener('click', ()=>{
            window.location.href='https://formspree.io/f/mykbagyq';
        });
    });
}

// SEARCH FILTER
document.getElementById('search-input').addEventListener('input', e=>{
    const filter = e.target.value.toLowerCase();
    Object.keys(domainsData).forEach(group=>{
        const filtered = domainsData[group].filter(name=>name.toLowerCase().includes(filter));
        const section = document.querySelector(.category-block h3:contains("${group}")) || null;
        if(section) {
            const parent = section.parentElement.querySelector('.portfolio-grid');
            parent.innerHTML = filtered.map(name=>
                <div class="card">
                    <h3>${name}</h3>
                    <a href="https://sedo.com/search/details/?domain=${name}" target="_blank" class="btn-buy">Buy Now</a>
                    <button class="btn-offer" data-domain="${name}">Make Offer</button>
                </div>
            ).join('');
            parent.style.display = filtered.length? 'flex':'none';
        }
    });
});

function changeLanguage(lang){
    const d = langConfig[lang] || langConfig['en'];
    document.getElementById('txt-hero-title').innerText=d.h;
    document.getElementById('txt-contact-title').innerText=d.c;
    document.getElementById('txt-view-btn').innerText=d.v;
    document.getElementById('nav-portfolio').innerText=d.navP;
  document.getElementById('nav-contact').innerText=d.navC;
    document.getElementById('txt-wa-label').innerText=d.wa;
    document.getElementById('txt-call').innerText=d.call;
    document.getElementById('txt-email').innerText=d.email;
    renderDomains(d);
    document.getElementById('main-body').className=(lang==='ar'?'rtl-mode':'');
    document.querySelectorAll('.btn-lang').forEach(btn=>btn.classList.remove('active'));
    const activeBtn = document.getElementById('btn-'+lang);
    if(activeBtn) activeBtn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', ()=>{ changeLanguage('en'); });
