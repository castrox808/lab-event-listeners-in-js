 // Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Generate a random pleasant color
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
  document.body.style.backgroundColor = randomColor;
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = 'white';
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Updated to match your exact HTML ID: keyPressDisplay
  const keyOutput = document.getElementById('keyPressDisplay');
  if (keyOutput) {
    keyOutput.innerText = `Key pressed: ${event.key}`;
  }
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const textInput = document.getElementById('textInput');
  // Updated to match your exact HTML ID: textInputDisplay
  const textOutput = document.getElementById('textInputDisplay');
  
  if (textInput && textOutput) {
    textOutput.innerText = textInput.value;
  }
}

// Attach Event Listeners
function setupEventListeners() {
  // Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the button is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}
