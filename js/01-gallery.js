// 1 Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

// 2 Реализация делегирования на div.gallery и получение url большого изображения.

// 3 Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.

// 4 Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.

// 5 Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.


import { galleryItems } from './gallery-items.js';
// Change code below this line

const pictureGalleryItems = document.querySelector('.gallery');
const galleryMarkup = clickImgGallery(galleryItems);

pictureGalleryItems.insertAdjacentHTML('beforeend', galleryMarkup);

function clickImgGallery(elements) {
    return elements
        .map(({ preview, original, description }) => {
        return `
      <div class="gallery__item" >
         <a class="gallery__link"  data-lightbox="image-1"
         href="${original}" onclick="return false;">
              <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                    />
                </a>
</div>
            `;
    })
        .join('');
}


pictureGalleryItems.addEventListener('click', onClickGalleryItems);

function onClickGalleryItems(e) { 
    const isGalleryImage = e.target.classList.contains('gallery__image');
    if (!isGalleryImage) {
        return;
    }
   const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`);
  instance.show();
}



