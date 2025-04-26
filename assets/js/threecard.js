/* jshint esversion: 11 */
/* jshint node: true */
/* jshint -W079 */

// this script handles shuffling and dealing three tarot cards for a past-present-future spread
// it imports utilities for shuffling, animating, showing a win95-style modal, and displaying card details

import { injectWin95Modal, shuffleDeck, shuffleAnimation, showCardDetails } from './utilities.js';

// function to handle shuffle button click
function handleShuffleButtonClick(shuffledDeck, threecardStack, cardsContainer) {
  threecardStack.style.display = 'flex';
  cardsContainer.style.display = 'none';

  shuffleDeck(shuffledDeck);
  shuffleAnimation();

  setTimeout(function () {
    injectWin95Modal('deck shuffled! now click draw to deal your cards.');
  }, 1200);
}

// function to handle deal button click
function handleDealButtonClick(shuffledDeck, threecardStack, cardsContainer, pastColumn, presentColumn, futureColumn) {
  threecardStack.style.display = 'none';
  cardsContainer.style.display = 'flex';

  shuffleDeck(shuffledDeck);
  drawThreeCards(shuffledDeck, pastColumn, presentColumn, futureColumn);
}

// function to draw three cards for past, present, and future
function drawThreeCards(shuffledDeck, pastColumn, presentColumn, futureColumn) {
  if (shuffledDeck.length < 3) {
    alert("not enough cards left in the deck!");
    return;
  }

  const pastCard = shuffledDeck.pop();
  const presentCard = shuffledDeck.pop();
  const futureCard = shuffledDeck.pop();

  displayCardInColumn(pastCard, pastColumn);
  displayCardInColumn(presentCard, presentColumn);
  displayCardInColumn(futureCard, futureColumn);
}

// function to display a drawn card inside a column with a heading
function displayCardInColumn(card, column) {
  column.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.classList.add('card-container', 'd-flex', 'flex-column', 'align-items-center', 'text-center');

  const heading = document.createElement('h3');
  heading.classList.add('mt-3');
  if (column.id === 'past') heading.textContent = 'past';
  else if (column.id === 'present') heading.textContent = 'present';
  else if (column.id === 'future') heading.textContent = 'future';

  const cardElement = document.createElement('div');
  cardElement.classList.add('selected-card');
  cardElement.setAttribute('data-interpretation', card.interpretation);

  const cardBack = document.createElement('div');
  cardBack.classList.add('card-back');
  const cardBackImage = document.createElement('img');
  cardBackImage.src = './assets/images/cardbacks.webp';
  cardBackImage.alt = 'card back';
  cardBack.appendChild(cardBackImage);

  const cardFront = document.createElement('div');
  cardFront.classList.add('card-front');
  const cardFrontImage = document.createElement('img');
  cardFrontImage.src = card.image;
  cardFrontImage.alt = card.name;
  cardFront.appendChild(cardFrontImage);

  cardElement.appendChild(cardBack);
  cardElement.appendChild(cardFront);

  wrapper.appendChild(cardElement);
  column.appendChild(wrapper);

  // add flip animation and show card details after a delay
  setTimeout(function () {
    cardElement.classList.add('flip');

    setTimeout(function () {
      wrapper.insertBefore(heading, cardElement);
      showCardDetails(card, wrapper);
    }, 500);
  }, 1000);
}

// execution 
// fetch the tarot deck data and initialize the game after the page loads
document.addEventListener('DOMContentLoaded', function () {
  fetch('./assets/tarot.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
      const tarotDeck = data.tarot;
      const shuffleButton = document.getElementById('shuffle-button');
      const dealButton = document.getElementById('deal-button');
      const threecardStack = document.getElementById('threecard-stack');
      const cardsContainer = document.getElementById('cards-container');
      const pastColumn = document.getElementById('past');
      const presentColumn = document.getElementById('present');
      const futureColumn = document.getElementById('future');

      threecardStack.style.display = 'flex';
      cardsContainer.style.display = 'none';

      let shuffledDeck = [...tarotDeck];

      shuffleButton.addEventListener('click', function () {
        handleShuffleButtonClick(shuffledDeck, threecardStack, cardsContainer);
      });

      dealButton.addEventListener('click', function () {
        handleDealButtonClick(shuffledDeck, threecardStack, cardsContainer, pastColumn, presentColumn, futureColumn);
      });
    })
    .catch(function (error) {
      console.error('error loading tarot deck:', error);
    });
});
