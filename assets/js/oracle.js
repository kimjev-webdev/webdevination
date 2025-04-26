/* jshint esversion: 11 */
/* jshint node: true */
/* jshint -W079 */

// this script handles the front end for the oracle form submission and response display
// it uses the openai api to generate a response based on the user's question
// it handles the typing animation for the oracle's response
// it displays an interim message while waiting for the response
// it uses the fetch api to send the question to the server and receive the response

// function to type out the oracle's message character by character
function typeOracleMessage(text, element, speed = 40) {
  element.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;

    // when finished typing, unlock the form
    if (i >= text.length) {
      clearInterval(interval);
      isTyping = false;
      toggleFormLock(false);
    }
  }, speed);
}

// function to lock or unlock the form inputs
function toggleFormLock(disabled) {
  questionInput.disabled = disabled;
  oracleSubmitBtn.disabled = disabled;
}

// function to fetch the oracle's response from the server
async function fetchOracleResponse(question, responseBox) {
  isTyping = true;
  toggleFormLock(true);

  // show interim message immediately
  responseBox.textContent = "✨ Consulting the stars...";

  try {
    const res = await fetch("/oracle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();

    if (data.answer) {
      // after a short pause, type out the real answer
      setTimeout(() => {
        typeOracleMessage(data.answer, responseBox, 40);
      }, 600);
    } else {
      // if no answer received, show fallback message
      responseBox.textContent = "🕯️ The Oracle is silent...";
      toggleFormLock(false);
      isTyping = false;
    }
  } catch (err) {
    // if error during fetch, show error message
    console.error("oracle error:", err);
    responseBox.textContent = "🌫️ The mists are unclear. try again soon.";
    toggleFormLock(false);
    isTyping = false;
  }
}

// function to handle form submission
function handleOracleSubmit(e) {
  e.preventDefault();

  if (isTyping) return;

  const question = questionInput.value.trim();
  if (!question) return;

  oracleResponse.textContent = "";
  fetchOracleResponse(question, oracleResponse);
}

// set up event listeners for the oracle form and input
const oracleForm = document.getElementById("oracle-form");
const questionInput = document.getElementById("questionInput");
const oracleResponse = document.getElementById("oracle-response");
const oracleSubmitBtn = oracleForm.querySelector("button[type='submit']");

let isTyping = false;

// listen for form submit
oracleForm.addEventListener("submit", handleOracleSubmit);

// allow enter key (without shift) to submit the form
questionInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    if (!isTyping) oracleForm.requestSubmit();
  }
});
