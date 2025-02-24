const terminalTextElement = document.getElementById('terminalText');
const skipButton = document.getElementById('skipButton');

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
    }
}

// Start typing the text when the page loads
window.onload = typeText;

// Skip button functionality
skipButton.addEventListener('click', () => {
    window.location.href = './tarot.html'; // Redirect to tarot.html when the button is clicked
});
