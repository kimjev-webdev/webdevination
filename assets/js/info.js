// === Function Declarations (Hoisted) ===

// Typing the terminal text
function typeText() {
    const existingCursor = document.querySelector('.cursor');
    if (existingCursor) existingCursor.remove();

    if (typingInProgress && currentTextIndex < textToType.length) {
        const currentText = textToType[currentTextIndex];

        if (currentCharIndex < currentText.length) {
            terminalTextElement.textContent += currentText[currentCharIndex];
            currentCharIndex++;
            addCursor();
            setTimeout(typeText, 40); // ✨ Faster typing speed
        } else {
            terminalTextElement.textContent += '\n';
            currentTextIndex++;
            currentCharIndex = 0;
            addCursor();
            setTimeout(typeText, 300); // ✨ Faster line delay
        }
    } else if (currentTextIndex >= textToType.length) {
        addCursor();
        showButtons();
    }
}

// Adding the blinking cursor
function addCursor() {
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.textContent = '|';
    terminalTextElement.appendChild(cursor);
}

// Show the buttons, explanations, images
function showButtons() {
    buttonsContainer.style.opacity = 1;

    cardbacksOne.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('visible');
        }, 300 + (index * 300)); // ✨ Staggered animation
        
    });

    setTimeout(() => pickOneCardButton.classList.add('visible'), 300);
    setTimeout(() => pickThreeCardsButton.classList.add('visible'), 600);
    setTimeout(() => pickOneExplanation.classList.add('visible'), 900);
    setTimeout(() => pickThreeExplanation.classList.add('visible'), 900);

    skipButton.style.display = 'none';
}

// Skip button manually triggers showing everything
function handleSkipButtonClick() {
    typingInProgress = false;
    terminalTextElement.textContent = textToType.join('');
    addCursor();
    showButtons();
}

// === Global Declarations ===
let currentTextIndex = 0;
let currentCharIndex = 0;
let typingInProgress = true;

const terminalTextElement = document.getElementById('terminalText');
const skipButton = document.getElementById('skipButton');
const buttonsContainer = document.getElementById('buttons-container');
const pickOneCardButton = document.getElementById('pickOneCard');
const pickThreeCardsButton = document.getElementById('pickThreeCards');
const pickOneExplanation = document.getElementById('pickOneExplanation');
const pickThreeExplanation = document.getElementById('pickThreeExplanation');
const cardbacksOne = document.querySelectorAll('#buttons-container .col-12.col-md-6 img');

const textToType = [
    "Welcome Seeker!\n",
    "I sense that you are eager to embark on a journey of self discovery...\n",
    "The cards are waiting to guide your way!\n",
    "Two paths lay before you, but which one will you choose?\n",
];

// === Page Load Logic ===
window.addEventListener('load', function () {
    if (sessionStorage.getItem('visitedInfoPage')) {
        // User already visited → instantly show heading and buttons
        terminalTextElement.style.display = 'none';
        skipButton.style.display = 'none';

        // Inject a new centered heading "READINGS"
        const readingsHeading = document.createElement('h2');
        readingsHeading.textContent = "🍄 TAROT READINGS";
        readingsHeading.style.fontSize = "2.5rem";
        readingsHeading.style.textAlign = "center"

        const terminalSection = document.querySelector('.terminal');
        terminalSection.appendChild(readingsHeading);

        showButtons();
    } else {
        // First visit → type text normally
        sessionStorage.setItem('visitedInfoPage', 'true');
        typeText();
    }
});

// Skip button event
skipButton.addEventListener('click', handleSkipButtonClick);
