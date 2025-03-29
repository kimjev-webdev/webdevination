import { shuffleDeck, shuffleAnimation, createCardElement, showCardDetails } from './utilities.js';

// Load the tarot JSON file and initialize the game logic
fetch('./assets/tarot.json')
    .then(response => response.json())
    .then(data => {
        const tarotDeck = data.tarot;
        const shuffleButton = document.getElementById('shuffle');
        const dealButton = document.getElementById('deal');
        const selectedCardContainer = document.getElementById('selected-cardone');
        const cardStack = document.getElementById('card-stack');

        let shuffledDeck = [...tarotDeck]; // Create a copy of the tarot deck to shuffle

        // Handle Shuffle button click (with animation)
        shuffleButton.addEventListener('click', () => {
            cardStack.style.display = 'flex';
            selectedCardContainer.style.display = 'none';

            shuffleDeck(shuffledDeck); // Shuffle the deck
            shuffleAnimation(); // Start the shuffle animation

            setTimeout(() => {
                alert("Deck shuffled! Click 'Deal' to draw a card.");
            }, 3500);
        });

        // Handle Deal button click (draw a card)
        dealButton.addEventListener('click', () => {
            cardStack.style.display = 'none';
            selectedCardContainer.style.display = 'flex';

            drawCard();
        });

        // Draw a single card from the shuffled deck
        function drawCard() {
            if (shuffledDeck.length === 0) {
                alert("No more cards in the deck!");
                return;
            }

            const drawnCard = shuffledDeck.pop();
            const cardElement = createCardElement(drawnCard); // Use utility to create card element

            selectedCardContainer.innerHTML = '';
            selectedCardContainer.appendChild(cardElement);

            setTimeout(() => {
                cardElement.classList.add('flip');
                setTimeout(() => {
                    showCardDetails(drawnCard, selectedCardContainer); // Show details
                }, 500);
            }, 1000);
        }
    })
    .catch(error => console.error('Error loading tarot deck:', error));
