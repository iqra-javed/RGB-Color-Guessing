let numOfSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
const modeButtons = document.querySelectorAll('.mode');

const init = () => {
  // add event listneres to mode buttons
  setupModeButtons();
  // add event listeners to colored squares
  setupSquares();
  reset();
};

const setupModeButtons = () => {
  for (let button of modeButtons) {
    button.addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');

      this.textContent === 'Easy' ? (numOfSquares = 3) : (numOfSquares = 6);
      reset();
    });
  }
};

const setupSquares = () => {
  squares.forEach(square => {
    square.addEventListener('click', function() {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!';
        resetButton.textContent = 'Play Again?';
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try Again!';
      }
    });
  });
};

const reset = () => {
  colors = generateRandomColors(numOfSquares);

  pickedColor = pickColor();

  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = '';

  squares.forEach((square, index) => {
    if (colors[index]) {
      square.style.display = 'block';
      square.style.backgroundColor = colors[index];
    } else {
      square.style.display = 'none';
    }
  });
  h1.style.backgroundColor = 'steelblue';
  resetButton.textContent = 'New Colors';
};

resetButton.addEventListener('click', function() {
  reset();
});

const changeColors = color => {
  squares.forEach(square => (square.style.backgroundColor = color));
};

const pickColor = () => {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

const generateRandomColors = num => {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  return arr;
};

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

init();
