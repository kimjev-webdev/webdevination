// === Function Declarations (Hoisted to Top) ===

// Inject Win95 Modal
function injectWin95Modal() {
  if (document.getElementById('win95Modal')) return;

  const modalHTML = `
    <div id="win95Modal" class="win95-modal-wrapper" style="display: none;">
      <div class="win95-modal win95-window text-glow">
        <div class="win95-title-bar">
          <span class="win95-title-text">SHUFFLE COMPLETE</span>
          <div class="win95-buttons">
            <button type="button" class="win95-btn" id="win95-close" aria-label="Close">
              <i class="fa-light fa-x" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div class="win95-body">
          <p>Deck shuffled! Now click ‘DRAW’ to pick a card.</p>
          <div class="ok-wrap">
            <button class="win95-ok-btn" id="win95-ok">OK</button>
          </div>
        </div>
      </div>
    </div>
  `;

  const modalContainer = document.createElement('div');
  modalContainer.innerHTML = modalHTML;
  document.body.appendChild(modalContainer);

  openWin95Modal();
}

// Open Win95 Modal
function openWin95Modal() {
  const modal = document.getElementById('win95Modal');

  // Create backdrop
  const backdrop = document.createElement('div');
  backdrop.id = 'win95-backdrop';
  document.body.appendChild(backdrop);

  // Show modal
  modal.style.display = 'flex';

  // Lock scroll
  document.body.style.overflow = 'hidden';
}

// Close Win95 Modal
function closeWin95Modal() {
  const modal = document.getElementById('win95Modal');
  const backdrop = document.getElementById('win95-backdrop');

  if (modal) {
    modal.style.display = 'none';
  }
  if (backdrop) {
    backdrop.remove();
  }

  // Unlock scroll
  document.body.style.overflow = '';
}

// Event listeners for OK and Close buttons
document.addEventListener('click', function(e) {
  if (e.target && (e.target.id === 'win95-ok' || e.target.id === 'win95-close')) {
    closeWin95Modal();
  }
});

// === Other existing functions you already had ===

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
  cardFrontImage.loading = "lazy";
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

  window.shuffleDeck = shuffleDeck;
  window.shuffleAnimation = shuffleAnimation;
  window.drawCard = drawCard;
  window.showCardDetails = showCardDetails;
  window.injectWin95Modal = injectWin95Modal;
});
