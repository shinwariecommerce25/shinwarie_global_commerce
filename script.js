for (const cat in domainsData) {
        const section = document.createElement('div');
        section.className = 'category-block';
        section.innerHTML = 
            <h3 class="category-name">${cat}</h3>
            <div class="grid">
                ${domainsData[cat].map(name => 
                    <div class="card">
                        <h3>${name}</h3>
                        <a href="https://sedo.com/search/details/?domain=${name}" target="_blank" class="btn-buy">${d.b}</a>
                        <button class="btn-offer" onclick="openModal('${name}')">${d.o}</button>
                    </div>
                ).join('')}
            </div>
        ;
        portfolio.appendChild(section);
    }

    document.getElementById('main-body').className = (lang === 'ar' ? 'rtl-mode' : '');
    document.querySelectorAll('.btn-lang').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-' + lang).classList.add('active');
}

changeLanguage('en');

window.onclick = function(event) {
    if (event.target == document.getElementById('offerModal')) closeModal();
}

document.getElementById('offerForm').onsubmit = function(e) {
    e.preventDefault();
    const domain = document.getElementById('selectedDomain').value;
    alert("Offer for " + domain + " has been sent successfully!");
    closeModal();
};
