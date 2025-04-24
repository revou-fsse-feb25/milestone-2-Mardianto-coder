let score = 0;
    let pointsPerClick = 1;
    let upgradeCost = 50;

    const scoreDisplay = document.getElementById('score');
    const clickButton = document.getElementById('clickButton');
    const upgradeButton = document.getElementById('upgradeButton');

    clickButton.addEventListener('click', () => {
      score += pointsPerClick;
      updateScore();
    });

    upgradeButton.addEventListener('click', () => {
      if (score >= upgradeCost) {
        score -= upgradeCost;
        pointsPerClick++;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        upgradeButton.textContent = `Upgrade (Cost: ${upgradeCost})`;
        updateScore();
      }
    });

    function updateScore() {
      scoreDisplay.textContent = `Score: ${score}`;
    }
