import EventsListeners from './events-listener.js';
import Api from '../../../../api/index.js';

export default class FormAuthModal {
  elements;

  /**
   * @param { Object } params
   * @param { Object } params.elements
   * @param { HTMLDivElement } params.elements.elementDivMain
   * @param { HTMLDivElement } params.elements.elementContainerModal
   * @param { HTMLInputElement } params.elements.elementInputEmail
   * @param { HTMLInputElement } params.elements.elementInputPassword
   * @param { HTMLLinkElement } params.elements.elementLinkLoginAccountSendBox
   * @param { HTMLButtonElement } params.elements.elementBtnAuth
   * @param { HTMLButtonElement } params.elements.elementBtnExit
   */
  constructor(params) {
    this.elements = params.elements;
  }

  static #createElementBtnAuth() {
    const elementBtnAuth = document.createElement("button");

    elementBtnAuth.style.width = "100%";
    elementBtnAuth.style.height = "3.3rem";
    elementBtnAuth.style.background = "#ffda79";
    elementBtnAuth.innerText = "Login";

    elementBtnAuth.style.color = "#fff";
    elementBtnAuth.style.fontSize = "18px";
    elementBtnAuth.style.margin = "5px 0px";

    elementBtnAuth.style.cursor = "pointer";

    return elementBtnAuth;
  }
  static #createElementBtnExit() {
    const elementBtnExit = document.createElement("button");
    elementBtnExit.style.background = "transparent";
    elementBtnExit.style.display = "inline-flex";
    elementBtnExit.style.fontSize = "25px";
    elementBtnExit.style.alignItems = "center";
    elementBtnExit.style.justifyItems = "center";
    elementBtnExit.style.position = "absolute";
    elementBtnExit.style.right = "16px";
    elementBtnExit.style.top = "10px";
    elementBtnExit.style.cursor = "pointer";

    const iconBtnExit = document.createElement("i");
    iconBtnExit.classList.add("fa-solid");
    iconBtnExit.classList.add("fa-xmark");
    elementBtnExit.appendChild(iconBtnExit);

    return elementBtnExit;
  }
  /**
   * @param { String } id id element input
   * @returns {HTMLInputElement}
   */
  static #createElementInput(id) {
    const elementInput = document.createElement("input");
    elementInput.id = id;

    elementInput.style.width = "100%";
    elementInput.style.height = "2.7rem";

    elementInput.style.textDecoration = "none";
    elementInput.style.background = "var(--color-background-secondary02)";
    elementInput.style.borderRadius = "5px";

    elementInput.style.padding = '0px 10px'
    elementInput.style.margin = "5px 0px";

    elementInput.style.fontSize = '1.2rem';
    return elementInput;
  }

  /**
   *
   * @param {String} idModalSpashAuth
   */
  static #createElementSplashModal(idModalSpashAuth) {
    const elementContainerModal = document.createElement("div");
    elementContainerModal.id = idModalSpashAuth;

    elementContainerModal.style.width = "70%";
    elementContainerModal.style.height = "50%";
    elementContainerModal.style.padding = "8rem";

    elementContainerModal.style.display = "flex";
    elementContainerModal.style.flexDirection = "column";

    elementContainerModal.style.background =
      "var(--color-background-secondary)";
    elementContainerModal.style.zIndex = "2";
    elementContainerModal.style.position = "absolute";

    elementContainerModal.style.top = "50%";
    elementContainerModal.style.left = "50%";
    elementContainerModal.style.transform = "translate(-50%, -50%)";

    elementContainerModal.style.boxShadow = "10px 10px 20px rgba(0, 0, 0, 0.5)";

    const elementH1 = document.createElement("h1");
    elementH1.innerText = 'Login';
    elementH1.style.fontSize = '3rem';
    elementH1.style.fontWeight = "bold";

    elementH1.style.textAlign = "center";
    elementH1.style.marginBottom = '2rem'
    elementContainerModal.appendChild(elementH1)

    const elementInputEmail = this.#createElementInput("input_email_auth");
    const elementInputPassword = this.#createElementInput(
      "input_password_auth"
    );

    const elementLinkLoginAccountSendBox = document.createElement("a");
    elementLinkLoginAccountSendBox.innerText = "Acessar conta de teste (sendbox)";
    elementLinkLoginAccountSendBox.style.cursor = "pointer";
    elementLinkLoginAccountSendBox.style.margin = '3px 0px';


    const elementBtnAuth = this.#createElementBtnAuth();
    const elementBtnExit = this.#createElementBtnExit();

    elementBtnAuth.style.position = 'relative';
    elementBtnAuth.style.bottom = "0px";
    elementBtnAuth.style.cursor = 'poiter'

    elementContainerModal.appendChild(elementBtnExit);

    elementContainerModal.appendChild(elementInputEmail);
    elementContainerModal.appendChild(elementInputPassword);

    elementContainerModal.appendChild(elementLinkLoginAccountSendBox);
    elementContainerModal.appendChild(elementBtnAuth);

    return {
      elementContainerModal,
      elementInputEmail,
      elementInputPassword,
      elementLinkLoginAccountSendBox,
      elementBtnAuth,
      elementBtnExit,
    };
  }

  /**
   * @param { Object } params
   * @param { Api } params.api
   */
  static create(params) {
    const {
      elementBtnAuth,
      elementContainerModal,
      elementInputEmail,
      elementInputPassword,
      elementLinkLoginAccountSendBox,
      elementBtnExit,
    } = this.#createElementSplashModal("id_modal_splash_auth");

    const paramsCreateClass = {
      elements: {
        elementBtnAuth,
        elementContainerModal,
        elementInputEmail,
        elementInputPassword,
        elementLinkLoginAccountSendBox,
        elementBtnExit,
      },
    };

    paramsCreateClass.elements.elementContainerModal.style.display = "none";
    document.body.appendChild(elementContainerModal);

    const authModalComponent = new FormAuthModal(paramsCreateClass);

    const paramsEventsListeners = {
      api: params.api,
      authModalComponent,
    };

    const eventsListeners = new EventsListeners(paramsEventsListeners);
    eventsListeners.listeners();
    return authModalComponent;
  }

  exit() {
    this.elements.elementContainerModal.style.display = "none";
  }

  show() {
    this.elements.elementContainerModal.style.display = "flex";
  }
}
