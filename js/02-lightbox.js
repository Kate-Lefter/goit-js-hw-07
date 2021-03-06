import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const pictureGalleryItems = document.querySelector('.gallery');
const galleryMarkup = clickImgGallery(galleryItems);

pictureGalleryItems.insertAdjacentHTML('beforeend', galleryMarkup);

function clickImgGallery(elements) {
    return elements
        .map(({ preview, original, description }) => {
        return `
      <div class="gallery__item" >
         <a class="gallery__link" 
         href="${original}" >
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

var gallery = new SimpleLightbox('.gallery a', { captionDelay: '250' });
gallery.on('show.simplelightbox', function () {
});