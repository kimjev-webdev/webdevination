// script.js

// Cards setup
const cards = [];
const totalCards = 78;
const deckElement = document.getElementById("deck");
const selectedCardElement = document.getElementById("selected-cardone");

// Card names array (replace with your full list of tarot cards)
const cardNames = [
  "aceofcups", "twoofcups", "threeofcups", "fourofcups", "fiveofcups", "sixofcups", "sevenofcups", "eightofcups", "nineofcups", "tenofcups", "pageofcups", "knightofcups", "queenofcups", "kingofcups",
  "aceofwands", "twoofwands", "threeofwands", "fourofwands", "fiveofwands", "sixofwands", "sevenofwands", "eightofwands", "nineofwands", "tenofwands", "pageofwands", "knightofwands", "queenofwands", "kingofwands",
  "aceofswords", "twoofswords", "threeofswords", "fourofswords", "fiveofswords", "sixofswords", "sevenofswords", "eightofswords", "nineofswords", "tenofswords", "pageofswords", "knightofswords", "queenofswords", "kingofswords",
  "aceofpentacles", "twoofpentacles", "threeofpentacles", "fourofpentacles", "fiveofpentacles", "sixofpentacles", "sevenofpentacles", "eightofpentacles", "nineofpentalces", "tenofpentacles", "pageofpentacles", "knightofpentacles", "queenofpentacles", "kingofpentacles",
  "thefool", "themagician", "thehighpriestess", "theempress", "theemperor", "thehierophant", "thelovers", "thechariot", "strength", "thehermit", "wheeloffortune", "justice", "thehangedman", "death", "temperance", "thedevil", "thetower", "thestar", "themoon", "thesun", "judgement", "theworld",      // Add all tarot card names here
  // Add the names for all 78 cards
];

// Initialize the cards
for (let i = 0; i < totalCards; i++) {
  cards.push({
    id: i,
    name: cardNames[i % cardNames.length], // Looping for now, replace with full list
    image: `../assets/images/cardfronts/${cardNames[i % cardNames.length]}.webp`,
    x: Math.random() * 400, // Random initial position for shuffle
    y: Math.random() * 400, // Random initial position for shuffle
  });
}

// Add deck of cards to the page
cards.forEach(card => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("cardone");
  cardElement.style.left = `${card.x}px`;
  cardElement.style.top = `${card.y}px`;
  cardElement.dataset.id = card.id;
  cardElement.dataset.name = card.name; // Store card name for selection
  deckElement.appendChild(cardElement);
});

// Shuffle cards animation
function shuffleCards() {
  cards.forEach((card, i) => {
    const xTarget = card.x + (Math.random() - 0.5) * 100;
    const yTarget = card.y + (Math.random() - 0.5) * 100;

    const cardElement = deckElement.children[i];
    cardElement.style.transition = `all 0.5s ease`;
    cardElement.style.transform = `translate(${xTarget - card.x}px, ${yTarget - card.y}px)`;
    card.x = xTarget;
    card.y = yTarget;
  });
}

// Deal the cards by fanning them out in rows
function dealCards() {
  deckElement.classList.add("fanned-out");
  const cardsPerRow = 13;
  const rows = 6;
  const cardWidth = 60;
  const cardHeight = 100;

  let cardIndex = 0;

  // Position the cards in 6 rows of 13 with slight overlap
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cardsPerRow; col++) {
      const card = cards[cardIndex];
      const cardElement = deckElement.children[cardIndex];

      // Set new position for each card
      const xPosition = col * (cardWidth - 10) + 50; // 50px for margin
      const yPosition = row * (cardHeight - 20) + 10; // 10px for margin
      cardElement.style.transition = "all 0.5s ease";
      cardElement.style.transform = `translate(${xPosition}px, ${yPosition}px)`;

      // Add slight overlap effect
      cardElement.style.zIndex = cards.length - cardIndex; // Keep the cards stacked
      cardIndex++;
    }
  }
}

// Handle card selection
function selectCard(event) {
  const selectedCard = cards.find(card => card.id === parseInt(event.target.dataset.id));
  
  // Reveal the selected card
  const img = document.createElement("img");
  img.src = selectedCard.image;
  selectedCardElement.innerHTML = ""; // Clear previous card
  selectedCardElement.appendChild(img);

  // Flip the selected card
  event.target.classList.add("flipped");

  // Hide all other cards
  const allCards = deckElement.querySelectorAll(".cardone");
  allCards.forEach(card => {
    if (card !== event.target) {
      card.style.opacity = 0;
    }
  });
}

// Event Listeners
document.getElementById("shuffle").addEventListener("click", shuffleCards);
document.getElementById("deal").addEventListener("click", dealCards);

// Add click event for each card to handle selection
deckElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("cardone")) {
    selectCard(event);
  }
});
