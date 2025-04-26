/* jshint esversion: 11 */
/* jshint node: true */
/* jshint -W079 */

// this script handles the text and symbol animation shown when the user first visits the site
// it animates each letter and symbol in a loop to create a dynamic visual effect
// it also handles clicks and keypresses that redirect the user to the info page

// function to animate letters and symbols in sequence
function animateLetters(letters, currentIndex, animationCycles, container, overlay) {
    const currentLetter = letters[currentIndex];
    const currentIcon = currentLetter.querySelector('i.material-icons');
    const currentText = currentLetter.querySelector('.text');

    // hide the text and show the symbol
    if (currentText) currentText.style.visibility = 'hidden';
    if (currentIcon) currentIcon.style.visibility = 'visible';

    // after a short delay, hide the symbol and show the text
    setTimeout(() => {
        if (currentIcon) currentIcon.style.visibility = 'hidden';
        if (currentText) currentText.style.visibility = 'visible';

        // reset the letter's opacity and position
        currentLetter.style.opacity = 1;
        currentLetter.style.transform = 'translateY(0)';
    }, 200);

    // move to the next letter
    currentIndex = (currentIndex + 1) % letters.length;
    animationCycles++;

    // after 39 cycles, hide the container and show the overlay
    if (animationCycles >= 39) {
        container.style.display = 'none';
        overlay.style.display = 'flex';
    }

    // continue the animation loop
    setTimeout(() => {
        animateLetters(letters, currentIndex, animationCycles, container, overlay);
    }, 300);
}

// function to redirect the user to the info page
function redirectToInfoPage() {
    window.location.href = "./info.html";
}

// run this code after the dom has fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll('.letter');
    const button = document.querySelector('.enter-button');
    const container = document.querySelector('.container');
    const overlay = document.querySelector('.overlay');
    let currentIndex = 0;
    let animationCycles = 0;

    // when the user clicks the enter button, redirect to info page
    button.addEventListener('click', redirectToInfoPage);

    // when the user clicks anywhere on the container, redirect to info page
    container.addEventListener('click', redirectToInfoPage);

    // when the user presses enter on the keyboard, redirect to info page
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            redirectToInfoPage();
        }
    });

    // start the letter animation
    animateLetters(letters, currentIndex, animationCycles, container, overlay);
});
