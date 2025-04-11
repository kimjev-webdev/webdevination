document.addEventListener("DOMContentLoaded", () => {
  initOracleApp();
});

// Entry point
function initOracleApp() {
  const form = document.querySelector("#oracle-form");
  const input = document.querySelector("#questionInput");
  const responseBox = document.querySelector("#oracle-response");

  const counter = setupCharacterCounter(input);
  const maxChars = 500;

  setupCharacterCountListener(input, counter, maxChars);
  setupFormSubmitHandler(form, input, responseBox, maxChars);
}

// Typing animation
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

// Create or reuse character counter
function setupCharacterCounter(input) {
  let counter = document.querySelector("#char-count");
  if (!counter) {
    counter = document.createElement("div");
    counter.id = "char-count";
    counter.style.marginTop = "0.5rem";
    counter.style.fontSize = "0.9rem";
    counter.style.color = "#aaa";
    input.parentNode.insertBefore(counter, input.nextSibling);
  }
  return counter;
}

// Attach input listener for live character count
function setupCharacterCountListener(input, counter, maxChars) {
  input.addEventListener("input", () => {
    const currentLength = input.value.length;
    counter.textContent = `${currentLength} / ${maxChars}`;
    counter.style.color = currentLength > maxChars ? "red" : "#aaa";
  });
}

// Handle form submission
function setupFormSubmitHandler(form, input, responseBox, maxChars) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const question = input.value.trim();
    if (!question) return;

    if (question.length > maxChars) {
      responseBox.textContent = "⚠️ Your question is too powerful. Please shorten it to 500 characters or fewer.";
      return;
    }

    responseBox.textContent = "🔮 Consulting the stars...";
    await fetchOracleResponse(question, responseBox);
  });
}

// Call the backend and show the Oracle's response
async function fetchOracleResponse(question, responseBox) {
  try {
    const res = await fetch("/oracle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    if (data.answer) {
      typeOracleMessage(data.answer, responseBox);
    } else {
      responseBox.textContent = "🕯️ The Oracle is silent...";
    }
  } catch (err) {
    console.error(err);
    responseBox.textContent = "🌫️ The mists are unclear. Try again soon.";
  }
}

