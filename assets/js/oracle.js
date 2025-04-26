// === Function Declarations ===

// Typing the Oracle's message
function typeOracleMessage(text, element, speed = 40) {
  element.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(interval);
      isTyping = false;
      toggleFormLock(false);
    }
  }, speed);
}

// Lock or unlock form inputs
function toggleFormLock(disabled) {
  questionInput.disabled = disabled;
  oracleSubmitBtn.disabled = disabled;
}

// Fetch the Oracle response
async function fetchOracleResponse(question, responseBox) {
  isTyping = true;
  toggleFormLock(true);

  // Show interim "consulting the stars..." message immediately
  responseBox.textContent = "✨ Consulting the stars...";

  try {
    const res = await fetch("/oracle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();

    if (data.answer) {
      // Wait a tiny moment before typing real answer
      setTimeout(() => {
        typeOracleMessage(data.answer, responseBox, 40); // ✨ Faster typing speed
      }, 600); // optional small pause after "consulting"
    } else {
      responseBox.textContent = "🕯️ The Oracle is silent...";
      toggleFormLock(false);
      isTyping = false;
    }
  } catch (err) {
    console.error("Oracle error:", err);
    responseBox.textContent = "🌫️ The mists are unclear. Try again soon.";
    toggleFormLock(false);
    isTyping = false;
  }
}

// Handle submit event
function handleOracleSubmit(e) {
  e.preventDefault();

  if (isTyping) return;

  const question = questionInput.value.trim();
  if (!question) return;

  oracleResponse.textContent = "";
  fetchOracleResponse(question, oracleResponse);
}

// === SETUP ===

const oracleForm = document.getElementById("oracle-form");
const questionInput = document.getElementById("questionInput");
const oracleResponse = document.getElementById("oracle-response");
const oracleSubmitBtn = oracleForm.querySelector("button[type='submit']");

let isTyping = false;

oracleForm.addEventListener("submit", handleOracleSubmit);

// Allow Enter key (without Shift) to submit
questionInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    if (!isTyping) oracleForm.requestSubmit();
  }
});
