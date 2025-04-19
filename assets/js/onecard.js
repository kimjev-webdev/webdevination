// === Function Declarations (Hoisted to top) ===

// Injects a Win95-style modal into the DOM if it doesn't exist
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

  // Add Enter key listener for accessibility
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

// Handle Shuffle button click (with animation)
function handleShuffleButtonClick(shuffledDeck, cardStack, selectedCardContainer) {
  cardStack.style.display = 'flex';
  selectedCardContainer.style.display = 'none';

  shuffleDeck(shuffledDeck);
  shuffleAnimation();

  setTimeout(() => {
    injectWin95Modal();

    const modalElement = document.getElementById('win95Modal');
    const okButton = modalElement.querySelector('.win95-ok-btn');
    const modal = new bootstrap.Modal(modalElement);

    modalElement.addEventListener('shown.bs.modal', () => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const isAriaVisible = modalElement.getAttribute('aria-hidden') === 'false';
          const isActuallyVisible = modalElement.getBoundingClientRect().width > 0;

          if (isAriaVisible && isActuallyVisible && okButton) {
            okButton.focus();
          }
        }, 50); // slight buffer to ensure DOM/ARIA sync
      });
    }, { once: true });

    modal.show();
  }, 1200);
}

// Handle Deal button click (draw a card)
function handleDealButtonClick(shuffledDeck, cardStack, selectedCardContainer) {
  cardStack.style.display = 'none';
  selectedCardContainer.style.display = 'flex';

  drawCard(shuffledDeck, selectedCardContainer);
}

// Fetch tarot JSON and initialize the game logic
function initializeGame(tarotDeck) {
  const shuffleButton = document.getElementById('shuffle');
  const dealButton = document.getElementById('deal');
  const selectedCardContainer = document.getElementById('selected-cardone');
  const cardStack = document.getElementById('card-stack');

  let shuffledDeck = [...tarotDeck];

  shuffleButton.addEventListener('click', () => {
    handleShuffleButtonClick(shuffledDeck, cardStack, selectedCardContainer);
  });

  dealButton.addEventListener('click', () => {
    handleDealButtonClick(shuffledDeck, cardStack, selectedCardContainer);
  });
}

// === Execution ===

document.addEventListener('DOMContentLoaded', () => {
  fetch('./assets/tarot.json')
    .then(response => response.json())
    .then(data => {
      const tarotDeck = data.tarot;
      initializeGame(tarotDeck);
    })
    .catch(error => console.error('Error loading tarot deck:', error));
});
