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


galeryWrap.insertAdjacentHTML('afterbegin', creatingAnImageGallery);

galeryWrap.addEventListener('click', enlargeImg);

function doNotFollowTheLink(e) {
    e.preventDefault();
};

function enlargeImg(e) {
  doNotFollowTheLink(e)

  // if (e.target.nodeName !== "IMG") {
  //   return;
  // }

  const showBigImg = basicLightbox.create(`
		<img src="${e.target.dataset.source}" width="800" height="600">
	`);
  showBigImg.show();
};

console.log(galleryItems);