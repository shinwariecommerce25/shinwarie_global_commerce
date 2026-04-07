// Clean scroll and hover interactions
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    // Hover effect for service cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.4s ease';
            card.style.backgroundColor = '#0f172a';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.backgroundColor = 'transparent';
        });
    });

    // Simple console log for deployment check
    console.log("Shinwari Global Platform: Fully Operational");
});
