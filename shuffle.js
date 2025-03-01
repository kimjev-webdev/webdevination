// script.js
document.addEventListener("DOMContentLoaded", () => {
    const deckElement = document.getElementById('deck');
    const shuffleBtn = document.getElementById('shufflebtn');
  
    // Create a pile of cards
    function createCards() {
      // Clear any existing cards
      deckElement.innerHTML = '';
  
      // Create a set number of cards (for example, 10 cards)
      const numCards = 10;
  
      for (let i = 0; i < numCards; i++) {
        const card = document.createElement('div');
        card.classList.add('shufflecard'); // Use shufflecard instead of card
        card.style.top = `${i * 10}px`;  // Slight offset for initial positioning
        card.style.left = `${i * 10}px`;
        deckElement.appendChild(card);
      }
    }
  
    // Shuffle function
    function shuffleCards() {
      const cards = document.querySelectorAll('.shufflecard'); // Use shufflecard class
      cards.forEach((card, index) => {
        // Random rotation for each card
        const rotation = (Math.random() - 0.5) * 30; // Random between -15deg and 15deg
        const topPosition = 0;
        const leftPosition = 0;
  
        // Animate the cards stacking with random rotation
        setTimeout(() => {
          card.style.transform = `rotate(${rotation}deg)`;
          card.style.top = `${topPosition}px`;
          card.style.left = `${leftPosition}px`;
          card.style.zIndex = index; // Make sure the last card is on top
        }, index * 100); // Stagger the animation for each card
      });
    }
  
    // Event listener for shuffle button
    shuffleBtn.addEventListener('click', shuffleCards);
  
    // Initialize the cards
    createCards();
  });
  