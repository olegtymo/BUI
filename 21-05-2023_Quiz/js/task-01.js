/**
 * TASK-01 [Тьома]
 *
 * Написати компонент GalleryItem.
 *
 * Аргументи функції-конструктора:
 * - {string} src - шлях до зображення
 * - {string} alt - опис зображення
 * - {string} className - класс, що потрібно присвоїти зображенню
 *
 * Метод render() приймає один аргумент - ДОМ-вузол, в який потрібно відрендерити компонент.
 *
 * Метод render() повертає DOM-вузол зображення, який має відренедритися на сторінці як:
 * - тег picture з класом, що передається в аргументі className
 * - тег img з атрибутами src і alt, які передаються в аргументах
 *
 * За прикладом попередні завдань, створити властивість elements, де будуть зберігатись всі DOM-вузли компонента.
 */

function GalleryItem(src, slt, className) {
  this.src = src
  this.slt = slt
  this.className = className

  this.elements = {
    picture: document.createElement("picture"),
    img: document.createElement("img"),
  }

  this.render = (parent) => {
    const { picture, img } = this.elements

    picture.classList.add(this.className)
    img.setAttribute("src", this.src)
    img.setAttribute("alt", this.slt)

    picture.append(img)
    parent.append(picture)

    return picture
  }
}

// const galleryItem = new GalleryItem(
//   "https://placeimg.com/640/480/nature",
//   "nature",
//   "gallery__item"
// )
// const galleryContainer = document.querySelector(".gallery")

// galleryItem.render(galleryContainer)
