// === Function Declarations (Hoisted) ===

function handleShuffleButtonClick(shuffledDeck, cardStack, selectedCardContainer) {
  cardStack.style.display = 'flex';
  selectedCardContainer.style.display = 'none';

  shuffleDeck(shuffledDeck);          // from utilities.js
  shuffleAnimation();                 // from utilities.js

  setTimeout(function () {
    injectWin95Modal();              // from utilities.js
  }, 1200);
}

function handleDealButtonClick(shuffledDeck, cardStack, selectedCardContainer) {
  cardStack.style.display = 'none';
  selectedCardContainer.style.display = 'flex';

  drawCard(shuffledDeck, selectedCardContainer);  // from utilities.js
}

function initializeGame(tarotDeck) {
  const shuffleButton = document.getElementById('shuffle');
  const dealButton = document.getElementById('deal');
  const selectedCardContainer = document.getElementById('selected-cardone');
  const cardStack = document.getElementById('card-stack');

  let shuffledDeck = [...tarotDeck];

  shuffleButton.addEventListener('click', function () {
    handleShuffleButtonClick(shuffledDeck, cardStack, selectedCardContainer);
  });

  dealButton.addEventListener('click', function () {
    handleDealButtonClick(shuffledDeck, cardStack, selectedCardContainer);
  });
}

// === Execution ===

document.addEventListener('DOMContentLoaded', function () {
  fetch('./assets/tarot.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
      const tarotDeck = data.tarot;
      initializeGame(tarotDeck);
    })
    .catch(function (error) {
      console.error('Error loading tarot deck:', error);
    });
});
