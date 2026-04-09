const domainsData = {
  "AI Tech Infrastructure":["Logicvaultai.com","Resetllm.com","Cyberpathai.com","Opticesai.com"],
  "AI Agents & Automation":["Logicvaultagent.com","Agentswiftai.com","Brainpathagent.com","Thepathagent.com","Openpayagent.com"],
  "Digital Growth & Fintech":["Brainpromote.com","Leapayai.com","Leapxpay.com"]
};

const langConfig = {
  en:{h:"Specializing in AI-Driven Domains and Global Tech Infrastructure.",b:"Buy Now",o:"Make Offer",c:"Direct Acquisition",v:"View Portfolio",call:"Call Us",email:"Email Sales",wa:"WhatsApp Business",navAbout:"About Product",navP:"Portfolio",navC:"Contact"},
  ar:{h:"متخصصون في نطاقات الذكاء الاصطناعي والتكنولوجيا.",b:"شراء الآن",o:"تقديم عرض",c:"استحواذ مباشر",v:"عرض المحفظة",call:"اتصل بنا",email:"البريد الإلكتروني",wa:"واتساب بيزنس",navAbout:"حول المنتج",navP:"المحفظة",navC:"تواصل معنا"},
  es:{h:"Especializados en dominios de IA y tecnología global.",b:"Comprar Ahora",o:"Hacer Oferta",c:"Adquisición Directa",v:"Ver Portafolio",call:"Llamar",email:"Correo Electrónico",wa:"WhatsApp Business",navAbout:"Sobre Producto",navP:"Portafolio",navC:"Contacto"},
  fr:{h:"Spécialisé dans les domaines IA et l'infrastructure technologique.",b:"Acheter Maintenant",o:"Faire Offre",c:"Acquisition Directe",v:"Voir Portefeuille",call:"Appeler",email:"Email",wa:"WhatsApp Business",navAbout:"À propos",navP:"Portefeuille",navC:"Contact"},
  it:{h:"Specializzati in domini IA e infrastrutture tecnologiche.",b:"Acquista Ora",o:"Fai Offerta",c:"Acquisizione Diretta",v:"Visualizza Portfolio",call:"Chiama",email:"Email",wa:"WhatsApp Business",navAbout:"Informazioni Prodotto",navP:"Portfolio",navC:"Contatto"}
};

function renderDomains(d){
  const list = document.getElementById('portfolio-list');
  list.innerHTML='';
  Object.keys(domainsData).forEach(group=>{
    const section=document.createElement('div');
    section.className='category-block';
    section.innerHTML=<h3 class="category-name">${group}</h3><div class="grid">${domainsData[group].map(name=>
      <div class="card">
        <h3>${name}</h3>
        <a href="https://sido-domain.com" target="_blank" class="btn-buy">${d.b}</a>
        <button class="btn-offer" data-domain="${name}">${d.o}</button>
      </div>).join('')}</div>;
    list.appendChild(section);
  });
  document.querySelectorAll('.btn-offer').forEach(btn=>{btn.addEventListener('click',()=>{document.getElementById('offerModal').style.display='flex';});});
}

function changeLanguage(lang){
  const d = langConfig[lang]||langConfig['en'];
  document.getElementById('txt-hero-title').innerText=d.h;
  document.getElementById('txt-contact-title').innerText=d.c;
  document.getElementById('nav-about').innerText=d.navAbout;
  document.getElementById('nav-portfolio').innerText=d.navP;
  document.getElementById('nav-contact').innerText=d.navC;
  document.getElementById('txt-wa-label').innerText=d.wa;
  document.getElementById('txt-call').innerText=d.call;
  document.getElementById('txt-email').innerText=d.email;
  renderDomains(d);
  document.getElementById('main-body').className=(lang==='ar'?'rtl-mode':'');
  document.querySelectorAll('.btn-lang').forEach(btn=>btn.classList.remove('active'));
  const activeBtn=document.getElementById('btn-'+lang);
  if(activeBtn) activeBtn.classList.add('active');
}

document.addEventListener('DOMContentLoaded',()=>{
  changeLanguage('en');
  const modal=document.getElementById('offerModal');
  document.getElementById('openModal').addEventListener('click',()=>{modal.style.display='flex';});
  document.getElementById('closeModal').addEventListener('click',()=>{modal.style.display='none';});
  window.addEventListener('click',(e)=>{if(e.target===modal)modal.style.display='none';});
});
