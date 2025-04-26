// === Function Declarations (Hoisted to Top) ===

// Function to handle the transition between letters and symbols
function animateLetters(letters, currentIndex, animationCycles, container, overlay) {
    const currentLetter = letters[currentIndex];
    const currentIcon = currentLetter.querySelector('i.material-icons');
    const currentText = currentLetter.querySelector('.text');

    if (currentText) currentText.style.visibility = 'hidden';
    if (currentIcon) currentIcon.style.visibility = 'visible';

    setTimeout(() => {
        if (currentIcon) currentIcon.style.visibility = 'hidden';
        if (currentText) currentText.style.visibility = 'visible';

        currentLetter.style.opacity = 1;
        currentLetter.style.transform = 'translateY(0)';
    }, 200);

    currentIndex = (currentIndex + 1) % letters.length;
    animationCycles++;

    if (animationCycles >= 39) {
        container.style.display = 'none';
        overlay.style.display = 'flex';
    }

    setTimeout(() => {
        animateLetters(letters, currentIndex, animationCycles, container, overlay);
    }, 300);
}

// === Helper Function to Redirect to Info Page ===
function redirectToInfoPage() {
    window.location.href = "./info.html";
}

// === Execute When DOM Loaded ===
document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll('.letter');
    const button = document.querySelector('.enter-button');
    const container = document.querySelector('.container');
    const overlay = document.querySelector('.overlay');
    let currentIndex = 0;
    let animationCycles = 0;

    // Handle Enter button click
    button.addEventListener('click', redirectToInfoPage);

    // Handle container click or tap
    container.addEventListener('click', redirectToInfoPage);

    // Handle pressing Enter key anywhere on the page
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            redirectToInfoPage();
        }
    });

    // Start the letter animation
    animateLetters(letters, currentIndex, animationCycles, container, overlay);
});
