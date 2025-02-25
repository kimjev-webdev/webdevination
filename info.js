// Elements
const terminalTextElement = document.getElementById('terminalText');
const skipButton = document.getElementById('skipButton');
const buttonsContainer = document.getElementById('buttons-container');
const pickOneCardButton = document.getElementById('pickOneCard');
const pickThreeCardsButton = document.getElementById('pickThreeCards');
const pickOneExplanation = document.getElementById('pickOneExplanation');
const pickThreeExplanation = document.getElementById('pickThreeExplanation');

// Text to be typed out
const textToType = [
    "Welcome Seeker!\n",
    "It seems you are eager to embark on your journey of self discovery...\n",
    "The cards are waiting to light your way.\n",
    "Two paths lay before you, but which one will you choose?\n",
];

// State variables
let currentTextIndex = 0;
let currentCharIndex = 0;
let typingInProgress = true;

// Type the terminal text
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

// Show buttons and explanations
function showButtons() {
    // Make buttons and explanations visible
    buttonsContainer.style.opacity = 1; // Make the buttons container visible

    // Make the pickOneCard button visible
    setTimeout(() => {
        pickOneCardButton.classList.add('visible'); // Show pickOneCard button
    }, 500);

    // Make the pickThreeCards button visible
    setTimeout(() => {
        pickThreeCardsButton.classList.add('visible'); // Show pickThreeCards button
    }, 1000);

    // Make the pickOneExplanation visible
    setTimeout(() => {
        pickOneExplanation.classList.add('visible'); // Show explanation for pickOneCard
    }, 1500);

    // Make the pickThreeExplanation visible
    setTimeout(() => {
        pickThreeExplanation.classList.add('visible'); // Show explanation for pickThreeCards
    }, 1500);

    // Hide skip button after text is finished
    skipButton.style.display = 'none';
}

// Skip button functionality
skipButton.addEventListener('click', () => {
    typingInProgress = false; // Stop typing
    terminalTextElement.textContent = textToType.join(''); // Display all the text at once

    // Show buttons and explanations immediately
    showButtons();
});

// Start typing text when the page loads
window.onload = typeText;
