export default class ComponentNotification {
  /**
   * @type {URLSearchParams}
   */
  #params;
  /**
   * @param {Object} params
   * @param {URLSearchParams} params.params
   */
  constructor(params) {
    this.#params = params.params;
  }

  /**
   * @typedef {Object} Response
   * @property { String } Response.title
   * @property { Function } Response.getElementIcon
   * @returns {Response}
   */
  #ItemsTypeComponent() {
    const elementIcon = document.createElement("i");

    elementIcon.style.fontSize = '10rem';
    elementIcon.style.marginBottom = '20px';
    const typesComponents = {
      success: {
        title:
          "Compra efetuada com sucesso. Entre no seus pedidos para saber mais.",
        getElementIcon: () => {
          elementIcon.classList.add("fa-solid");
          elementIcon.classList.add("fa-circle-check");
          elementIcon.style.color = "#2ecc71";

          return elementIcon;
        },
      },

      failure: {
        title:
          "Ocorreu um erro ao efetuar sua compra. Por favor, tente efetuar a compra novamente.",
        getElementIcon: () => {
          elementIcon.classList.add("fa-solid");
          elementIcon.classList.add("fa-circle-exclamation");
          elementIcon.style.color = "#e74c3c";

          return elementIcon;
        },
      },
      default: {
        title: "Notificação de pagamento não encontrado.",
        getElementIcon: () => {
          elementIcon.classList.add("fa-solid");
          elementIcon.classList.add("fa-circle-question");
          elementIcon.style.color = "#f1c40f";

          return elementIcon;
        },
      },
    };

    const type = this.#params.get("type");
    if (!type) return typesComponents["default"];

    return typesComponents[type] || typesComponents["default"];
  }
  getComponent() {
    const createComponentMain = document.createElement("div");

    createComponentMain.style.display = "flex";
    createComponentMain.style.alignItems = "center";
    createComponentMain.style.flexDirection = "column";
    createComponentMain.style.padding = '5rem 8rem'

    const elementTitle = document.createElement("h1");
    elementTitle.style.color = "#ecf0f1";
    elementTitle.style.fontSize = "2rem";

     const { title, getElementIcon } = this.#ItemsTypeComponent();
     elementTitle.innerText = title;

     const elementIcon = getElementIcon();

     createComponentMain.appendChild(elementIcon);
     createComponentMain.appendChild(elementTitle);

    return createComponentMain;
  }
}
