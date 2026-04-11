const FORM_LINK = "https://formspree.io/f/mykbagyq"

const data = {
  featured: ["logicvaultai.com", "leapxpay.com", "resetllm.com"],
  ai: ["logicvaultai.com", "resetllm.com", "cyberpathai.com", "opticesai.com"],
  agents: ["logicvaultagent.com", "agentswiftai.com", "brainpathagent.com", "thepathagent.com", "openpayagent.com"],
  fintech: ["leappayai.com", "leapxpay.com", "brainpromote.com"]
};

function sedoLink(domain) {
  return https://sedo.com/search/details/?domain=${domain}
}

// وظيفة البحث
function searchDomains() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('card');
    
    for (let i = 0; i < cards.length; i++) {
        let domainName = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (domainName.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function card(domain) {
  return 
    <div class="card">
      <small style="color: var(--primary); letter-spacing: 1px;">PREMIUM ASSET</small>
      <h3>${domain.toLowerCase()}</h3>
      <a href="${sedoLink(domain)}" target="_blank" class="btn-buy">Buy Now (Sedo)</a>
      <a href="${FORM_LINK}?subject=Offer_for_${domain}" target="_blank" class="btn-offer">Make Offer</a>
    </div>
  ;
}

function section(title, list) {
  return 
    <div class="section-group">
        <h2 class="section-title">${title}</h2>
        <div class="grid">${list.map(domain => card(domain)).join("")}</div>
    </div>
  ;
}

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
})
