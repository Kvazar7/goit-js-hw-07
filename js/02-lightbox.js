import { galleryItems } from './gallery-items.js';
// Change code below this line

const galeryWrap = document.querySelector('.gallery');

const creatingAnImageGallery = galleryItems.map(({ preview, original, description }) => {
    return `<li>
            <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
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

console.log(galleryItems);
