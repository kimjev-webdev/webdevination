document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll('.letter');
    let currentIndex = 0;

    // Function to handle the transition between icons and letters
    function animateLetters() {
        // Get the current and next letters to handle the symbol change
        const currentLetter = letters[currentIndex];
        const nextIndex = (currentIndex + 1) % letters.length;
        const nextLetter = letters[nextIndex];

        // 1. Switch the current letter to its symbol
        const currentIcon = currentLetter.querySelector('i.material-icons');
        if (currentIcon) {
            currentIcon.style.display = 'inline-block'; // Show the symbol
        }
        currentLetter.classList.add('show-symbol'); // Ensure the symbol is shown instantly

        // 2. After switching the current letter to the symbol, switch the next letter
        const nextIcon = nextLetter.querySelector('i.material-icons');
        if (nextIcon) {
            nextIcon.style.display = 'none'; // Make sure the next symbol is hidden initially
        }

        // 3. Move to the next letter, looping back to the start if needed
        currentIndex = nextIndex;

        // Continue the animation loop without any fade effect
        setTimeout(animateLetters, 200); // Short delay to keep the animation quick (you can adjust this)
    }

    // Start the animation
    animateLetters();
});
