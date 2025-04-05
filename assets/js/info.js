// This script handles the typing effect for the terminal text and the display of buttons and explanations.     
// Function to type the terminal text
function typeText() {
    if (typingInProgress && currentTextIndex < textToType.length) {
        const currentText = textToType[currentTextIndex];
        
        if (currentCharIndex < currentText.length) {
            terminalTextElement.textContent += currentText[currentCharIndex];
            currentCharIndex++;
            setTimeout(typeText, 100); // Adjust typing speed
        } else {
            // After typing a line, move to the next line after a delay
            terminalTextElement.textContent += '\n';
            currentTextIndex++;
            currentCharIndex = 0;
            setTimeout(typeText, 500); // Adjust delay between lines
        }
    } else if (currentTextIndex >= textToType.length) {
        // Once typing is done, show buttons and explanations
        showButtons();
    }
}

// Function to show buttons and explanations
function showButtons() {
    // Make buttons and explanations visible
    buttonsContainer.style.opacity = 1; // Make the buttons container visible

    // Make the cardback images visible (same as buttons)
    cardbacksOne.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('visible'); // Show cardback image
        }, 500 + (index * 500)); // Add a small delay for each card image
    });

    // Make the pickOneCard button visible
    setTimeout(() => {
        pickOneCardButton.classList.add('visible'); // Show pick one card button
    }, 500);

    // Make the pickThreeCards button visible
    setTimeout(() => {
        pickThreeCardsButton.classList.add('visible'); // Show pick three cards button
    }, 1000);

    // Make the pickOneExplanation visible
    setTimeout(() => {
        pickOneExplanation.classList.add('visible'); // Show explanation for a one card reading
    }, 1500);

    // Make the pickThreeExplanation visible
    setTimeout(() => {
        pickThreeExplanation.classList.add('visible'); // Show explanation for three card reading   
    }, 1500);

    // Hide skip button after text is finished
    skipButton.style.display = 'none';
}

// Function to handle skip button click
function handleSkipButtonClick() {
    typingInProgress = false; // Stop typing
    terminalTextElement.textContent = textToType.join(''); // Display all the text at once to avoid delay from terminal effect introduction text

    // Show buttons and explanations immediately
    showButtons();
}

// State variables (moved here after function declarations)
let currentTextIndex = 0;
let currentCharIndex = 0;
let typingInProgress = true;

// DOM elements (kept here, after the state variables)
const terminalTextElement = document.getElementById('terminalText');
const skipButton = document.getElementById('skipButton');
const buttonsContainer = document.getElementById('buttons-container');
const pickOneCardButton = document.getElementById('pickOneCard');
const pickThreeCardsButton = document.getElementById('pickThreeCards');
const pickOneExplanation = document.getElementById('pickOneExplanation');
const pickThreeExplanation = document.getElementById('pickThreeExplanation');

// Image elements
const cardbacksOne = document.querySelectorAll('#buttons-container .col-12.col-md-6 img'); // Select the images above each button

// Text to be typed out
const textToType = [
    "Welcome Seeker!\n",
    "I sense that you are eager to embark on a journey of self discovery...\n",
    "The cards are waiting to guide your way!\n",
    "Two paths lay before you, but which one will you choose?\n",
];

// Add event listener for skip button
skipButton.addEventListener('click', handleSkipButtonClick);

// Start typing text when the page loads
window.onload = typeText;
