import Api from '../../../../api/index.js';
import AuthModalComponent from './form-auth.modal.js';

import StorageClient from '../../../../services/storage-client.service.js';

export default class EventsListeners {

   accountSandBox = {
     email: 'sendbox@gmail.com',
     password: 'password123',
  }
  #api;
  #authModalCompoment;

  #isProcessBtnAuth = false;
  #elements;
  /**
   * @param { Object } params
   * @param { Api } params.api
   * @param { AuthModalComponent } params.authModalComponent
   */
  constructor(params) {
    this.#elements = params.elements;

    this.#authModalCompoment = params.authModalComponent;
    this.#api = params.api;
  }

  executeAutoCompleteTrialAccount() {
    const { elementInputEmail, elementInputPassword } =
      this.#authModalCompoment.elements;

    elementInputEmail.innerText = "account_send_box@gmail.com";
    elementInputPassword.innerText = "password123";
  }

  async #executeAuth() {
    const { elementInputEmail, elementInputPassword } =
      this.#authModalCompoment.elements;

    const email = elementInputEmail.value;
    const password = elementInputPassword.value;

    const response = await this.#api.auth.login(email, password)
    if (response.status !== 200) {
      alert(
        `Ocorreu o erro abaixo ao efetuar o login: \n ${response.data.message}`
      );
    }

    const dataSave = {
      id: response.data.client.id,
      name: response.data.client.name,
      email: response.data.client.email,
      image: response.data.client.photo,
      token: response.data.token
    };
    StorageClient.save(dataSave);

    this.#authModalCompoment.exit();
  }


  #executeExit() {
    this.#authModalCompoment.exit();
  }

   #executeInjectSandboxData() {
     this.#authModalCompoment.elements.elementInputEmail.value = this.accountSandBox.email
     this.#authModalCompoment.elements.elementInputPassword.value = this.accountSandBox.password;
  };

   listeners() {

      const {elementBtnAuth, elementBtnExit, elementLinkLoginAccountSendBox} =  this.#authModalCompoment.elements
    elementBtnExit.addEventListener("click", () =>
      this.#executeExit()
    );

     elementBtnAuth.addEventListener("click", async () => {
       if (!this.#isProcessBtnAuth) {
         this.#isProcessBtnAuth = true;

         await this.#executeAuth();

        this.#isProcessBtnAuth = false;

      }
    }

    );

     elementLinkLoginAccountSendBox.addEventListener('click', () => this.#executeInjectSandboxData())
  }
}
