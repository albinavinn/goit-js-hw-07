import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer2 = document.querySelector('.gallery');
const gallerySet2 = createGallery2(galleryItems);


function createGallery2(galleryItems) {
  return galleryItems
 .map(
      ({ preview, original, description }) => {
        return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`})
  .join('');
}

galleryContainer2.insertAdjacentHTML('beforeend', gallerySet2);

const lightBox = new SimpleLightbox('.gallery__link', { 
    captionsData: 'alt',
    captionDelay: 250,
    navText: ['←','→'],
});



