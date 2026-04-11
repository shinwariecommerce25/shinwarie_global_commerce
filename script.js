const FORM_LINK = "https://formspree.io/f/mykbagyq"; // 

const domains = [
"Logicvaultai.com",
"Resetllm.com",
"Cyberpathai.com",
"Opticesai.com",
"Agentswiftai.com"
];

function renderDomains(){
    const box = document.getElementById("domains");

    box.innerHTML = 
        <div class="grid">
            ${domains.map(d => 
                <div class="card">
                    <h3>${d}</h3>

                    <a href="https://wa.me/17312734860?text=I'm interested in ${d}" class="btn-buy">
                        Buy Now
                    </a>

                    <a href="${FORM_LINK}?domain=${d}" class="btn-offer">
                        Make Offer
                    </a>
                </div>
            ).join("")}
        </div>
    ;
}

/* Languages */
const lang = {
en:{h:"Premium AI Domains Ready for Acquisition",v:"View Portfolio",c:"Direct Contact",p:"Portfolio",co:"Contact"},
ar:{h:"نطاقات AI مميزة للبيع",v:"عرض الدومينات",c:"تواصل مباشر",p:"الدومينات",co:"تواصل"},
fr:{h:"Domaines IA premium",v:"Voir",c:"Contact",p:"Portfolio",co:"Contact"},
es:{h:"Dominios IA premium",v:"Ver",c:"Contacto",p:"Portafolio",co:"Contacto"},
it:{h:"Domini AI premium",v:"Visualizza",c:"Contatto",p:"Portfolio",co:"Contatto"}
};

function changeLanguage(l){
    const d = lang[l];

    document.getElementById("hero-title").innerText = d.h;
    document.getElementById("viewBtn").innerText = d.v;
    document.getElementById("contact-title").innerText = d.c;
    document.getElementById("navP").innerText = d.p;
    document.getElementById("navC").innerText = d.co;

    document.body.style.direction = (l === "ar") ? "rtl" : "ltr";

    document.querySelectorAll(".btn-lang").forEach(b=>b.classList.remove("active"));
    document.getElementById("lang-"+l).classList.add("active");
}

renderDomains();
