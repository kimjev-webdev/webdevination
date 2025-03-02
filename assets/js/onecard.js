// Load the tarot JSON file and initialize the game logic
fetch('tarot.json')
    .then(response => response.json())
    .then(data => {
        const tarotDeck = data.tarot;
        const shuffleButton = document.getElementById('shuffle');
        const dealButton = document.getElementById('deal');
        const selectedCardContainer = document.getElementById('selected-cardone');

        // Shuffle the tarot deck
        function shuffleDeck() {
            for (let i = tarotDeck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [tarotDeck[i], tarotDeck[j]] = [tarotDeck[j], tarotDeck[i]]; // Swap
            }
        }

        // Draw a single card from the shuffled deck
        function drawCard() {
            shuffleDeck(); // Shuffle before drawing
            const drawnCard = tarotDeck[0]; // Get the first card after shuffle

            // Create the card element (front and back)
            const cardElement = document.createElement('div');
            cardElement.classList.add('selected-card');
            cardElement.setAttribute('data-name', drawnCard.name);
            cardElement.setAttribute('data-response', drawnCard.response);
            cardElement.setAttribute('data-interpretation', drawnCard.interpretation);

            // Create the back of the card (initially showing the back)
            const cardBack = document.createElement('div');
            cardBack.classList.add('card-back');
            cardBack.style.backgroundImage = "url('webdevination/assets/images/cardbacks.webp')";  // Correct path for the card back
            cardElement.appendChild(cardBack);

            // Create the front of the card, which will initially be hidden
            const cardFront = document.createElement('div');
            cardFront.classList.add('card-front');
            cardFront.style.backgroundImage = `url('${drawnCard.image}')`; // Use front image path from JSON
            cardElement.appendChild(cardFront);

            // Show the card in the selected card area
            selectedCardContainer.innerHTML = ''; // Clear previous card
            selectedCardContainer.appendChild(cardElement);

            // Add an event listener to flip the card when clicked
            cardElement.addEventListener('click', function() {
                // Add flip class to trigger the flip animation
                cardElement.classList.add('flip'); 

                // After the flip animation, reveal card details
                setTimeout(() => {
                    showCardDetails(drawnCard); // Show card details after flip
                }, 500); // Delay the details showing to allow flip to complete
            });
        }

        // Display the card details
        function showCardDetails(card) {
            const cardDetails = `
                <div class="card-info">
                    <h2 class="card-name">${card.name}: ${card.response}</h2>
                    <p class="card-details-text">${card.interpretation}</p> <!-- Removed the "Interpretation:" title -->
                </div>
            `;
            selectedCardContainer.innerHTML += cardDetails;
        }

        // Handle Shuffle button click
        shuffleButton.addEventListener('click', () => {
            shuffleDeck();
            alert("Deck shuffled! Click 'Deal' to draw a card.");
        });

        // Handle Deal button click (draw a card)
        dealButton.addEventListener('click', () => {
            drawCard();
        });
    })
    .catch(error => console.error('Error loading tarot deck:', error));
