const h2Block = document.querySelector('#block > h2');
h2Block.style.color = 'white';

const btnsBlock = document.querySelectorAll('#block .btn');

btnsBlock.forEach((btn) => {
  btn.style.backgroundColor = 'yellow';
  btn.style.fontSize = '16px';
});
