// this file contains the logic for the three-card tarot reading game. 
// it handles the shuffling of the tarot deck, drawing three cards, and displaying them in the past, present, and future columns. 
// the game also includes a shuffle animation for the card stack and a function to display card details after drawing them.

// handle shuffle button click (with animation)
function handleShuffleButtonClick(shuffledDeck, threecardStack, cardsContainer) {
  // show shuffled card stack and hide selected card container
  threecardStack.style.display = 'flex';
  cardsContainer.style.display = 'none';

  shuffleDeck(shuffledDeck); // shuffle deck (from utilities.js)
  shuffleAnimation(); // start shuffle animation

  setTimeout(() => {
    alert("Deck shuffled! Click 'Deal' to draw three cards.");
  }, 3500);
}

// handle deal button click (draw three cards)
function handleDealButtonClick(shuffledDeck, threecardStack, cardsContainer, pastColumn, presentColumn, futureColumn) {
  // hide shuffled card stack and show the cards container
  threecardStack.style.display = 'none';
  cardsContainer.style.display = 'flex';

  shuffleDeck(shuffledDeck);
  drawThreeCards(shuffledDeck, pastColumn, presentColumn, futureColumn);
}

// draw three random cards for past, present, future
function drawThreeCards(shuffledDeck, pastColumn, presentColumn, futureColumn) {
  if (shuffledDeck.length < 3) {
    alert("Not enough cards left in the deck!");
    return;
  }

  const pastCard = shuffledDeck.pop();
  const presentCard = shuffledDeck.pop();
  const futureCard = shuffledDeck.pop();

  displayCardInColumn(pastCard, pastColumn);
  displayCardInColumn(presentCard, presentColumn);
  displayCardInColumn(futureCard, futureColumn);
}

// display the card in a given column
function displayCardInColumn(card, column) {
  // create the card element (front and back)
  const cardElement = document.createElement('div');
  cardElement.classList.add('selected-card');
  cardElement.setAttribute('data-interpretation', card.interpretation);

  const cardBack = document.createElement('div');
  cardBack.classList.add('card-back');
  const cardBackImage = document.createElement('img');
  cardBackImage.src = './assets/images/cardbacks.webp';
  cardBackImage.alt = 'Card Back';
  cardBack.appendChild(cardBackImage);

  const cardFront = document.createElement('div');
  cardFront.classList.add('card-front');
  const cardFrontImage = document.createElement('img');
  cardFrontImage.src = card.image;
  cardFrontImage.alt = card.name;
  cardFront.appendChild(cardFrontImage);

  cardElement.appendChild(cardBack);
  cardElement.appendChild(cardFront);

  column.innerHTML = '';
  column.appendChild(cardElement);

  setTimeout(() => {
    cardElement.classList.add('flip');
    setTimeout(() => {
      showCardDetails(card, column);
    }, 500);
  }, 1000);
}

// show only the interpretation (not the response)
function showCardDetails(card, column) {
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const interpretationPara = document.createElement('p');
  interpretationPara.classList.add('card-details-text');
  interpretationPara.textContent = card.interpretation;

  cardInfo.appendChild(interpretationPara);
  column.appendChild(cardInfo);
}

// dom ready: load tarot and set up event listeners
document.addEventListener('DOMContentLoaded', () => {
  fetch('./assets/tarot.json')
    .then(response => response.json())
    .then(data => {
      const tarotDeck = data.tarot;
      const shuffleButton = document.getElementById('shuffle-button');
      const dealButton = document.getElementById('deal-button');
      const threecardStack = document.getElementById('threecard-stack');
      const cardsContainer = document.getElementById('cards-container');
      const pastColumn = document.getElementById('past');
      const presentColumn = document.getElementById('present');
      const futureColumn = document.getElementById('future');

      // make sure the threecard stack is shown at load
      threecardStack.style.display = 'flex';
      cardsContainer.style.display = 'none';

      let shuffledDeck = [...tarotDeck];

      shuffleButton.addEventListener('click', () => {
        handleShuffleButtonClick(shuffledDeck, threecardStack, cardsContainer);
      });

      dealButton.addEventListener('click', () => {
        handleDealButtonClick(shuffledDeck, threecardStack, cardsContainer, pastColumn, presentColumn, futureColumn);
      });
    })
    .catch(error => console.error('Error loading tarot deck:', error));
});
