// This file contains the logic for the three-card tarot reading game. 
// It handles the shuffling of the tarot deck, drawing three cards, and displaying them in the PAST, PRESENT, and FUTURE columns. 
// The game also includes a shuffle animation for the card stack and a function to display card details after drawing them.

// Handle Shuffle button click (with animation)
function handleShuffleButtonClick(shuffledDeck, threecardStack, cardsContainer) {
  // Show shuffled card stack and hide selected card container
  threecardStack.style.visibility = 'visible'; // Make shuffled cards visible
  cardsContainer.style.visibility = 'hidden'; // Hide the cards container

  shuffleDeck(shuffledDeck); // Shuffle deck (from utilities.js)
  shuffleAnimation(); // Start shuffle animation (from utilities.js)

  setTimeout(() => {
    alert("Deck shuffled! Click 'Deal' to draw three cards.");
  }, 3500); // Wait for animation to finish before shuffling deck
}

// Handle Deal button click (draw three cards)
function handleDealButtonClick(shuffledDeck, threecardStack, cardsContainer, pastColumn, presentColumn, futureColumn) {
  // Hide shuffled cards and show the cards container
  threecardStack.style.visibility = 'hidden'; // Hide the shuffled card stack
  cardsContainer.style.visibility = 'visible'; // Show the cards container

  // Shuffle the deck before drawing three random cards
  shuffleDeck(shuffledDeck); // Shuffle deck (from utilities.js)
  // Draw three random cards and display them in columns
  drawThreeCards(shuffledDeck, pastColumn, presentColumn, futureColumn);
}

// Draw three random cards for the PAST, PRESENT, and FUTURE columns
function drawThreeCards(shuffledDeck, pastColumn, presentColumn, futureColumn) {
  if (shuffledDeck.length < 3) {
    alert("Not enough cards left in the deck!");
    return; // Stop drawing if not enough cards are left
  }

  // Draw three cards and remove them from the shuffled deck
  const pastCard = shuffledDeck.pop();
  const presentCard = shuffledDeck.pop();
  const futureCard = shuffledDeck.pop();

  // Show the cards in their respective columns
  displayCardInColumn(pastCard, pastColumn);
  displayCardInColumn(presentCard, presentColumn);
  displayCardInColumn(futureCard, futureColumn);
}

// Display the card in a given column
function displayCardInColumn(card, column) {
  // Create the card element (front and back)
  const cardElement = document.createElement('div');
  cardElement.classList.add('selected-card');
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
  cardFront.appendChild(cardFrontImage);

  // Append front and back to card element
  cardElement.appendChild(cardBack);
  cardElement.appendChild(cardFront);

  // Append the card to the column
  column.innerHTML = ''; // Clear any previous card
  column.appendChild(cardElement);

  // Ensure card back is displayed first, then flip after a delay
  setTimeout(() => {
    cardElement.classList.add('flip'); // Trigger flip animation

    // After the flip animation, reveal card details
    setTimeout(() => {
      showCardDetails(card, column); // Show card details after flip (from utilities.js)
    }, 500); // Delay showing details to allow the flip to finish
  }, 1000); // Delay to ensure the back is visible first
}

// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
  // Load the tarot JSON file and initialize the game logic
  fetch('./assets/tarot.json')
    .then(response => response.json())
    .then(data => {
      const tarotDeck = data.tarot;
      const shuffleButton = document.getElementById('shuffle-button');
      const dealButton = document.getElementById('deal-button');
      const threecardStack = document.getElementById('threecard-stack'); // Changed this reference
      const cardsContainer = document.getElementById('cards-container');
      const pastColumn = document.getElementById('past');
      const presentColumn = document.getElementById('present');
      const futureColumn = document.getElementById('future');

      // Ensure the threecard stack is visible when the page loads
      threecardStack.style.visibility = 'visible'; // This line ensures visibility before any interaction

      let shuffledDeck = [...tarotDeck]; // Create a copy of the tarot deck to shuffle

      // Handle Shuffle button click event
      shuffleButton.addEventListener('click', () => {
        handleShuffleButtonClick(shuffledDeck, threecardStack, cardsContainer);
      });

      // Handle Deal button click event
      dealButton.addEventListener('click', () => {
        handleDealButtonClick(shuffledDeck, threecardStack, cardsContainer, pastColumn, presentColumn, futureColumn);
      });
    })
    .catch(error => console.error('Error loading tarot deck:', error));
});
