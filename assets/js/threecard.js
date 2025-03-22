// Load the tarot JSON file and initialize the game logic
fetch('./assets/tarot.json')
    .then(response => response.json())
    .then(data => {
        const tarotDeck = data.tarot;
        const shuffleButton = document.getElementById('shuffle-button');
        const dealButton = document.getElementById('deal-button');
        const threecardStack = document.getElementById('threecard-stack'); // Changed this reference
        const cardsContainer = document.getElementById('cards-container');
        const pastColumn = document.getElementById('past');
        const presentColumn = document.getElementById('present');
        const futureColumn = document.getElementById('future');

        let shuffledDeck = [...tarotDeck]; // Create a copy of the tarot deck to shuffle

        // Shuffle the tarot deck
        function shuffleDeck() {
            for (let i = shuffledDeck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]]; // Swap
            }
        }

        // Create shuffle animation for card stack
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

        // Handle Shuffle button click (with animation)
        shuffleButton.addEventListener('click', () => {
            // Show shuffled card stack and hide selected card container
            threecardStack.style.visibility = 'visible'; // Make shuffled cards visible
            cardsContainer.style.visibility = 'hidden'; // Hide the cards container

            shuffleDeck(); // Shuffle deck before showing cards again
            shuffleAnimation(); // Start shuffle animation

            setTimeout(() => {
                alert("Deck shuffled! Click 'Deal' to draw three cards.");
            }, 3500); // Wait for animation to finish before shuffling deck
        });

        // Handle Deal button click (draw three cards)
        dealButton.addEventListener('click', () => {
            // Hide shuffled cards and show the cards container
            threecardStack.style.visibility = 'hidden'; // Hide the shuffled card stack
            cardsContainer.style.visibility = 'visible'; // Show the cards container

            // Draw three random cards and display them in columns
            drawThreeCards();
        });

        // Draw three random cards for the PAST, PRESENT, and FUTURE columns
        function drawThreeCards() {
            if (shuffledDeck.length < 3) {
                alert("Not enough cards left in the deck!");
                return; // Stop drawing if not enough cards are left
            }

            // Draw three cards and remove them from the shuffled deck
            const pastCard = shuffledDeck.pop();
            const presentCard = shuffledDeck.pop();
            const futureCard = shuffledDeck.pop();

            // Show the cards in their respective columns
            displayCardInColumn(pastCard, pastColumn);
            displayCardInColumn(presentCard, presentColumn);
            displayCardInColumn(futureCard, futureColumn);
        }

        // Display the card in a given column
        function displayCardInColumn(card, column) {
            // Create the card element (front and back)
            const cardElement = document.createElement('div');
            cardElement.classList.add('selected-card');
            cardElement.setAttribute('data-name', card.name);
            cardElement.setAttribute('data-response', card.response);
            cardElement.setAttribute('data-interpretation', card.interpretation);

            // Create the back of the card (initially visible)
            const cardBack = document.createElement('div');
            cardBack.classList.add('card-back');

            const cardBackImage = document.createElement('img');
            cardBackImage.src = './assets/images/cardbacks.webp'; // Set card back image
            cardBackImage.alt = 'Card Back';
            cardBack.appendChild(cardBackImage);

            // Create the front of the card (hidden initially)
            const cardFront = document.createElement('div');
            cardFront.classList.add('card-front');

            const cardFrontImage = document.createElement('img');
            cardFrontImage.src = card.image; // Use front image path from JSON
            cardFrontImage.alt = card.name;
            cardFront.appendChild(cardFrontImage);

            // Append front and back to card element
            cardElement.appendChild(cardBack);
            cardElement.appendChild(cardFront);

            // Append the card to the column
            column.innerHTML = ''; // Clear any previous card
            column.appendChild(cardElement);

            // Ensure card back is displayed first, then flip after a delay
            setTimeout(() => {
                cardElement.classList.add('flip'); // Trigger flip animation

                // After the flip animation, reveal card details
                setTimeout(() => {
                    showCardDetails(card, column); // Show card details after flip
                }, 500); // Delay showing details to allow the flip to finish
            }, 1000); // Delay to ensure the back is visible first
        }

        // Display the card details in the respective column
        function showCardDetails(card, column) {
            const cardDetails = `
                <div class="card-info">
                    <h2 class="card-name">${card.name}: ${card.response}</h2>
                    <p class="card-details-text">${card.interpretation}</p>
                </div>
            `;
            column.innerHTML += cardDetails;
        }
    })
    .catch(error => console.error('Error loading tarot deck:', error));
