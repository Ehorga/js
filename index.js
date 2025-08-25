const bigImg = document.getElementById('big');
const smallImgs = document.getElementsByClassName('small');

for (const smallImg of smallImgs) {
  smallImg.addEventListener('click', () => {
    bigImg.src = smallImg.src;
  });
}

const lisFruites = document.getElementsByTagName('li');

for (const li of lisFruites) {
  li.addEventListener('click', () => {
    li.style.backgroundColor =
      li.style.backgroundColor === 'pink' ? '' : 'pink';
  });
}
