import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGalleryTemplate(picturesList) {
  return picturesList
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
const galleryTemplate = createGalleryTemplate(galleryItems);
gallery.insertAdjacentHTML("afterbegin", galleryTemplate);

gallery.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target === e.currentTarget) {
    return;
  }

  const instance = basicLightbox.create(
    `
          <img src="${e.target.dataset.source}" width="800" height="600">
      `,
    {}
  );
  instance.show();
  window.addEventListener("keydown", onEscPress);

  function onEscPress(e) {
    if (e.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscPress);
    }
  }
});
