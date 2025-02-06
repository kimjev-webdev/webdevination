document.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll('.letter');
  let currentIndex = 0;

  // Function to handle the transition between icons and letters
  function animateLetters() {
      // Hide all symbols
      letters.forEach(letter => {
          letter.classList.remove('show-symbol');
          // Reset opacity on the icon to hide it
          const icon = letter.querySelector('i.material-icons');
          if (icon) {
              icon.style.opacity = 0;
          }
      });

      // Show the current symbol/icon for the letter
      const currentLetter = letters[currentIndex];
      currentLetter.classList.add('show-symbol');
      const icon = currentLetter.querySelector('i.material-icons');
      if (icon) {
          icon.style.opacity = 1;
      }

      // Move to the next letter, loop back to the start if needed
      currentIndex = (currentIndex + 1) % letters.length;

      // Delay the next animation
      setTimeout(animateLetters, 1000); // Trigger every 1 second (1000ms)
  }

  // Start the animation
  animateLetters();
});
