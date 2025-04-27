/* jshint esversion: 11 */
/* jshint node: true */
/* jshint -W079 */

// this script handles the front end for the oracle form submission and response display
// it uses the openai api to generate a response based on the user's question
// it handles the typing animation for the oracle's response
// it displays an interim message while waiting for the response
// it uses the fetch api to send the question to the server and receive the response

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

  responseBox.textContent = "✨ Consulting the stars...";

  const userLocale = navigator.language || "en-US"; // detect user's browser locale

  try {
    const res = await fetch("/oracle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, locale: userLocale }), // <-- Send locale too
    });

    const data = await res.json();

    if (data.answer) {
      setTimeout(() => {
        typeOracleMessage(data.answer, responseBox, 40);
      }, 600);
    } else {
      responseBox.textContent = "🕯️ The Oracle is silent...";
      toggleFormLock(false);
      isTyping = false;
    }
  } catch (err) {
    console.error("oracle error:", err);
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
