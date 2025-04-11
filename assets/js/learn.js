// === Function Definitions ===

function shuffleDeck(shuffledDeck) {
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
}

function shuffleAnimation() {
  const cards = document.querySelectorAll(".shufflecard");

  cards.forEach(card => {
    card.style.opacity = "1";
    card.style.transform = "translate(0, 0)";
  });

  cards.forEach(card => {
    const randomX = Math.random() * 500 - 250;
    const randomY = Math.random() * 500 - 250;
    const randomRotation = Math.random() * 720 - 360;

    setTimeout(() => {
      card.style.transition = "transform 1s ease-out, opacity 1s ease-out";
      card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
      card.style.opacity = "0.6";
    }, Math.random() * 200);
  });

  setTimeout(() => {
    cards.forEach(card => {
      card.style.transition = "transform 1s ease-in, opacity 1s ease-in";
      card.style.transform = "translate(0, 0)";
      card.style.opacity = "1";
    });
  }, 3000);
}

function initializeGame() {
  currentCardIndex = 0;
  score = 0;
  document.getElementById('score').textContent = `Score: ${score}`;

  shuffleDeck(tarotData);
  shuffleAnimation();

  showCardDescription();
  showCardChoices();
}

function showCardDescription() {
  const card = tarotData[currentCardIndex];
  const descriptionElement = document.getElementById('card-description');
  descriptionElement.textContent = card.interpretation;
}

function showCardChoices() {
  const choices = [];
  choices.push(tarotData[currentCardIndex]);

  while (choices.length < 4) {
    const randomCard = tarotData[Math.floor(Math.random() * tarotData.length)];
    if (!choices.includes(randomCard)) {
      choices.push(randomCard);
    }
  }

  shuffleDeck(choices);

  const choicesContainer = document.getElementById('card-choices');
  choicesContainer.innerHTML = '';

  choices.forEach(card => {
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

function handleCardSelection(event) {
  const selectedCardName = event.target.closest('.card-choice').dataset.cardName;
  const correctCardName = tarotData[currentCardIndex].name;

  if (selectedCardName === correctCardName) {
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
    alert('Correct! You got a point.');
  } else {
    alert('Incorrect. Try again!');
  }

  currentCardIndex = (currentCardIndex + 1) % totalMatches;
  showCardDescription();
  showCardChoices();
}

// === Global Declarations ===

let totalMatches = 0;
let currentCardIndex = 0;
let tarotData = [];
let score = 0;

const backCardImage = './assets/images/cardbacks.webp';

// === Game Initialization ===

fetch('./assets/tarot.json')
  .then(response => response.json())
  .then(data => {
    tarotData = data.tarot;
    totalMatches = tarotData.length;
    initializeGame();
  })
  .catch(error => {
    console.error('Error loading tarot deck:', error);
  });

document.getElementById('restart-button').addEventListener('click', initializeGame);
