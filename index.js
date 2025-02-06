// script.js
document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll('.letter');
  
    let index = 0;
  
    function animateLetters() {
      // Reset all letters to their normal state
      letters.forEach(letter => letter.classList.remove('show-symbol'));
  
      // Show symbol for current letter
      letters[index].classList.add('show-symbol');
  
      // Move to next letter
      index = (index + 1) % letters.length;
    }
  
    // Start the animation, repeat every 1 second (1000ms)
    setInterval(animateLetters, 1000);
  });
  