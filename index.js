document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll('.letter'); // Select all the letters
    const button = document.querySelector('.enter-button'); // The "Enter" button
    let currentIndex = 0;  // Keep track of the current letter being animated
    let typingSound = new Audio('typing-sound.mp3'); // Make sure you have the typing sound file

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

        // Continue the animation by calling this function again after a delay
        setTimeout(animateLetters, 300);  // Control the total cycle time (300ms per letter)
    }

    // Start the animation when the page loads
    animateLetters();

    // Create and append the cursor
    const cursor = document.createElement('span');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor); // Append the cursor to the body

    // Show the "Enter" button after all letters have been revealed
    function showEnterButton() {
        button.classList.add('show');
    }

    // Function to handle 'Enter' button click
    document.querySelector('.enter-button').addEventListener('click', function() {
        window.location.href = "./tarot.html"; // Replace with your desired URL
    });
});


// Select the container and overlay
const container = document.querySelector('.container');
const overlay = document.querySelector('.overlay');

// Function to show the overlay and hide the content
container.addEventListener('mouseenter', function() {
  // Show the overlay
  overlay.style.display = 'flex';
  
  // Hide the content inside the container
  const letters = container.querySelectorAll('.letter');
  letters.forEach(letter => {
    letter.style.display = 'none';  // Hide each letter
  });
});

// Function to hide the overlay and show the content again
container.addEventListener('mouseleave', function() {
  // Hide the overlay
  overlay.style.display = 'none';
  
  // Show the content inside the container
  const letters = container.querySelectorAll('.letter');
  letters.forEach(letter => {
    letter.style.display = 'inline-block';  // Show each letter
  });
});
