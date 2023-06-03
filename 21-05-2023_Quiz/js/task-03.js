/**
 * TASK-03 [Антон]
 *
 * Написати додатковий функціонал до двох попередніх тасок - поле вводу і кнопка "Додати".
 * В поле вводу користувач вводить шлях до зображення,
 * а в результаті кліку на кнопку "Додати" має створюватися новий екземпляр компонента GalleryItem,
 * який має відрендеритися в компоненті Gallery.
 *
 */
function GalleryForm(gallery) {
  this.elements = {
    addButton: document.createElement("button"),
    linkInput: document.createElement("input"),
    altDescriptionInput: document.createElement("input"),
  }

  this.render = () => {
    this.elements.addButton.addEventListener("click", (event) => {
      let linkSrc = this.elements.linkInput.value
      let altDesc = this.elements.altDescriptionInput.value

      const newGalleryItem = new GalleryItem(
        linkSrc,
        altDesc,
        gallery.className
      )

      newGalleryItem.render(gallery.wrapper)

      this.elements.linkInput.value = ""
      this.elements.altDescriptionInput.value = ""
    })

    this.elements.addButton.textContent = "Add"

    gallery.wrapper.insertAdjacentElement(
      "beforebegin",
      this.elements.linkInput
    )
    gallery.wrapper.insertAdjacentElement(
      "beforebegin",
      this.elements.altDescriptionInput
    )
    gallery.wrapper.insertAdjacentElement(
      "beforebegin",
      this.elements.addButton
    )
  }
}

const galleryForm = new GalleryForm(gallery)
galleryForm.render()
