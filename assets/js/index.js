document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll('.letter'); // Select all the letters
    const button = document.querySelector('.enter-button'); // The "Enter" button
    const container = document.querySelector('.container'); // The container div
    const overlay = document.querySelector('.overlay'); // The overlay div
    let currentIndex = 0;  // Keep track of the current letter being animated
    let typingSound = new Audio('typing-sound.mp3'); // Make sure you have the typing sound file
    let animationCycles = 0; // Counter to track animation cycles

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

            // Add glow and sliding effect
            currentLetter.style.opacity = 1;
            currentLetter.style.transform = 'translateY(0)';
        }, 200); // Set how long the icon will be shown (200ms in this case)

        // Move to the next letter after a short delay
        currentIndex = (currentIndex + 1) % letters.length; // Move to the next letter, looping back at the end

        // Track the animation cycle count
        animationCycles++;

        // Show the "Enter" button after 4 animation cycles
        if (animationCycles >= 39) {
            container.style.display = 'none'; // Hide the container
            overlay.style.display = 'flex'; // Show the overlay with the Enter button
        }

        // Continue the animation by calling this function again after a delay
        setTimeout(animateLetters, 300);  // Control the total cycle time (300ms per letter)
    }

    // Function to handle 'Enter' button click
    button.addEventListener('click', function() {
        window.location.href = "./info.html"; // Replace with your desired URL
    });

    // Add event listener for container click or tap
    container.addEventListener('click', function() {
        window.location.href = "./info.html"; // Redirect to tarot.html when clicked or tapped
    });

    // Start the animation when the page loads
    animateLetters();
});

