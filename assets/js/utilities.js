// utilities.js

/**
 * Shuffle the deck in place using the Fisher-Yates algorithm.
 * @param {Array} shuffledDeck - The deck to be shuffled.
 */
function shuffleDeck(shuffledDeck) {
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]]; // Swap
    }
}

/**
 * Create a shuffle animation for the cards.
 */
function shuffleAnimation() {
    const cards = document.querySelectorAll(".shufflecard");

    // Set initial positions and opacity for animation reset
    cards.forEach(card => {
        card.style.opacity = "1";
        card.style.transform = "translate(0, 0)";
    });

    // Scatter the cards
    cards.forEach(card => {
        const randomX = Math.random() * 500 - 250; // Random position between -250 and 250
        const randomY = Math.random() * 500 - 250; // Random position between -250 and 250
        const randomRotation = Math.random() * 720 - 360; // Random rotation between -360 and 360 degrees

        setTimeout(() => {
            card.style.transition = "transform 1s ease-out, opacity 1s ease-out";
            card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
            card.style.opacity = "0.6"; // Slightly transparent when scattered
        }, Math.random() * 200); // Random delay to make it look more chaotic
    });

    // After 3 seconds, return cards to center position
    setTimeout(() => {
        cards.forEach(card => {
            card.style.transition = "transform 1s ease-in, opacity 1s ease-in";
            card.style.transform = "translate(0, 0)"; // Return to center
            card.style.opacity = "1"; // Fully opaque
        });
    }, 3000); // 3 seconds delay before returning cards
}

/**
 * Create a card element (front and back) to be used in the UI.
 * @param {Object} card - The card data object containing the name, response, interpretation, and image.
 * @returns {Element} - The card element.
 */
function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('selected-card');
    cardElement.setAttribute('data-name', card.name);
    cardElement.setAttribute('data-response', card.response);
    cardElement.setAttribute('data-interpretation', card.interpretation);

    // Create the back of the card (initially visible)
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    const cardBackImage = document.createElement('img');
    cardBackImage.src = './assets/images/cardbacks.webp'; // Set card back image
    cardBackImage.alt = 'Card Back';
    cardBack.appendChild(cardBackImage);

    // Create the front of the card (hidden initially)
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    const cardFrontImage = document.createElement('img');
    cardFrontImage.src = card.image; // Use front image path from JSON
    cardFrontImage.alt = card.name;
    cardFront.appendChild(cardFrontImage);

    // Append front and back to card element
    cardElement.appendChild(cardBack);
    cardElement.appendChild(cardFront);

    return cardElement;
}

/**
 * Display the details of a card after it's flipped.
 * @param {Object} card - The card data object containing the name, response, and interpretation.
 * @param {Element} container - The container element where the card details should be displayed.
 */
function showCardDetails(card, container) {
    const cardDetails = `
        <div class="card-info">
            <p class="card-response">The answer is...${card.response}!</p>
            <p class="card-details-text">${card.interpretation}</p>
        </div>
    `;
    container.innerHTML += cardDetails;
}

export { shuffleDeck, shuffleAnimation, createCardElement, showCardDetails };
