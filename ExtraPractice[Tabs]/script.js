/**
 * TABS
 *
 * Написати функціонал табів, коли по кліку на один з заголовків на сторінці зєявляється відповідний до нього контент
 *
 */

/**
 * @function Tabs
 *
 * @param {TabItem[]} entities
 * @param config
 * @param {string} config.wrapperClass - класс, за яким можна знайти елемент розмітки всередині якого є таби
 * @param {string} config.titlesClass - класс, за яким можна знайти елемент розмітки в якому лежатимуть заголовки табів
 * @param {string} config.contentsClass - класс, за яким можна знайти елемент розмітки в якому лежатимуть елементи контенту кожного табу
 * @param {number} config.activeTab - індес активного табу
 */
function Tabs(entities, config) {
  // кожен елемент масиву entites тепер буде мати вону картинку бачення кожного табу, бо в ньому буде тепер і ДОМ-елементи і контент який в них має бути, і свій метод для швидкого рендеру кожного табу
  this.entities = entities.map((ent) => {
    const classes = {
      titles: config.titleClass,
      content: config.contentClass,
    };
    const completeEntity = new TabsItem(ent, classes);
    
    //...
    //тут має бути перевірка на те чи має бути він активним та присвоєння відповідного значення властивості isActive
    //...

    return completeEntity;
  });

  this.render = () => {
    //тут має бути описаний процес рендеру табів. ДОМ елементи уже створені. тут треба запхати їх до потрібного батьківського елементу та навісити потрібні івент лістнери
  };

  /**
   * @method handleTitleClick
   * @param {EventListenerObject} event
   */
  this.handleTitleClick = (event) => {
    //тут має бути описане все що відбувається по кліку на один із заголовків табів
  };
}

/**
 * @function TabsItem
 *
 * @param entity
 * @param {string} entity.title
 * @param {string} entity.content
 * @param classes
 * @param {string} classes.title
 * @param {string} classes.content
 * @param parent
 * @param {HTMLElement} parent.title - елемент всередину якого треба відрендерити заголовок
 * @param {HTMLElement} parent.content - елемент всередину якого треба відрендерити контент
 *
 *
 *
 */

// const parent = {
//   title: '<ul></ul>',
//   content: 'div></div>',
// };
// const parent_ = {
//   title: document.createElement('ul'),
//   content: document.createElement('div'),
// };
// const classes_ = {
//   wrapperClass: 'tabs',
//   titleClass: 'tabs-titles',
//   contentClass: 'tabs-content',
//   activeTab: 1,
// };

function TabsItem(entity, classes, parent) {
  this.classes = classes;
  this.entity = entity;
  this.isActive = false;
  this.parent = parent;

  this.elements = {
    titleDOM: document.createElement('li'),
    contentDOM: document.createElement('div'),
  };

  const tabElemLI = this.elements.titleDOM;
  const tabElemContentDIV = this.elements.contentDOM;
  const entityTitle = this.entity.title;
  const entityContent = this.entity.content;

  this.render = () => {
    tabElemLI.textContent = entityTitle;
    this.parent.title.classList.add(this.classes.titleClass);
    tabElemContentDIV.innerHTML = entityContent;
    this.parent.content.classList.add(this.classes.contentClass);

    this.parent.title.appendChild(tabElemLI);
    tabElemLI.addEventListener('click', () => {
      this.isActive = true;
      this.renderContentOnly();
    });

    document.body.prepend(this.parent.title);
  };

  this.renderContentOnly = () => {
    if (this.isActive === true) {
      this.parent.content.appendChild(tabElemContentDIV);
      document.body.append(this.parent.content);
    }
  };
}

// ПРИКЛАД ТОГО ЯК Я ХОЧУ ШОБ ЦЕ ПРАЦЮВАЛО
const _TABS = [
  {
    title: 'команда',
    content:
      '<p>Наша команда створена штучним інтелектом з майбутнього для того, щоб вам було максимально комфортно з нам спілкуватись та взаємодіяти. Кожен член команди автоматично підлаштовується під усі ваші інтереси, які ми купляємо на чорному ринку у гугл.</p>',
  },
  {
    title: 'продукт',
    content:
      '<p>наш продукт <b>безцінний</b>!</p><p>завдяки користувацьким даним, які ми купуємо у фейсбук, наші спецічалісти пропонують вам тільки те що відповідатиме вашим вподобанням на 101%</p>',
  },
  {
    title: 'контакти',
    content:
      '<h2>ми всюди!</h2><p>нас багато. ми самі вас знайдемо. все що вам потрібно - просто подумати про нас. решта - дрібниці.</p>',
  },
];

// const myTabs = new Tabs(_TABS, {
//   wrapperClass: 'tabs',
//   titleClass: 'tabs-titles',
//   contentClass: 'tabs-content',
//   activeTab: 1,
// });

// myTabs.render();

// const newTabItem = new TabsItem(
//   {
//     title: 'команда',
//     content:
//       '<p>Наша команда створена штучним інтелектом з майбутнього для того, щоб вам було максимально комфортно з нам спілкуватись та взаємодіяти. Кожен член команди автоматично підлаштовується під усі ваші інтереси, які ми купляємо на чорному ринку у гугл.</p>',
//   },
//   classes_,
//   parent_,
// );

// console.log(newTabItem.render());
// console.log(newTabItem.renderContentOnly());
