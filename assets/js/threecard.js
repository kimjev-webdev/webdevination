// === Function Declarations (Hoisted) ===

function handleShuffleButtonClick(shuffledDeck, threecardStack, cardsContainer) {
  threecardStack.style.display = 'flex';
  cardsContainer.style.display = 'none';

  shuffleDeck(shuffledDeck);
  shuffleAnimation();

  setTimeout(function () {
    injectWin95Modal();
  }, 1200);
}

function handleDealButtonClick(shuffledDeck, threecardStack, cardsContainer, pastColumn, presentColumn, futureColumn) {
  threecardStack.style.display = 'none';
  cardsContainer.style.display = 'flex';

  shuffleDeck(shuffledDeck);
  drawThreeCards(shuffledDeck, pastColumn, presentColumn, futureColumn);
}

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

function displayCardInColumn(card, column) {
  column.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.classList.add('card-container', 'd-flex', 'flex-column', 'align-items-center', 'text-center');

  const heading = document.createElement('h3');
  heading.classList.add('mt-3');
  if (column.id === 'past') heading.textContent = 'Past';
  else if (column.id === 'present') heading.textContent = 'Present';
  else if (column.id === 'future') heading.textContent = 'Future';

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

  wrapper.appendChild(cardElement);
  column.appendChild(wrapper);

  setTimeout(function () {
    cardElement.classList.add('flip');

    setTimeout(function () {
      wrapper.insertBefore(heading, cardElement);
      showCardDetails(card, wrapper); // from utilities.js
    }, 500);
  }, 1000);
}

function showCardDetails(card, wrapper) {
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const interpretationPara = document.createElement('p');
  interpretationPara.classList.add('card-details-text');
  interpretationPara.textContent = card.interpretation;

  cardInfo.appendChild(interpretationPara);
  wrapper.appendChild(cardInfo);
}

// === DOM Ready ===

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
      console.error('Error loading tarot deck:', error);
    });
});
