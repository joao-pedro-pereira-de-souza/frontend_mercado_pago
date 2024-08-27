import Api from '../../../../../api/index.js';
import StorageClient from '../../../../../services/storage-client.service.js';
import AuthModalComponent from "../../../../components/modals/form-auth/form-auth.modal.js";

export default class EventBtnAuth {
  #elements;
  #api;
  #authModalComponent
  /**
   * @param { Object } params
   * @param { Object } params.elements
   * @param { HTMLButtonElement } params.elements.elementBtnAuth
   * @param {Api} params.api
   * @param {AuthModalComponent} params.authModalComponent
   */
  constructor(params) {
     this.#elements = params.elements;
     this.#api = params.api;
     this.#authModalComponent = params.authModalComponent;
  }

   #execute() {
    try {
      const client = StorageClient.get();
      if (!client) {
        this.#authModalComponent.show();
      }


    } catch (error) {
      alert('Ocorreu um erro ao efetuar login')
    }


  }

  event() {
    this.#elements.elementBtnAuth.addEventListener(
      "click",
      () => this.#execute
    );
  }
}
