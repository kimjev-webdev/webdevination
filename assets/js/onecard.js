// Load the tarot JSON file and initialize the game logic
fetch('./assets/tarot.json')
    .then(response => response.json())
    .then(data => {
        const tarotDeck = data.tarot;
        const shuffleButton = document.getElementById('shuffle');
        const dealButton = document.getElementById('deal');
        const selectedCardContainer = document.getElementById('selected-cardone');
        const cardStack = document.getElementById('card-stack'); // Card stack to show shuffled cards

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
            cardStack.style.display = 'flex'; // Show shuffled cards with flexbox
            selectedCardContainer.style.display = 'none'; // Hide the selected card container

            shuffleDeck(); // Shuffle deck before showing cards again
            shuffleAnimation(); // Start shuffle animation

            setTimeout(() => {
                alert("Deck shuffled! Click 'Deal' to draw a card.");
            }, 3500); // Wait for animation to finish before shuffling deck
        });

        // Draw a single card from the shuffled deck
        function drawCard() {
            if (shuffledDeck.length === 0) {
                alert("No more cards in the deck!");
                return; // Stop drawing if no cards are left
            }

            const drawnCard = shuffledDeck.pop(); // Get the first card and remove it from the shuffled deck

            // Create the card element (front and back)
            const cardElement = document.createElement('div');
            cardElement.classList.add('selected-card');
            cardElement.setAttribute('data-name', drawnCard.name);
            cardElement.setAttribute('data-response', drawnCard.response);
            cardElement.setAttribute('data-interpretation', drawnCard.interpretation);

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
            cardFrontImage.src = drawnCard.image; // Use front image path from JSON
            cardFrontImage.alt = drawnCard.name;
            cardFront.appendChild(cardFrontImage);

            // Append front and back to card element
            cardElement.appendChild(cardBack);
            cardElement.appendChild(cardFront);

            // Add the card to the selected card container
            selectedCardContainer.innerHTML = ''; // Clear any previous cards
            selectedCardContainer.appendChild(cardElement);

            // Ensure card back is displayed first, then flip after a delay
            setTimeout(() => {
                cardElement.classList.add('flip'); // Trigger flip animation

                // After the flip animation, reveal card details
                setTimeout(() => {
                    showCardDetails(drawnCard); // Show card details after flip
                }, 500); // Delay showing details to allow the flip to finish
            }, 1000); // Delay to ensure the back is visible first
        }

        // Display the card details
        function showCardDetails(card) {
            const cardDetails = `
                <div class="card-info">
                    <h2 class="card-name">${card.name}: ${card.response}</h2>
                    <p class="card-details-text">${card.interpretation}</p>
                </div>
            `;
            selectedCardContainer.innerHTML += cardDetails;
        }

        // Handle Deal button click (draw a card)
        dealButton.addEventListener('click', () => {
            // Hide shuffled cards and show the selected card
            cardStack.style.display = 'none'; // Hide the shuffled card stack
            selectedCardContainer.style.display = 'flex'; // Show the selected card with flexbox

            // Draw a card when the "Deal" button is clicked
            drawCard();
        });
    })
    .catch(error => console.error('Error loading tarot deck:', error));
