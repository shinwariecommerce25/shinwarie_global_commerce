const FORM_LINK = "https://formspree.io/f/mykbagyq"; 

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

// وظيفة إنشاء لينك Sedo بشكل سليم
function sedoLink(domain) {
  return https://sedo.com/search/details/?domain=${domain};
}

// إنشاء كارت الدومين (تعديل الـ Template Literals)
function card(domain) {
  return 
    <div class="card">
      <div style="font-size: 0.7rem; color: var(--primary); margin-bottom: 10px;">PREMIUM ASSET</div>
      <h3>${domain.toUpperCase()}</h3>
      
      <a href="${sedoLink(domain)}" target="_blank" class="btn-buy">
        Buy Now
      </a>

      <a href="${FORM_LINK}" target="_blank" class="btn-offer">
        Make Offer
      </a>
    </div>
  ;
}

// إنشاء قسم (Section)
function section(title, list) {
  return 
    <h2 class="section-title">${title}</h2>
    <div class="grid">
      ${list.map(domain => card(domain)).join("")}
    </div>
  ;
}

// التشغيل النهائي
document.addEventListener("DOMContentLoaded", function () {
  const box = document.getElementById("domains");

  if (box) {
    box.innerHTML = 
      ${section("🔥 Featured Domains", data.featured)}
      ${section("🤖 AI Infrastructure", data.ai)}
      ${section("⚙️ AI Agents", data.agents)}
      ${section("💰 Fintech & Growth", data.fintech)}
    ;
  }
});
