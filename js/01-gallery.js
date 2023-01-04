import { galleryItems } from './gallery-items.js';
// Change code below this line

const galeryWrap = document.querySelector('.gallery');
const creatingAnImageGallery = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`})
    .join('');

galeryWrap.insertAdjacentHTML('afterbegin', creatingAnImageGallery)
galeryWrap.addEventListener('click', doNotFollowTheLink);

function doNotFollowTheLink(e) {
    e.preventDefault();
}

const showBigImg =	basicLightbox.create(`
		<img src = "${evt.target.dataset.source}">
	`)
    showBigImg.show()

console.log(galleryItems);