import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGalleryTemplate(picturesList) {
  return picturesList
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}
const galleryTemplate = createGalleryTemplate(galleryItems);
gallery.insertAdjacentHTML("afterbegin", galleryTemplate);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
