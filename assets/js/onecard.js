/* jshint esversion: 11 */
/* jshint node: true */
/* jshint -W079 */

// this script handles shuffling and dealing a tarot card on the one-card draw page
// it imports utilities for shuffling, animating, drawing, and showing a win95-style modal

import { injectWin95Modal, shuffleDeck, shuffleAnimation, drawCard } from './utilities.js';

// function to handle shuffle button click
function handleShuffleButtonClick(shuffledDeck, cardStack, selectedCardContainer) {
  cardStack.style.display = 'flex';
  selectedCardContainer.style.display = 'none';

  shuffleDeck(shuffledDeck);
  shuffleAnimation();

  setTimeout(function () {
    injectWin95Modal('deck shuffled! now click draw to pick a card.');
  }, 1200);
}

// function to handle deal button click
function handleDealButtonClick(shuffledDeck, cardStack, selectedCardContainer) {
  cardStack.style.display = 'none';
  selectedCardContainer.style.display = 'flex';

  drawCard(shuffledDeck, selectedCardContainer);
}

// function to initialize the game by setting up event listeners
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

// execution
// fetch the tarot deck data and initialize the game after the page loads
document.addEventListener('DOMContentLoaded', function () {
  fetch('./assets/tarot.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
      const tarotDeck = data.tarot;
      initializeGame(tarotDeck);
    })
    .catch(function (error) {
      console.error('error loading tarot deck:', error);
    });
});