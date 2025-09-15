const wrapper = document.getElementById('wrapper');
const block = document.getElementById('block');

let x = 0;
let y = 0;
const step = 10;

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    x -= step;
  }
  if (event.key === 'ArrowRight') {
    x += step;
  }
  if (event.key === 'ArrowUp') {
    y -= step;
  }
  if (event.key === 'ArrowDown') {
    y += step;
  }

  block.style.left = x + 'px';
  block.style.top = y + 'px';
});
