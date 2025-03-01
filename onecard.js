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

            const cardElement = document.createElement('div');
            cardElement.classList.add('selected-card');
            cardElement.style.backgroundImage = `url('../assets/images/cardfronts/${drawnCard.name.toLowerCase().replace(/\s+/g, '')}.webp')`;
            cardElement.setAttribute('data-name', drawnCard.name);
            cardElement.setAttribute('data-response', drawnCard.response);
            cardElement.setAttribute('data-interpretation', drawnCard.interpretation);

            // Create the card back (initially showing the back of the card)
            const cardBack = document.createElement('div');
            cardBack.classList.add('card-back');
            cardBack.style.backgroundImage = "url('./assets/images/cardbacks.webp')";  // Correct path for the card back
            cardElement.appendChild(cardBack);

            // Add animation for the card flip
            setTimeout(() => {
                cardBack.classList.add('flip');
            }, 100);

            // Show the card in the selected card area
            selectedCardContainer.innerHTML = ''; // Clear previous card
            selectedCardContainer.appendChild(cardElement);

            // Add an event listener to show the card details when clicked
            cardElement.addEventListener('click', function() {
                showCardDetails(drawnCard);
            });
        }

        // Display the card details
        function showCardDetails(card) {
            const cardDetails = `
                <div class="card-info">
                    <h2>${card.name}</h2>
                    <p><strong>Interpretation:</strong> ${card.interpretation}</p>
                    <p><strong>Response:</strong> ${card.response}</p>
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
