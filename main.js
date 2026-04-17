const container = document.querySelector('.container');
const resetBtn = document.querySelector('#reset');

container.style['display'] = 'flex';
container.style['flex-wrap'] = 'wrap';
container.style['justify-content'] = 'space-evenly';
container.style['align-content'] = 'space-evenly';

const draw = (numOfSquares) => {
  const containerWidth = 600;
  const containerHeight = 600;

  const squareWidth = containerWidth / numOfSquares;
  const squareHeight = containerHeight / numOfSquares;

  container.replaceChildren();
  for (let i = 1; i <= numOfSquares * numOfSquares; i++) {
    const square = document.createElement('div');
    square.style.height = `${squareHeight}px`;
    square.style.width = `${squareWidth}px`;
    square.style.backgroundColor = '#e4e4e4';
    square.id = i;
    container.appendChild(square);
  }
}

draw(16);

container.addEventListener('mouseover', (e) => {
  if (e.target.id) {
    const target = e.target;
    if (!target.classList.contains('activated')) {
      const randomR = Math.random() * 255;
      const randomG = Math.random() * 255;
      const randomB = Math.random() * 255;
      target.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
      target.style.opacity = '1';
      target.classList.add('activated');
    } else {
      let opacity = +target.style.opacity;
      opacity = Math.max(0, opacity - 0.1);
      target.style.opacity = `${opacity}`;
    }
  }
});

resetBtn.addEventListener('click', (e) => {
  const size = prompt('Enter a number of squares per side for the new grid.')
  if (size > 100) {
    alert('The number entered should be under 100.');
  } else {
    draw(size);
  }
})

