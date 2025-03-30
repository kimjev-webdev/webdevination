// This script handles the shuffling of the tarot deck and card drawing functionality
// Shuffling the deck, animating the shuffle, and drawing cards. It also includes a function to display card details after drawing a card

// Shuffle the tarot deck
function shuffleDeck(shuffledDeck) {
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]]; // Swap
  }
}

// Shuffle animation for card stack
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

// Draw a card and display it
function drawCard(shuffledDeck, selectedCardContainer) {
  if (shuffledDeck.length === 0) {
    alert("No more cards in the deck!");
    return; // Stop drawing if no cards are left
  }

  const drawnCard = shuffledDeck.pop(); // Get the first card and remove it from the shuffled deck

  // Create the card element (front and back)
  const cardElement = document.createElement('div');
  cardElement.classList.add('selected-card');
  cardElement.setAttribute('data-name', drawnCard.name);
  cardElement.setAttribute('data-response', drawnCard.response);
  cardElement.setAttribute('data-interpretation', drawnCard.interpretation);

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
  cardFrontImage.src = drawnCard.image; // Use front image path from JSON
  cardFrontImage.alt = drawnCard.name;
  cardFront.appendChild(cardFrontImage);

  // Append front and back to card element
  cardElement.appendChild(cardBack);
  cardElement.appendChild(cardFront);

  // Add the card to the selected card container
  selectedCardContainer.innerHTML = ''; // Clear any previous cards
  selectedCardContainer.appendChild(cardElement);

  // Ensure card back is displayed first, then flip after a delay
  setTimeout(() => {
    cardElement.classList.add('flip'); // Trigger flip animation

    // After the flip animation, reveal card details
    setTimeout(() => {
      showCardDetails(drawnCard, selectedCardContainer); // Show card details after flip
    }, 500); // Delay showing details to allow the flip to finish
  }, 1000); // Delay to ensure the back is visible first
}

// Display the card details
function showCardDetails(card, selectedCardContainer) {
  const cardDetails = `
    <div class="card-info">
        <p class="card-response">The answer is...${card.response}!</p>
        <p class="card-details-text">${card.interpretation}</p>
    </div>
  `;
  selectedCardContainer.innerHTML += cardDetails;
}

// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
  const cardbacksOne = document.querySelectorAll('#buttons-container .col-12.col-md-6 img'); // Select the images above each button

  // Export these functions to be used in other scripts
  window.shuffleDeck = shuffleDeck;
  window.shuffleAnimation = shuffleAnimation;
  window.drawCard = drawCard;
  window.showCardDetails = showCardDetails;
});
