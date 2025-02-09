document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll('.letter');
    let currentIndex = 0;
  
    // Function to handle the transition between icons and letters
    function animateLetters() {
        // Hide all icons instantly
        letters.forEach(letter => {
            const icon = letter.querySelector('i.material-icons');
            if (icon) {
                icon.style.display = 'none'; // Instantly hide the icon
            }
        });
  
        // Wait for a moment to let the icon disappear before showing the next one
        setTimeout(() => {
            // Show the current symbol/icon for the letter
            const currentLetter = letters[currentIndex];
            currentLetter.classList.add('show-symbol');
            const icon = currentLetter.querySelector('i.material-icons');
            if (icon) {
                icon.style.display = 'inline-block'; // Instantly show the icon
            }
  
            // Move to the next letter, loop back to the start if needed
            currentIndex = (currentIndex + 1) % letters.length;
        }, 100); // Short delay to allow icon to disappear before switching
  
        // Delay the next animation cycle (after the whole cycle)
        setTimeout(animateLetters, 1000); // Trigger again after the whole cycle is done
    }
  
    // Start the animation
    animateLetters();
  });
  