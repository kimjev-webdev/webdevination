// 🧠 HOISTED FUNCTIONS — defined before they're used

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

function toggleFormLock(disabled) {
  questionInput.disabled = disabled;
  oracleSubmitBtn.disabled = disabled;
}

async function fetchOracleResponse(question, responseBox) {
  isTyping = true;
  toggleFormLock(true);

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

function handleOracleSubmit(e) {
  e.preventDefault();

  if (isTyping) return;

  const question = questionInput.value.trim();
  if (!question) return;

  oracleResponse.textContent = "";
  fetchOracleResponse(question, oracleResponse);
}

// 🧩 SETUP

const oracleForm = document.getElementById("oracle-form");
const questionInput = document.getElementById("questionInput");
const oracleResponse = document.getElementById("oracle-response");
const oracleSubmitBtn = oracleForm.querySelector("button[type='submit']");

let isTyping = false;

oracleForm.addEventListener("submit", handleOracleSubmit);

questionInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    if (!isTyping) oracleForm.requestSubmit();
  }
});
