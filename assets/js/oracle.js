document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#oracle-form");
  const input = document.querySelector("#questionInput");
  const responseBox = document.querySelector("#oracle-response");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const question = input.value.trim();
    if (!question) return;

    // Optional: Add some animation or loading indicator
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
        responseBox.textContent = data.answer;
      } else {
        responseBox.textContent = "🕯️ The Oracle is silent...";
      }
    } catch (err) {
      console.error(err);
      responseBox.textContent = "🌫️ The mists are unclear. Try again soon.";
    }
  });
});
