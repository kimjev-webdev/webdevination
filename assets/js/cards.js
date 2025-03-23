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

    // Function to generate the card section (cards in rows of 4)
    function generateCardSection(cards, suit) {
        let cardHtml = '<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">';
        cards.forEach(card => {
            // Construct the image path based on card name and suit
            const imagePath = `assets/images/cardfronts/${card.name.toLowerCase().replace(/ /g, '')}.webp`;

            cardHtml += `
                <div class="col">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="${imagePath}" class="card-img-top" alt="${card.name}">
                            </div>
                            <div class="flip-card-back">
                                <p>${card.specifics}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        cardHtml += '</div>';
        return cardHtml;
    }

    // CSS for the card flip (if not already included)
    const style = document.createElement('style');
    style.innerHTML = `
        .flip-card {
            width: 200px;
            height: 300px;
            perspective: 1000px; /* Make sure 3D effect works */
        }

        .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d; /* Allow the flip */
            transition: transform 0.5s;
        }

        .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden; /* Hide back when rotated */
        }

        .flip-card-front {
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .flip-card-back {
            background-color: #f8f8f8;
            color: black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 10px;
            transform: rotateY(180deg); /* Initially hide back */
        }

        /* Optional styling for the card back text */
        .flip-card-back p {
            margin: 5px 0;
            text-align: center;
        }
    `;
    document.head.appendChild(style);
});
