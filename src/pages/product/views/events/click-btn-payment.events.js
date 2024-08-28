
import EventsSockets from "../../../../../events/index.js";
import PaymentService from "../../../../../services/payment.service.js";
import ProductService from "../../../../../services/product.service.js";

import StorageClient from '../../../../../services/storage-client.service.js';
import AuthModalComponent from "../../../../components/modals/form-auth/form-auth.modal.js";

import SpinnerBtnPaymentEffect from '../effects/spinner_btn_payment.js';

export default class EventBtnPayments {
  #eventsSockets;
  #paymentService;
  #productService;
  #authModalComponent;
  #elements;
  #spinnerBtnPaymentEffect;
  /**
   * @param { Object } params
   *
   * @param { Object } params.elements
   * @param { HTMLButtonElement } params.elements.elementButton
   * @param { EventsSockets } params.eventsSockets
   * @param { PaymentService } params.paymentService
   * @param { ProductService } params.productService
   * @param { AuthModalComponent } params.authModalComponent
   *
   * @param { SpinnerBtnPaymentEffect } params.spinnerBtnPaymentEffect
   */
  constructor(params) {
    this.#elements = params.elements;

    this.#eventsSockets = params.eventsSockets;
    this.#paymentService = params.paymentService;
    this.#productService = params.productService;
    this.#authModalComponent = params.authModalComponent;

    this.#spinnerBtnPaymentEffect = params.spinnerBtnPaymentEffect;
  }

  async #execute() {
    try {
      this.#spinnerBtnPaymentEffect.show();
      const client = StorageClient.get();

      if (!client) {
      this.#spinnerBtnPaymentEffect.hide();

        return this.#authModalComponent.show();
      }

      const params = {
        id_product: this.#productService.id_product_selected,
        id_option_product: this.#productService.id_option_product_selected,
        type_product: this.#productService.type_selected,
        amount: 1,
        id_client: client.id,
      };

      const { id } = await this.#paymentService.orders.create(params);
      this.#eventsSockets.api.payments.onOrder(id, this.#paymentService);

      this.#spinnerBtnPaymentEffect.hide();

    } catch (error) {
      alert("ocorreu um erro ao efetuar o pagamento.");
    }
  }

  event() {
    this.#elements.elementButton.addEventListener("click", () =>
      this.#execute()
    );
  }
}
