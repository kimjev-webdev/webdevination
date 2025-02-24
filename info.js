const terminalTextElement = document.getElementById('terminalText');
const skipButton = document.getElementById('skipButton');
const buttonsContainer = document.getElementById('buttons-container');
const pickOneCardButton = document.getElementById('pickOneCard');
const pickThreeCardsButton = document.getElementById('pickThreeCards');
const pickOneExplanation = document.getElementById('pickOneExplanation');
const pickThreeExplanation = document.getElementById('pickThreeExplanation');

// Sample text that will be "typed" out
const textToType = [
    "Welcome Seeker!\n",
    "It seems you are eager to embark on your journey of self discovery.\n",
    "The cards are waiting to light your way.\n",
    "Two paths lay before you, but which one will you choose?\n",
];

let currentTextIndex = 0;
let currentCharIndex = 0;

function typeText() {
    if (currentTextIndex < textToType.length) {
        let currentText = textToType[currentTextIndex];
        if (currentCharIndex < currentText.length) {
            terminalTextElement.textContent += currentText[currentCharIndex];
            currentCharIndex++;
            setTimeout(typeText, 100); // Adjust speed by changing the timeout value
        } else {
            // Move to the next line after the current text is typed out
            terminalTextElement.textContent += '\n';
            currentTextIndex++;
            currentCharIndex = 0;
            setTimeout(typeText, 500); // Wait a bit before typing the next line
        }
    } else {
        // Show buttons and their explanations after typing finishes
        showButtons();
    }
}

// Show the buttons with smooth transitions
function showButtons() {
    buttonsContainer.style.opacity = 1; // Make the container visible
    setTimeout(() => {
        pickOneCardButton.classList.add('visible'); // Make first button visible
    }, 500); // Delay to give time for container to show

    setTimeout(() => {
        pickThreeCardsButton.classList.add('visible'); // Make second button visible
    }, 1000); // Delay the second button

    setTimeout(() => {
        pickOneExplanation.classList.add('visible'); // Show explanation for first button
    }, 1500); // Delay for explanation

    setTimeout(() => {
        pickThreeExplanation.classList.add('visible'); // Show explanation for second button
    }, 1500); // Both explanations appear at once
}

// Start typing the text when the page loads
window.onload = typeText;

// Skip button functionality
skipButton.addEventListener('click', () => {
    window.location.href = './tarot.html'; // Redirect to tarot.html when the button is clicked
});
