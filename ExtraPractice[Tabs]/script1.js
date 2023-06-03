const parent_ = {
  title: document.createElement('ul'),
  content: document.createElement('div'),
};

const classes_ = {
  wrapperClass: 'tabs',
  titleClass: 'tabs-titles',
  contentClass: 'tabs-content',
  activeTab: 1,
};

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

const newTabItem = new TabsItem(
  {
    title: 'команда',
    content:
      '<p>Наша команда створена штучним інтелектом з майбутнього для того, щоб вам було максимально комфортно з нами спілкуватись та взаємодіяти. Кожен член команди автоматично підлаштовується під усі ваші інтереси, які ми купляємо на чорному ринку у Google.</p>',
  },
  classes_,
  parent_,
);

newTabItem.render();

