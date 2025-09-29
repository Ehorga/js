const root = document.getElementById('root');

setTimeout(() => {
  const subscribe = document.createElement('section');
  const close = document.createElement('span');
  close.textContent = 'X';
  const h2 = document.createElement('h2');
  h2.textContent = 'Subscribe to our email newsletter';
  const form = document.createElement('form');
  const input = document.createElement('input');
  const button = document.createElement('button');
  button.textContent = 'Subscribe';
  form.append(input, button);
  subscribe.append(close, h2, form);
  root.append(subscribe);
}, 5000);
