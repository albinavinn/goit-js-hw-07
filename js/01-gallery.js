import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const gallerySet = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
 .map(
      ({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</li>`})
  .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', gallerySet);
galleryContainer.addEventListener('click', onGalleryClick); 

function onGalleryClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
   <img src="${evt.target.dataset.source}" alt="${evt.target.alt}">
`)
  instance.show()
  
  window.addEventListener('keydown', closeEsc)

  function closeEsc({code}) {
    if (code === 'Escape') {
      instance.close()
    }
  }
};








