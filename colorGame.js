const colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)'
];

const squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');

colorDisplay.textContent = pickedColor;

squares.forEach((square, index) => {
  square.style.backgroundColor = colors[index];
  square.addEventListener('click', function() {
    let clickedColor = this.style.backgroundColor;
    clickedColor === pickedColor
      ? (messageDisplay.textContent = 'Correct!' && changeColors(clickedColor))
      : (this.style.backgroundColor =
          '#232323' && (messageDisplay.textContent = 'Try Again!'));
  });
});

function changeColors(color) {
  squares.forEach(square => (square.style.backgroundColor = color));
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}