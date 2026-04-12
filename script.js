const FORM_LINK = "https://formspree.io/f/mykbagyq";
const data = {
    featured: ["logicvaultai.com", "leapxpay.com", "resetllm.com"],
    ai: ["cyberpathai.com", "opticesai.com", "leappayai.com"],
    agents: ["logicvaultagent.com", "agentswiftai.com", "brainpathagent.com", "thepathagent.com", "openpayagent.com"],
    fintech: ["leappayai.com", "leapxpay.com", "brainpromote.com"]
};
// وظيفة لفتح النموذج
function openOfferModal(domain) { document.getElementById('targetDomain').value = domain; document.getElementById('modalTitle').innerText = "Offer for " + domain; document.getElementById('offerModal').style.display = "block";
}
function closeModal() { document.getElementById('offerModal').style.display = "none";
}
// معالجة البحث (Search) - شغال بمجرد الكتابة
function searchDomains() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        let name = cards[i].querySelector('h3').innerText.toLowerCase();
        cards[i].style.display = name.includes(input) ? "block" : "none";
    }
}
function renderAll() {
    const box = document.getElementById("domains");
    if (!box) return;
    let h = "";
    function c(t, l) {
        let s = '<h2 class="section-title">' + t + '</h2><div class="grid">';
        l.forEach(d => {
            s += '<div class="card">' +
                 '<small style="color:#38bdf8">PREMIUM ASSET</small><h3>' + d + '</h3>' +
                 '<div class="trust-icons"><img src="https://logo.clearbit.com/sedo.com" title="Sedo Verified"> <img src="https://logo.clearbit.com/godaddy.com" title="GoDaddy Registered"> <img src="https://logo.clearbit.com/escrow.com" title="Escrow Secure"></div>' +
                 '<a href="https://sedo.com/search/details/?domain=' + d + '" target="_blank" class="btn-buy">Buy on Sedo</a>' +
                 '<button onclick="openOfferModal(\'' + d + '\')" class="btn-offer">Make Direct Offer</button></div>';
        });
        return s + '</div>';
    }
    box.innerHTML = c("🔥 Featured Domains", data.featured) + c("🤖 AI Infrastructure", data.ai) + c("⚙️ AI Agents", data.agents) + c("💰 Fintech & Growth", data.fintech);
}
// إرسال البيانات لـ Formspree
document.getElementById('offerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerText = "Sending...";
    fetch(FORM_LINK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Domain: document.getElementById('targetDomain').value,
            Name: document.getElementById('userName').value,
            Email: document.getElementById('userEmail').value,
            Phone: document.getElementById('userPhone').value,
            Price: document.getElementById('userPrice').value
        })
    }).then(() => {
        alert("Offer Sent Successfully!");
        closeModal();
        e.target.reset();
        btn.innerText = "Submit My Offer";
    });
});
window.onload = renderAll;
