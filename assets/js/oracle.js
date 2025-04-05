document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#oracle-form");
  const input = document.querySelector("#questionInput");
  const responseBox = document.querySelector("#oracle-response");

  // Typing animation function
  function typeOracleMessage(text, element, speed = 40) {
    element.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      element.textContent += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);
  }

  // Create or select a character counter
  let counter = document.querySelector("#char-count");
  if (!counter) {
    counter = document.createElement("div");
    counter.id = "char-count";
    counter.style.marginTop = "0.5rem";
    counter.style.fontSize = "0.9rem";
    counter.style.color = "#aaa";
    input.parentNode.insertBefore(counter, input.nextSibling);
  }

  // Set max length
  const maxChars = 500;

  // Update character count
  input.addEventListener("input", () => {
    const currentLength = input.value.length;
    counter.textContent = `${currentLength} / ${maxChars}`;

    if (currentLength > maxChars) {
      counter.style.color = "red";
    } else {
      counter.style.color = "#aaa";
    }
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const question = input.value.trim();
    if (!question) return;

    if (question.length > maxChars) {
      responseBox.textContent = "⚠️ Your question is too powerful. Please shorten it to 500 characters or fewer.";
      return;
    }

    responseBox.textContent = "🔮 Consulting the stars...";

    try {
      const res = await fetch("http://localhost:3000/oracle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      if (data.answer) {
        typeOracleMessage(data.answer, responseBox); // 💫 Here’s the magic!
      } else {
        responseBox.textContent = "🕯️ The Oracle is silent...";
      }
    } catch (err) {
      console.error(err);
      responseBox.textContent = "🌫️ The mists are unclear. Try again soon.";
    }
  });
});
