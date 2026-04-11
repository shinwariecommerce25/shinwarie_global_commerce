const FORM_LINK = "https://formspree.io/f/mykbagyq";
const data = {featured: ["logicvaultai.com", "leapxpay.com", "resetllm.com"],
ai: ["cyberpathai.com", "opticesai.com", "leappayai.com"],
agents: ["logicvaultagent.com", "agentswiftai.com", "brainpathagent.com", "thepathagent.com", "openpayagent.com"],
fintech: ["leappayai.com", "leapxpay.com", "brainpromote.com"]
};
const sedoLink = (d) => `https://sedo.com/search/details/?domain${d}`;
const card = (d) => `<div class="card"><small style="color:#38bdf8">PREMIUM ASSET</small><h3>${d}</h3><a href="${sedoLink(d)}" target="_blank" class="btn-buy">Buy Now (Sedo)</a><a href="${FORM_LINK}?subject=Offer_for_${d}" target="_blank" class="btn-offer">Make Offer</a></div>`;
const section = (t, l) => `<div class="section-group"><h2 class="section-title">${t}</h2><div class="grid">${l.map(d => card(d)).join("")}</div></div>`;
function renderAll() {
const box = document.getElementById("domains");if (box){
box.innerHTML = section("🔥 Featured Domains", data.featured) + section("🤖 AI Infrastructure", data.ai) + section("⚙️ AI Agents", data.agents) + section("💰 Fintech & Growth", data.fintech);}}
window.onload = renderAll;
function searchDomains() {
let input = document.getElementById('searchInput').value.toLowerCase();
let cards = document.getElementsByClassName('card');
for (let i = 0; i < cards.length; i{letname = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
cards[i].style.display = name.includes(input) ? "" : "none";}
