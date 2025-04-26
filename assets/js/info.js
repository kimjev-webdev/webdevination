/* jshint esversion: 11 */
/* jshint node: true */
/* jshint -W079 */

// this script handles the text animation and terminal-like interface on the info page
// it types out an introductory message for users which simulates a terminal output
// it also handles the skip button to instantly show the content and buttons if the user wants to skip the typing animation
// it uses sessionstorage to remember if the user has already visited the page, and if so, it skips the typing animation and displays a title for the readings section

// function to type out text one character at a time
function typeText() {
    const existingCursor = document.querySelector('.cursor');
    if (existingCursor) existingCursor.remove();

    if (typingInProgress && currentTextIndex < textToType.length) {
        const currentText = textToType[currentTextIndex];

        // if still typing a line, add the next character
        if (currentCharIndex < currentText.length) {
            terminalTextElement.textContent += currentText[currentCharIndex];
            currentCharIndex++;
            addCursor();
            setTimeout(typeText, 40); // faster typing speed
        } else {
            // move to next line after completing a line
            terminalTextElement.textContent += '\n';
            currentTextIndex++;
            currentCharIndex = 0;
            addCursor();
            setTimeout(typeText, 300); // small delay before next line
        }
    } else if (currentTextIndex >= textToType.length) {
        // finished typing all lines
        addCursor();
        showButtons();
    }
}

// function to add a blinking cursor at the end of the text
function addCursor() {
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.textContent = '|';
    terminalTextElement.appendChild(cursor);
}

// function to show the buttons and explanations after typing finishes
function showButtons() {
    buttonsContainer.style.opacity = 1;

    // show each image with a staggered animation
    cardbacksOne.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('visible');
        }, 300 + (index * 300));
    });

    // reveal the one card button
    setTimeout(() => {
        if (pickOneCardButton) pickOneCardButton.classList.add('visible');
    }, 300);

    // reveal the three cards button
    setTimeout(() => {
        if (pickThreeCardsButton) pickThreeCardsButton.classList.add('visible');
    }, 600);

    // reveal the explanations for both options
    setTimeout(() => {
        if (pickOneExplanation) pickOneExplanation.classList.add('visible');
    }, 900);

    setTimeout(() => {
        if (pickThreeExplanation) pickThreeExplanation.classList.add('visible');
    }, 900);

    // hide the skip button once everything is shown
    skipButton.style.display = 'none';
}

// function to handle when the skip button is clicked
function handleSkipButtonClick() {
    typingInProgress = false;
    terminalTextElement.textContent = textToType.join('');
    addCursor();
    showButtons();
}

// === global variable declarations ===
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

// page load logic
window.addEventListener('load', function () {
    if (sessionStorage.getItem('visitedInfoPage')) {
        // if user already visited, skip typing and show heading instantly
        terminalTextElement.style.display = 'none';
        skipButton.style.display = 'none';

        const readingsHeading = document.createElement('h2');
        readingsHeading.textContent = "🍄 tarot readings";
        readingsHeading.style.fontSize = "2.5rem";
        readingsHeading.style.textAlign = "center";

        const terminalSection = document.querySelector('.terminal');
        terminalSection.appendChild(readingsHeading);

        showButtons();
    } else {
        // if first visit, start typing animation
        sessionStorage.setItem('visitedInfoPage', 'true');
        typeText();
    }
});

// event listener for skip button
skipButton.addEventListener('click', handleSkipButtonClick);
