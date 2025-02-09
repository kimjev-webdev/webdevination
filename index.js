document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll('.letter'); // Select all the letters
    let currentIndex = 0;  // Keep track of the current letter being animated

    // Function to handle the transition between letters and symbols
    function animateLetters() {
        const currentLetter = letters[currentIndex]; // Get the current letter element
        const currentIcon = currentLetter.querySelector('i.material-icons'); // Get the corresponding icon
        const currentText = currentLetter.querySelector('.text'); // Get the corresponding text (letter)

        // Make the current letter invisible and show its symbol
        if (currentText) {
            currentText.style.visibility = 'hidden';  // Hide the letter
        }
        if (currentIcon) {
            currentIcon.style.visibility = 'visible'; // Show the icon
        }

        // After the symbol has been shown, hide it and show the letter again
        setTimeout(() => {
            // Hide the current icon
            if (currentIcon) {
                currentIcon.style.visibility = 'hidden';
            }

            // Show the current letter
            if (currentText) {
                currentText.style.visibility = 'visible';  // Show the letter again
            }
        }, 500); // Set how long the icon will be shown (500ms in this case)

        // Move to the next letter after a short delay
        currentIndex = (currentIndex + 1) % letters.length; // Move to the next letter, looping back at the end

        // Continue the animation by calling this function again after a delay
        setTimeout(animateLetters, 300);  // Control the total cycle time (1 second per letter)
    }

    // Start the animation when the page loads
    animateLetters();
});
