// Load the tarot JSON file and initialize the game logic
fetch('./assets/tarot.json') // Corrected the path to the tarot JSON file
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
            
            const cardBackImage = document.createElement('img');
            cardBackImage.src = 'assets/images/cardbacks.webp'; // Card back image path
            cardBackImage.alt = 'Card Back'; // Optional: add alt text
            cardBack.appendChild(cardBackImage); // Append img to the back element
            
            cardElement.appendChild(cardBack); // Add the back of the card to the card element

            // Create the front of the card (which will initially be hidden)
            const cardFront = document.createElement('div');
            cardFront.classList.add('card-front');
            
            const cardFrontImage = document.createElement('img');
            cardFrontImage.src = drawnCard.image; // Use front image path from JSON
            cardFrontImage.alt = drawnCard.name; // Optional: add alt text
            cardFront.appendChild(cardFrontImage); // Append img to the front element

            cardElement.appendChild(cardFront); // Add the front of the card to the card element

            // Show the card in the selected card area
            selectedCardContainer.innerHTML = ''; // Clear previous card
            selectedCardContainer.appendChild(cardElement);

            // Add an event listener to flip the card when clicked
            cardElement.addEventListener('click', function () {
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
                    <p class="card-details-text">${card.interpretation}</p>
                </div>
            `;
            selectedCardContainer.innerHTML += cardDetails;
        }

        // Shuffle the cards visually
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

            // After 3 seconds, return cards to center position and show the modal
            setTimeout(() => {
                cards.forEach(card => {
                    card.style.transition = "transform 1s ease-in, opacity 1s ease-in";
                    card.style.transform = "translate(0, 0)"; // Return to center
                    card.style.opacity = "1"; // Fully opaque
                });

                // Once the shuffle animation is complete, trigger the modal
                showModal();
            }, 3000); // 3 seconds delay before returning cards
        }

        // Function to show the modal after the shuffle animation completes
        function showModal() {
            const modal = document.getElementById('shuffleModal');
            modal.style.display = 'block'; // Show the modal
        }

        // Handle Shuffle button click (with animation)
        shuffleButton.addEventListener('click', () => {
            shuffleAnimation();
            setTimeout(() => {
                shuffleDeck(); // Shuffle deck after animation
                alert("Deck shuffled! Click 'Deal' to draw a card.");
            }, 3500); // Wait for animation to finish before shuffling deck
        });

        // Handle Deal button click (draw a card)
        dealButton.addEventListener('click', () => {
            drawCard();
        });

        // Close modal functionality
        function closeModal() {
            const modal = document.getElementById('shuffleModal');
            modal.style.display = 'none';
        }
    })
    .catch(error => console.error('Error loading tarot deck:', error));
