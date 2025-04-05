document.getElementById('oracle-form').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const question = document.getElementById('question').value;
    const responseBox = document.getElementById('response');
    responseBox.innerHTML = "Consulting the stars... 🔮";
  
    const apiResponse = await fetch('/oracle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question })
    });
  
    const data = await apiResponse.json();
    responseBox.innerHTML = data.answer;
  });
  