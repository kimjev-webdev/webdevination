//Functions for the one card tarot reading 

// Handle Shuffle button click (with animation)
function handleShuffleButtonClick(shuffledDeck, cardStack, selectedCardContainer) {
  // Show shuffled card stack and hide selected card container
  cardStack.style.display = 'flex'; // Show shuffled cards with flexbox
  selectedCardContainer.style.display = 'none'; // Hide the selected card container

  shuffleDeck(shuffledDeck); // Shuffle deck before showing cards again
  shuffleAnimation(); // Start shuffle animation

  setTimeout(() => {
    alert("Deck shuffled! Click 'Deal' to draw a card.");
  }, 3500); // Wait for animation to finish before shuffling deck
}

// Handle Deal button click (draw a card)
function handleDealButtonClick(shuffledDeck, cardStack, selectedCardContainer) {
  // Hide shuffled cards and show the selected card
  cardStack.style.display = 'none'; // Hide the shuffled card stack
  selectedCardContainer.style.display = 'flex'; // Show the selected card with flexbox

  // Draw a card when the "Deal" button is clicked
  drawCard(shuffledDeck, selectedCardContainer);
}

// Fetch tarot JSON and initialize the game logic
function initializeGame(tarotDeck) {
  const shuffleButton = document.getElementById('shuffle');
  const dealButton = document.getElementById('deal');
  const selectedCardContainer = document.getElementById('selected-cardone');
  const cardStack = document.getElementById('card-stack'); // Card stack to show shuffled cards

  let shuffledDeck = [...tarotDeck]; // Create a copy of the tarot deck to shuffle

  // Handle Shuffle button click event
  shuffleButton.addEventListener('click', () => {
    handleShuffleButtonClick(shuffledDeck, cardStack, selectedCardContainer);
  });

  // Handle Deal button click event
  dealButton.addEventListener('click', () => {
    handleDealButtonClick(shuffledDeck, cardStack, selectedCardContainer);
  });
}

// DOMContentLoaded event listener (moved to the bottom)
document.addEventListener('DOMContentLoaded', () => {
  // Load the tarot JSON file and initialize the game logic
  fetch('./assets/tarot.json')
    .then(response => response.json())
    .then(data => {
      const tarotDeck = data.tarot;
      initializeGame(tarotDeck);
    })
    .catch(error => console.error('Error loading tarot deck:', error));
});
