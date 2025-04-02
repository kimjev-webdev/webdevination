let totalMatches = 0;
let currentCardIndex = 0;
let tarotData = [];
let score = 0;

// Back card image path
const backCardImage = './assets/images/cardbacks.webp';

// Fetch the tarot deck from the JSON file
fetch('./assets/tarot.json')
  .then(response => response.json())
  .then(data => {
    tarotData = data.tarot; // Store the tarot data from the JSON file
    totalMatches = tarotData.length; // Set the total number of cards (78)
    initializeGame(); // Start the game after loading the JSON
  })
  .catch(error => {
    console.error('Error loading tarot deck:', error);
  });

// Shuffle the tarot deck
function shuffleDeck(shuffledDeck) {
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]]; // Swap
  }
}

// Shuffle animation for card stack (Optional)
function shuffleAnimation() {
  const cards = document.querySelectorAll(".shufflecard");

  // Set initial positions and opacity for animation reset
  cards.forEach(card => {
    card.style.opacity = "1";
    card.style.transform = "translate(0, 0)";
  });

  // Scatter the cards
  cards.forEach(card => {
    const randomX = Math.random() * 500 - 250; // Random position between -250 and 250
    const randomY = Math.random() * 500 - 250; // Random position between -250 and 250
    const randomRotation = Math.random() * 720 - 360; // Random rotation between -360 and 360 degrees

    setTimeout(() => {
      card.style.transition = "transform 1s ease-out, opacity 1s ease-out";
      card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
      card.style.opacity = "0.6"; // Slightly transparent when scattered
    }, Math.random() * 200); // Random delay to make it look more chaotic
  });

  // After 3 seconds, return cards to center position
  setTimeout(() => {
    cards.forEach(card => {
      card.style.transition = "transform 1s ease-in, opacity 1s ease-in";
      card.style.transform = "translate(0, 0)"; // Return to center
      card.style.opacity = "1"; // Fully opaque
    });
  }, 3000); // 3 seconds delay before returning cards
}

// Initialize the game
function initializeGame() {
  currentCardIndex = 0;
  score = 0;
  document.getElementById('score').textContent = `Score: ${score}`;

  shuffleDeck(tarotData); // Shuffle the tarot deck here
  shuffleAnimation(); // Optionally add shuffle animation for visual effect
  
  showCardDescription(); // Show description for the first card
  showCardChoices(); // Show four random card choices
}

// Show a random card description
function showCardDescription() {
  const card = tarotData[currentCardIndex];
  const descriptionElement = document.getElementById('card-description');
  descriptionElement.textContent = card.interpretation;
}

// Show four random card choices (including the correct one)
function showCardChoices() {
  const choices = [];
  
  // Add the correct card to the choices array
  choices.push(tarotData[currentCardIndex]);

  // Add 3 random cards (that are not the correct one) to the choices array
  while (choices.length < 4) {
    const randomCard = tarotData[Math.floor(Math.random() * tarotData.length)];
    if (!choices.includes(randomCard)) {
      choices.push(randomCard);
    }
  }

  // Shuffle choices so the correct one is in a random position
  shuffleDeck(choices);

  const choicesContainer = document.getElementById('card-choices');
  choicesContainer.innerHTML = ''; // Clear the previous choices

  // Create and display the card choices
  choices.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card-choice');
    cardElement.dataset.cardName = card.name; // Store card name to check match

    const cardImage = document.createElement('img');
    cardImage.src = card.image; // Use image URL from JSON
    cardImage.alt = card.name;
    cardElement.appendChild(cardImage);

    // Add event listener for selecting a card
    cardElement.addEventListener('click', handleCardSelection);

    choicesContainer.appendChild(cardElement);
  });
}

// Handle card selection by the user
function handleCardSelection(event) {
  const selectedCardName = event.target.closest('.card-choice').dataset.cardName;
  const correctCardName = tarotData[currentCardIndex].name;

  // Check if the selected card matches the correct one
  if (selectedCardName === correctCardName) {
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
    alert('Correct! You got a point.');
  } else {
    alert('Incorrect. Try again!');
  }

  // Move to the next card (wrap around if at the end)
  currentCardIndex = (currentCardIndex + 1) % totalMatches;

  // Update the game for the next round
  showCardDescription();
  showCardChoices();
}

// Restart the game
document.getElementById('restart-button').addEventListener('click', initializeGame);
