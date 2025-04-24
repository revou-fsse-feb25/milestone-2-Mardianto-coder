const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function checkGuess() {
      const guess = Number(document.getElementById("guessInput").value);
      const message = document.getElementById("message");
      attempts++;

      if (!guess || guess < 1 || guess > 100) {
        message.textContent = "❌ Please enter a number between 1 and 100.";
        return;
      }

      if (guess === secretNumber) {
        message.textContent = `✅ Correct! You guessed it in ${attempts} attempt(s)! 🎉`;
        message.style.color = "green";
      } else if (guess < secretNumber) {
        message.textContent = "🔼 Too low! Try again.";
        message.style.color = "orange";
      } else {
        message.textContent = "🔽 Too high! Try again.";
        message.style.color = "orange";
      }
    }
