/* jshint esversion: 11 */
/* jshint node: true */
/* jshint -W079 */

// this script handles the learning game where players guess tarot cards based on interpretation
// it includes a modal for feedback, shuffling animations, game logic, and score tracking

// function to inject and show the learn result modal
function injectLearnModal(message) {
  let modalElement = document.getElementById('learnModal');

  if (!modalElement) {
    const modalHTML = `
      <div class="modal fade" id="learnModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content win95-modal win95-window text-glow">
            <div class="win95-title-bar">
              <span class="win95-title-text">result</span>
              <div class="win95-buttons">
                <button type="button" class="win95-btn text-glow" data-bs-dismiss="modal" aria-label="close">
                  <i class="fa-light fa-x"></i>
                </button>
              </div>
            </div>
            <div class="win95-body">
              <p id="learnModalMessage">...</p>
              <div class="ok-wrap">
                <button class="win95-ok-btn" id="learn-ok" data-bs-dismiss="modal">ok</button>
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
    console.error('modal message element not found!');
  }

  const modal = new bootstrap.Modal(document.getElementById('learnModal'));

  // allow enter key to close the modal
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

// function to shuffle the tarot deck
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// function to play the shuffle animation
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

// function to initialize or restart the game
function initializeGame() {
  currentCardIndex = 0;
  score = 0;
  document.getElementById('score').textContent = `score: ${score}`;

  shuffleDeck(tarotData);
  shuffleAnimation();

  showCardDescription();
  showCardChoices();
}

// function to show the current card's description
function showCardDescription() {
  const card = tarotData[currentCardIndex];
  const descriptionElement = document.getElementById('card-description');
  descriptionElement.textContent = card.interpretation;
}

// function to show multiple card choices
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

// function to handle when a card choice is selected
function handleCardSelection(event) {
  const selectedCardName = event.target.closest('.card-choice').dataset.cardName;
  const correctCardName = tarotData[currentCardIndex].name;

  if (selectedCardName === correctCardName) {
    score++;
    document.getElementById('score').textContent = `score: ${score}`;
    injectLearnModal(`${correctCardName} was the correct answer. well done!`);
  } else {
    playErrorSound();
    injectLearnModal(`incorrect! the correct answer was ${correctCardName}.`);
  }

  currentCardIndex = (currentCardIndex + 1) % totalMatches;
  showCardDescription();
  showCardChoices();
}

// function to play the windows 95 error sound
function playErrorSound() {
  const audio = new Audio('./assets/audio/win95_error.mp3');
  audio.play();
}

// === global declarations ===
let totalMatches = 0;
let currentCardIndex = 0;
let tarotData = [];
let score = 0;

// === fetch tarot data and start the game ===
fetch('./assets/tarot.json')
  .then(function (response) { return response.json(); })
  .then(function (data) {
    tarotData = data.tarot;
    totalMatches = tarotData.length;
    initializeGame();
  })
  .catch(function (error) {
    console.error('error loading tarot deck:', error);
  });

// === restart button listener ===
document.getElementById('restart-button').addEventListener('click', initializeGame);
