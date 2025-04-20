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
  setupInputBehavior(input, form); // 👈 New
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

// Character counter
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

function setupCharacterCountListener(input, counter, maxChars) {
  input.addEventListener("input", () => {
    const currentLength = input.value.length;
    counter.textContent = `${currentLength} / ${maxChars}`;
    counter.style.color = currentLength > maxChars ? "red" : "#aaa";
  });
}

// Placeholder + Enter key logic
function setupInputBehavior(input, form) {
  input.addEventListener("focus", () => {
    if (input.placeholder === "Type your question...") {
      input.placeholder = "";
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      form.requestSubmit(); // Submit form on Enter
    }
  });
}

// Form submit logic
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

// Send request to backend
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
