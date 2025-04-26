import { injectWin95Modal, shuffleDeck, shuffleAnimation, drawCard, showCardDetails } from './utilities.js';

// === Function Declarations (Hoisted) ===

function handleShuffleButtonClick(shuffledDeck, cardStack, selectedCardContainer) {
  cardStack.style.display = 'flex';
  selectedCardContainer.style.display = 'none';

  shuffleDeck(shuffledDeck);
  shuffleAnimation();

  setTimeout(function () {
    injectWin95Modal('Deck shuffled! Now click DRAW to pick a card.');
  }, 1200);
}

function handleDealButtonClick(shuffledDeck, cardStack, selectedCardContainer) {
  cardStack.style.display = 'none';
  selectedCardContainer.style.display = 'flex';

  drawCard(shuffledDeck, selectedCardContainer);
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
