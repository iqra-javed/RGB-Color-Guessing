let colors = generateRandomColors(6);

const squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', function() {

  colors = generateRandomColors(6);

  pickedColor = pickColor();

  // change colorDisplay to match pickedColor
  colorDisplay.textContent = pickedColor;

    squares.forEach((square, index) => {
        square.style.backgroundColor = colors[index];
    });
    h1.style.backgroundColor = '#232323';
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
