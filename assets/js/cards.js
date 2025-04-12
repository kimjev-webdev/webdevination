// Function to generate the card section (cards in rows of 4)
function generateCardSection(cards, suit) {
    let cardHtml = '<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">';
    cards.forEach(card => {
        const imagePath = `assets/images/cardfronts/${card.name.toLowerCase().replace(/ /g, '')}.webp`;

        // Replace headers with emojis, bold tags, and convert \n to <br>
        const specificsHtml = card.specifics
            .replace(/LOVE:/g, "<strong>💜 LOVE:</strong>")
            .replace(/CAREER:/g, "<strong>✨ CAREER:</strong>")
            .replace(/FINANCE:/g, "<strong>💰 FINANCE:</strong>")
            .replace(/HEALTH:/g, "<strong>🌿 HEALTH:</strong>")
            .replace(/\n/g, "<br>");

        cardHtml += `
            <div class="col">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="${imagePath}" class="card-img-top" alt="${card.name}">
                        </div>
                        <div class="flip-card-back">
                            <p>${specificsHtml}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    cardHtml += '</div>';
    return cardHtml;
}

document.addEventListener("DOMContentLoaded", function () {
    // Fetch the tarot JSON data
    fetch('assets/tarot.json')
        .then(response => response.json())
        .then(data => {
            const majorArcanaCards = document.getElementById('majorArcanaCards');
            const wandsCards = document.getElementById('wandsCards');
            const cupsCards = document.getElementById('cupsCards');
            const swordsCards = document.getElementById('swordsCards');
            const pentaclesCards = document.getElementById('pentaclesCards');

            // Define the Major Arcana card names
            const majorArcanaNames = [
                "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
                "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", 
                "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", 
                "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World"
            ];

            // Separate Major Arcana and Minor Arcana
            const majorArcana = data.tarot.filter(card => majorArcanaNames.includes(card.name));
            const minorArcana = data.tarot.filter(card => !majorArcanaNames.includes(card.name));

            // Generate Major Arcana HTML (cards in rows of 4)
            majorArcanaCards.innerHTML = generateCardSection(majorArcana, 'major');

            // Filter the minor arcana by suit and generate card sections for each suit
            const suits = ['wands', 'cups', 'swords', 'pentacles'];

            suits.forEach(suit => {
                const suitCards = minorArcana.filter(card => card.name.toLowerCase().includes(suit));
                const suitContainer = document.getElementById(`${suit}Cards`);
                suitContainer.innerHTML = generateCardSection(suitCards, suit);
            });
        })
        .catch(error => console.error("Error loading tarot data:", error));
});
