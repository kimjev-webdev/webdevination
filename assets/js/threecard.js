import { shuffleDeck, shuffleAnimation, createCardElement, showCardDetails } from './utilities.js';

// Load the tarot JSON file and initialize the game logic
fetch('./assets/tarot.json')
    .then(response => response.json())
    .then(data => {
        const tarotDeck = data.tarot;
        const shuffleButton = document.getElementById('shuffle-button');
        const dealButton = document.getElementById('deal-button');
        const threecardStack = document.getElementById('threecard-stack');
        const cardsContainer = document.getElementById('cards-container');
        const pastColumn = document.getElementById('past');
        const presentColumn = document.getElementById('present');
        const futureColumn = document.getElementById('future');

        let shuffledDeck = [...tarotDeck];

        shuffleButton.addEventListener('click', () => {
            threecardStack.style.visibility = 'visible';
            cardsContainer.style.visibility = 'hidden';

            shuffleDeck(shuffledDeck);
            shuffleAnimation();

            setTimeout(() => {
                alert("Deck shuffled! Click 'Deal' to draw three cards.");
            }, 3500);
        });

        dealButton.addEventListener('click', () => {
            threecardStack.style.visibility = 'hidden';
            cardsContainer.style.visibility = 'visible';

            drawThreeCards();
        });

        function drawThreeCards() {
            if (shuffledDeck.length < 3) {
                alert("Not enough cards left in the deck!");
                return;
            }

            const pastCard = shuffledDeck.pop();
            const presentCard = shuffledDeck.pop();
            const futureCard = shuffledDeck.pop();

            displayCardInColumn(pastCard, pastColumn);
            displayCardInColumn(presentCard, presentColumn);
            displayCardInColumn(futureCard, futureColumn);
        }

        function displayCardInColumn(card, column) {
            const cardElement = createCardElement(card); // Use utility to create card element
            column.innerHTML = '';
            column.appendChild(cardElement);

            setTimeout(() => {
                cardElement.classList.add('flip');
                setTimeout(() => {
                    showCardDetails(card, column);
                }, 500);
            }, 1000);
        }
    })
    .catch(error => console.error('Error loading tarot deck:', error));
