// === Inject and Show Learn Modal ===
function injectLearnModal(message) {
  let modalElement = document.getElementById('learnModal');

  if (!modalElement) {
    const modalHTML = `
      <div class="modal fade" id="learnModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content win95-modal win95-window text-glow">
            <div class="win95-title-bar">
              <span class="win95-title-text">RESULT</span>
              <div class="win95-buttons">
                <button type="button" class="win95-btn text-glow" data-bs-dismiss="modal" aria-label="Close">
                  <i class="fa-light fa-x"></i>
                </button>
              </div>
            </div>
            <div class="win95-body">
              <p id="learnModalMessage">...</p>
              <div class="ok-wrap">
                <button class="win95-ok-btn" id="learn-ok" data-bs-dismiss="modal">OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = modalHTML;
    document.body.appendChild(wrapper);
  }

  const modalMessageElement = document.getElementById('learnModalMessage');
  if (modalMessageElement) {
    modalMessageElement.textContent = message;
  } else {
    console.error('Modal message element not found!');
  }

  const modal = new bootstrap.Modal(document.getElementById('learnModal'));

  // === ✨ Accessibility: Allow Enter Key to Close Modal ===
  const okButton = document.getElementById('learn-ok');

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      okButton.click();
    }
  };

  const learnModalElement = document.getElementById('learnModal');

  learnModalElement.addEventListener('shown.bs.modal', () => {
    document.addEventListener('keydown', handleEnterKey);
    okButton.focus();
  }, { once: true });

  learnModalElement.addEventListener('hidden.bs.modal', () => {
    document.removeEventListener('keydown', handleEnterKey);
  }, { once: true });

  modal.show();
}

// === Shuffle Deck Function ===
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// === Shuffle Animation Function ===
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
  }, 3000);
}

// === Initialize Game ===
function initializeGame() {
  currentCardIndex = 0;
  score = 0;
  document.getElementById('score').textContent = `Score: ${score}`;

  shuffleDeck(tarotData);
  shuffleAnimation();

  showCardDescription();
  showCardChoices();
}

// === Show Current Card Description ===
function showCardDescription() {
  const card = tarotData[currentCardIndex];
  const descriptionElement = document.getElementById('card-description');
  descriptionElement.textContent = card.interpretation;
}

// === Show Card Choices ===
function showCardChoices() {
  const choices = [tarotData[currentCardIndex]];

  while (choices.length < 4) {
    const randomCard = tarotData[Math.floor(Math.random() * tarotData.length)];
    if (!choices.includes(randomCard)) {
      choices.push(randomCard);
    }
  }

  shuffleDeck(choices);

  const choicesContainer = document.getElementById('card-choices');
  choicesContainer.innerHTML = '';

  choices.forEach(function (card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card-choice');
    cardElement.dataset.cardName = card.name;

    const cardImage = document.createElement('img');
    cardImage.src = card.image;
    cardImage.alt = card.name;
    cardElement.appendChild(cardImage);

    cardElement.addEventListener('click', handleCardSelection);
    choicesContainer.appendChild(cardElement);
  });
}

// === Handle Card Selection ===
function handleCardSelection(event) {
  const selectedCardName = event.target.closest('.card-choice').dataset.cardName;
  const correctCardName = tarotData[currentCardIndex].name;

  if (selectedCardName === correctCardName) {
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
    injectLearnModal(`${correctCardName} was the correct answer. Well done!`);
  } else {
    playErrorSound();
    injectLearnModal(`Incorrect! The correct answer was ${correctCardName}.`);
  }

  currentCardIndex = (currentCardIndex + 1) % totalMatches;
  showCardDescription();
  showCardChoices();
}

// === Play Windows 95 Error Sound ===
function playErrorSound() {
  const audio = new Audio('./assets/audio/win95_error.mp3');
  audio.play();
}

// === Global Declarations ===
let totalMatches = 0;
let currentCardIndex = 0;
let tarotData = [];
let score = 0;

// === Game Initialization ===
fetch('./assets/tarot.json')
  .then(function (response) { return response.json(); })
  .then(function (data) {
    tarotData = data.tarot;
    totalMatches = tarotData.length;
    initializeGame();
  })
  .catch(function (error) {
    console.error('Error loading tarot deck:', error);
  });

// === Restart Button Listener ===
document.getElementById('restart-button').addEventListener('click', initializeGame);
