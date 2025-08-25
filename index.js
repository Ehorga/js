const h1 = document.getElementById('main-title');
h1.className = 'heading';
h1.textContent = 'hi from javascript!';
h1.title = 'title for main title';

const img = document.getElementById('image');
img.src = 'https://www.earth.com/_next/image/?url=https%3A%2F%2Fcfff2.earth.com%2Fuploads%2F2023%2F06%2F1608040%2Fsea-turtle3_medium-960x640.jpg&w=3840&q=75';
img.alt = 'turtle';
img.width = 400;
img.height = 400;
img.style.objectFit = 'cover';
