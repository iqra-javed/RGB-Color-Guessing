let numOfSquares = 6;
let colors = generateRandomColors(numOfSquares);
const squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
const eastBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function() {
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  squares.forEach((square, index) => {
    if (colors[index]) {
      square.style.background = colors[index];
    } else {
      square.style.display = 'none';
    }
  });
});

hardBtn.addEventListener('click', function() {
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  numOfSquares = 6;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  squares.forEach((square, index) => {
    square.style.background = colors[index];
    square.style.display = 'block';
  });
});

resetButton.addEventListener('click', function() {
  colors = generateRandomColors(numOfSquares);

  pickedColor = pickColor();

  colorDisplay.textContent = pickedColor;

  squares.forEach((square, index) => {
    square.style.backgroundColor = colors[index];
  });
  h1.style.backgroundColor = 'steelblue';
  resetButton.textContent = 'New Colors';
});

colorDisplay.textContent = pickedColor;

squares.forEach((square, index) => {
  square.style.backgroundColor = colors[index];

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

function changeColors(color) {
  squares.forEach(square => (square.style.backgroundColor = color));
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
