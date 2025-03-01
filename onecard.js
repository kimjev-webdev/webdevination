// script.js

// Cards setup
const cards = [];
const totalCards = 78;
for (let i = 0; i < totalCards; i++) {
  cards.push({
    id: i,
    image: `../assets/images/cardfronts/${getCardName(i)}.webp`,
    x: Math.random() * 400, // Random initial position
    y: Math.random() * 400, // Random initial position
  });
}

// Get the card names based on the index
function getCardName(index) {
  const cardNames = [
    "aceofcups", "kingofcups", "queenofcups", "jackofcups", // Add all tarot card names here
    // Fill in with all 78 card names
  ];
  return cardNames[index % cardNames.length]; // Looping for now, replace with full list
}

// Add deck of cards to the page
const deckElement = document.getElementById("deck");
cards.forEach(card => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("cardone");
  cardElement.style.left = `${card.x}px`;
  cardElement.style.top = `${card.y}px`;
  cardElement.dataset.id = card.id;
  deckElement.appendChild(cardElement);
});

// Shuffle cards animation
function shuffleCards() {
  const left = [];
  const right = [];

  cards.forEach((card, i) => {
    const xTarget = card.x + (Math.random() - 0.5) * 100;
    const yTarget = card.y + (Math.random() - 0.5) * 100;

    const animation = {
      delay: i * 2,
      duration: 200,
      xStart: card.x,
      yStart: card.y,
      xTarget,
      yTarget,
    };

    card.x = xTarget;
    card.y = yTarget;

    const cardElement = deckElement.children[i];
    cardElement.style.transition = `all ${animation.duration / 1000}s ease`;
    cardElement.style.transform = `translate(${xTarget - card.x}px, ${yTarget - card.y}px)`;
  });
}

// Deal a random card (flip animation)
function dealCard() {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const card = cards[randomIndex];
  const selectedCardElement = document.getElementById("selected-cardone");

  // Create the flipped card element
  const img = document.createElement("img");
  img.src = card.image;
  selectedCardElement.innerHTML = ""; // Clear previous card
  selectedCardElement.appendChild(img);

  // Flip animation
  const cardElement = deckElement.children[randomIndex];
  cardElement.style.transform = "rotateY(180deg)";
  setTimeout(() => {
    cardElement.style.transform = "rotateY(0deg)";
  }, 500);
}

// Event Listeners
document.getElementById("shuffle").addEventListener("click", shuffleCards);
document.getElementById("deal").addEventListener("click", dealCard);
