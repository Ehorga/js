const root = document.getElementById('root');
const limit = 10;

const container = document.createElement('div');
container.classList.add('container');
root.append(container);

fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)
  .then((response) => {
    // JSON — возвращает Promise с массивом данных
    return response.json();
  })
  .then((dataArray) => {
    // Создание массива элементов img
    const imgArray = dataArray.map((element) => {
      const img = document.createElement('img');
      img.src = element.url;
      img.classList.add('img');

      // Обработчик клика — открыть большое изображение
      img.addEventListener('click', () => {
        const bigImgWrapper = document.createElement('div');
        bigImgWrapper.classList.add('bigImgWrapper');

        const bigImg = document.createElement('img');
        bigImg.src = element.url;

        const close = document.createElement('span');
        close.textContent = 'X';
        close.classList.add('close');

        close.addEventListener('click', () => {
          bigImgWrapper.remove();
        });

        bigImgWrapper.append(close, bigImg);
        root.append(bigImgWrapper);
      });

      return img;
    });

    container.append(...imgArray);
  })
  .catch((error) => {
    console.log('Ошибка при загрузке изображений:', error);
  });
