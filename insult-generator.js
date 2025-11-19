// insult-generator.js — International Society of Haters
// A very silly, fully client-side insult generator

const insults = [
  "You have the leadership skills of a vending machine that's out of order.",
  "Your WiFi signal has stronger commitment than you.",
  "You're the human equivalent of a loading spinner.",
  "If common sense were a currency, you'd be bankrupt.",
  "You're like a software update: always inconvenient and never on time.",
  "Your presence is like low battery mode: everything just slows down.",
  "You're the reason they put directions on shampoo bottles.",
  "Your brain has more tabs open than your browser and half of them are frozen.",
  "You have the charisma of a damp paper towel. With a brown stain",
  "You're proof that even evolution takes days off. Or just gives up."
];

// Function to pick a random insult
function generateInsult() {
  const randomIndex = Math.floor(Math.random() * insults.length);
  return insults[randomIndex];
}

// Attach to button if present in HTML
window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generateInsultBtn");
  const output = document.getElementById("insultOutput");

  if (button && output) {
    button.addEventListener("click", () => {
      output.textContent = generateInsult();
    });
  }
});
