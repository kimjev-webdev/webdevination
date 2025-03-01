// Load the tarot JSON file and initialize the game logic
fetch('tarot.json')
    .then(response => response.json())
    .then(data => {
        const tarotDeck = data.tarot;
        const shuffleButton = document.getElementById('shuffle');
        const dealButton = document.getElementById('deal');
        const selectedCardContainer = document.getElementById('selected-cardone');

        // Array of explicit card names corresponding to the webp files
        const cardNames = [
            "aceofcups", "twoofcups", "threeofcups", "fourofcups", "fiveofcups", "sixofcups", "sevenofcups", "eightofcups", "nineofcups", "tenofcups", "pageofcups", "knightofcups", "queenofcups", "kingofcups",
            "aceofwands", "twoofwands", "threeofwands", "fourofwands", "fiveofwands", "sixofwands", "sevenofwands", "eightofwands", "nineofwands", "tenofwands", "pageofwands", "knightofwands", "queenofwands", "kingofwands",
            "aceofswords", "twoofswords", "threeofswords", "fourofswords", "fiveofswords", "sixofswords", "sevenofswords", "eightofswords", "nineofswords", "tenofswords", "pageofswords", "knightofswords", "queenofswords", "kingofswords",
            "aceofpentacles", "twoofpentacles", "threeofpentacles", "fourofpentacles", "fiveofpentacles", "sixofpentacles", "sevenofpentacles", "eightofpentacles", "nineofpentacles", "tenofpentacles", "pageofpentacles", "knightofpentacles", "queenofpentacles", "kingofpentacles",
            "thefool", "themagician", "thehighpriestess", "theempress", "theemperor", "thehierophant", "thelovers", "thechariot", "strength", "thehermit", "wheeloffortune", "justice", "thehangedman", "death", "temperance", "thedevil", "thetower", "thestar", "themoon", "thesun", "judgement", "theworld"
        ];

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

            // Find the corresponding image filename from the cardNames array
            const cardFileName = cardNames.find(name => name.toLowerCase() === drawnCard.name.toLowerCase().replace(/\s+/g, ''));

            if (!cardFileName) {
                console.error("Card image not found for:", drawnCard.name);
                return;
            }

            const cardElement = document.createElement('div');
            cardElement.classList.add('selected-card');
            cardElement.style.backgroundImage = `url('../assets/images/cardfronts/${cardFileName}.webp')`;
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
                    <h2 class="card-name">${card.name}</h2>
                    <p class="card-details-text"><strong>Interpretation:</strong> ${card.interpretation}</p>
                    <p class="card-details-text"><strong>Response:</strong> ${card.response}</p>
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
