document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const overlay = document.querySelector(".overlay");
  const letters = document.querySelectorAll(".letter"); // Select all the letters

  const button = document.querySelector(".enter-button"); // The "Enter" button

  // Function to handle 'Enter' button click
  button.addEventListener("click", function () {
    window.location.href = "./tarot.html"; // Replace with your desired URL
  });

  // Your original letter animation code...
  let currentIndex = 0;

  function animateLetters() {
    const currentLetter = letters[currentIndex];
    const currentIcon = currentLetter.querySelector("i.material-icons");
    const currentText = currentLetter.querySelector(".text");

    if (currentText) {
      currentText.style.visibility = "hidden";
    }
    if (currentIcon) {
      currentIcon.style.visibility = "visible";
    }

    setTimeout(() => {
      if (currentIcon) {
        currentIcon.style.visibility = "hidden";
      }
      if (currentText) {
        currentText.style.visibility = "visible";
      }

      currentLetter.style.opacity = 1;
      currentLetter.style.transform = "translateY(0)";
    }, 200);

    currentIndex = (currentIndex + 1) % letters.length;

    setTimeout(animateLetters, 300);
  }

  animateLetters();

  // Show the overlay and hide the container content on hover
  container.addEventListener("mouseenter", function () {
    container.style.display = "none"; // Hide the entire container
    overlay.style.display = "flex"; // Show the overlay
  });

  // Show the container and hide the overlay when not hovering
  container.addEventListener("mouseleave", function () {
    container.style.display = "flex"; // Show the container
    overlay.style.display = "none"; // Hide the overlay
  });
});
