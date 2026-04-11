const FORM_LINK = "https://formspree.io/f/mykbagyq"; // حط لينك الفورم هنا

// الدومينات متقسمة
const data = {
  featured: [
    "logicvaultai.com",
    "resetllm.com",
    "leapxpay.com"
  ],

  ai: [
    "logicvaultai.com",
    "resetllm.com",
    "cyberpathai.com",
    "opticesai.com"
  ],

  agents: [
    "logicvaultagent.com",
    "agentswiftai.com",
    "brainpathagent.com",
    "thepathagent.com",
    "openpayagent.com"
  ],

  fintech: [
    "leappayai.com",
    "leapxpay.com",
    "brainpromote.com"
  ]
};

// لينك Sedo
function sedoLink(domain) {
  return https://sedo.com/search/details/?domain=${domain};
}

// كارت دومين
function card(domain) {
  return 
    <div class="card">
      <h3>${domain}</h3>

      <a href="${sedoLink(domain)}" target="_blank" class="btn-buy">
        Buy Now
      </a>

      <a href="${FORM_LINK}?domain=${domain}" class="btn-offer">
        Make Offer
      </a>
    </div>
  ;
}

// render section
function section(title, list) {
  return 
    <h2 class="section-title">${title}</h2>
    <div class="grid">
      ${list.map(card).join("")}
    </div>
  ;
}

// تشغيل
document.addEventListener("DOMContentLoaded", function () {
  const box = document.getElementById("domains");

  box.innerHTML = 
    ${section("🔥 Featured Domains", data.featured)}
    ${section("🤖 AI Infrastructure", data.ai)}
    ${section("⚙️ AI Agents", data.agents)}
    ${section("💰 Fintech & Growth", data.fintech)}
  ;
});
