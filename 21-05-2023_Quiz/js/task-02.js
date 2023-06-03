/**
 * TASK-02 [Іван]
 *
 * Написати компонент Gallery.
 *
 * Аргументи функції-конструктора:
 * - {string[]} items - масив посилань на зображення
 * - {string} className - класс, що потрібно присвоїти кожному зображенню
 * - {string} fullSizeClassName - класс, що потрібно присвоїти зображенню при кліку на нього
 *
 * Метод render() приймає один аргумент - ДОМ-вузол, в який потрібно відрендерити компонент.
 *
 * Метод render() повертає DOM-вузол галереї, який має відренедритися на сторінці в зазначеному місці.
 *
 * По кліку на будь яке зображення галереї, воно має змінювати свій клас на той,
 * що передається в аргументі fullSizeClassName, таким чином розгортаючись на повний екран.
 * Після повторного кліку на розгорнуте зображення воно має зменшуватись до первинного розміру.
 */

/**
 * @param {string[]} items - масив посилань на зображення
 * @param {string} className - класс, що потрібно присвоїти кожному зображенню
 * @param {string} fullSizeClassName - класс, що потрібно присвоїти зображенню при кліку на нього
 */
function Gallery(items, className, fullSizeClassName) {
  //створи тут через this елемент в який ти загорнеш всю галерею. дівак чи section не важливо. обізви його якось і потім використовуй далі.
  this.wrapper = document.createElement("section") //це дівак самої галереї
  this.className = className
  this.fullSizeClassName = fullSizeClassName
  this.items = items.map(
    (e, ind) => new GalleryItem(e, `gallery item - ${ind}`, className)
  )

  this.render = function (parent) {
    //враперу дати класс
    this.wrapper.className = "gallery"
    // по черзі кожну картинку у врапєр відрендерити

    this.items.forEach((img) => img.render(this.wrapper))
    //врапер відрендерити у парент
    parent.appendChild(this.wrapper)

    this.wrapper.addEventListener("click", (event) => {
      if (event.target.tagName !== "IMG") return null

      event.target.parentElement.classList.toggle(fullSizeClassName)
    })

    return this.wrapper
  }
}

const gallery = new Gallery(
  [
    "https://placeimg.com/1280/720/nature",
    "https://placeimg.com/1280/720/nature",
    "https://placeimg.com/1280/720/nature",
    "https://placeimg.com/1280/720/nature",
    "https://placeimg.com/1280/720/nature",
    "https://placeimg.com/1280/720/nature",
    "https://placeimg.com/1280/720/nature",
  ],
  "gallery__item",
  "gallery__item--full-size"
)

gallery.render(document.querySelector("main"))
