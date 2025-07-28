const dictionary = new Map();
dictionary.set('copy', 'копіювати');
dictionary.set('subscribe', 'підписатися');
dictionary.set('send', 'відправити');
dictionary.set('share', 'поділитися');
dictionary.set('add to cart', 'додати в корзину');
dictionary.set('zoom', 'збільшити');
dictionary.set('play', 'грати');

const word = prompt('enter any word');
if (dictionary.has(word)) {
  console.log(dictionary.get(word));
} else {
  console.log(word);
}
