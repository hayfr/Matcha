let count = 0;
let ppc = 1;
let autoclickers = 0;
let upgradeLevel = 1;

const clickCountDisplay = document.getElementById("click-count");
const clickButton = document.getElementById("click-button");
const resetButton = document.getElementById("reset-button");

const buyAutoclickerButton = document.getElementById("buy-autoclicker");
const autoclickerCountDisplay = document.getElementById("autoclicker-count");

const upgradeClickButton = document.getElementById("upgrade-click");
const upgradeLevelDisplay = document.getElementById("upgrade-level");
const ppcDisplay = document.getElementById("ppc");

function updateDisplay() {
  clickCountDisplay.textContent = count;
  autoclickerCountDisplay.textContent = autoclickers;
  upgradeLevelDisplay.textContent = upgradeLevel;
  ppcDisplay.textContent = ppc;
}

clickButton.addEventListener("click", () => {
  count += ppc;
  updateDisplay();
});

resetButton.addEventListener("click", () => {
  count = 0;
  ppc = 1;
  autoclickers = 0;
  upgradeLevel = 1;
  updateDisplay();
});

buyAutoclickerButton.addEventListener("click", () => {
  const cost = 50;
  if (count >= cost) {
    count -= cost;
    autoclickers++;
    updateDisplay();
  }
});

upgradeClickButton.addEventListener("click", () => {
  const cost = 20;
  if (count >= cost) {
    count -= cost;
    upgradeLevel++;
    ppc++;
    updateDisplay();
  }
});

// Autoclick every second
setInterval(() => {
  count += autoclickers;
  updateDisplay();
}, 1000);

// Initial display
updateDisplay();
