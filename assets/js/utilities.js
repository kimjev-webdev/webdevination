// === Function Declarations (Hoisted to Top) ===

function injectWin95Modal() {
  if (document.getElementById('win95Modal')) return;

  const modalHTML = `
    <div class="modal fade" id="win95Modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content win95-modal win95-window text-glow">
          <div class="win95-title-bar">
            <span class="win95-title-text">SHUFFLE COMPLETE</span>
            <div class="win95-buttons">
              <button type="button" class="win95-btn text-glow" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa-light fa-x"></i>
              </button>
            </div>
          </div>
          <div class="win95-body">
            <p>Deck shuffled! Now click ‘DRAW’ to pick a card.</p>
            <div class="ok-wrap">
              <button class="win95-ok-btn" id="win95-ok" data-bs-dismiss="modal">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const modalContainer = document.createElement('div');
  modalContainer.innerHTML = modalHTML;
  document.body.appendChild(modalContainer);

  const enterListener = function (e) {
    const modal = document.getElementById('win95Modal');
    const isVisible = modal && modal.getAttribute('aria-hidden') === 'false';
    if (e.key === 'Enter' && isVisible) {
      const okBtn = document.getElementById('win95-ok');
      if (okBtn) okBtn.click();
    }
  };

  document.removeEventListener('keydown', enterListener);
  document.addEventListener('keydown', enterListener);
}

function shuffleDeck(shuffledDeck) {
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
}

function shuffleAnimation() {
  const cards = document.querySelectorAll(".shufflecard");

  cards.forEach(function (card) {
    card.style.opacity = "1";
    card.style.transform = "translate(0, 0)";
  });

  cards.forEach(function (card) {
    const randomX = Math.random() * 500 - 250;
    const randomY = Math.random() * 500 - 250;
    const randomRotation = Math.random() * 720 - 360;

    setTimeout(function () {
      card.style.transition = "transform 1s ease-out, opacity 1s ease-out";
      card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
      card.style.opacity = "0.6";
    }, Math.random() * 200);
  });

  setTimeout(function () {
    cards.forEach(function (card) {
      card.style.transition = "transform 1s ease-in, opacity 1s ease-in";
      card.style.transform = "translate(0, 0)";
      card.style.opacity = "1";
    });
  }, 1000);
}

function drawCard(shuffledDeck, selectedCardContainer, isShuffled) {
  if (shuffledDeck.length === 0) {
    alert("No more cards in the deck!");
    return;
  }

  if (!isShuffled) {
    shuffleDeck(shuffledDeck);
    isShuffled = true;
  }

  const drawnCard = shuffledDeck.pop();

  const cardElement = document.createElement('div');
  cardElement.classList.add('selected-card');
  cardElement.setAttribute('data-name', drawnCard.name);
  cardElement.setAttribute('data-response', drawnCard.response);
  cardElement.setAttribute('data-interpretation', drawnCard.interpretation);

  const cardBack = document.createElement('div');
  cardBack.classList.add('card-back');

  const cardBackImage = document.createElement('img');
  cardBackImage.src = './assets/images/cardbacks.webp';
  cardBackImage.alt = 'Card Back';
  cardBack.appendChild(cardBackImage);

  const cardFront = document.createElement('div');
  cardFront.classList.add('card-front');

  const cardFrontImage = document.createElement('img');
  cardFrontImage.src = drawnCard.image;
  cardFrontImage.alt = drawnCard.name;
  cardFront.appendChild(cardFrontImage);

  cardElement.appendChild(cardBack);
  cardElement.appendChild(cardFront);

  selectedCardContainer.innerHTML = '';
  selectedCardContainer.appendChild(cardElement);

  setTimeout(function () {
    cardElement.classList.add('flip');

    setTimeout(function () {
      showCardDetails(drawnCard, selectedCardContainer);
    }, 500);
  }, 1000);
}

function showCardDetails(card, selectedCardContainer) {
  const cardDetails = `
    <div class="card-info">
        <p class="card-response">The answer is...${card.response}!</p>
        <p class="card-details-text">${card.interpretation}</p>
    </div>
  `;
  selectedCardContainer.innerHTML += cardDetails;
}

// === DOM Ready Hook ===

document.addEventListener('DOMContentLoaded', function () {
  const cardbacksOne = document.querySelectorAll('#buttons-container .col-12.col-md-6 img');

  // Expose functions globally to other scripts
  window.shuffleDeck = shuffleDeck;
  window.shuffleAnimation = shuffleAnimation;
  window.drawCard = drawCard;
  window.showCardDetails = showCardDetails;
  window.injectWin95Modal = injectWin95Modal;
});
