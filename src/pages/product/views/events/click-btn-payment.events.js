
import EventsSockets from "../../../../../events/index.js";
import PaymentService from "../../../../../services/payment.service.js";
import ProductService from "../../../../../services/product.service.js";

import StorageClient from '../../../../../services/storage-client.service.js';
import AuthModalComponent from "../../../../components/modals/form-auth/form-auth.modal.js";

export default class EventBtnPayments {
  #eventsSockets;
  #paymentService;
  #productService;
  #authModalComponent;
  #element;
  /**
   * @param { Object } params
   * @param { HTMLButtonElement } params.element
   * @param { EventsSockets } params.eventsSockets
   * @param { PaymentService } params.paymentService
   * @param { ProductService } params.productService
   * @param { AuthModalComponent } params.authModalComponent
   */
  constructor(params) {
    this.#element = params.element;

    this.#eventsSockets = params.eventsSockets;
    this.#paymentService = params.paymentService;
    this.#productService = params.productService;
    this.#authModalComponent = params.authModalComponent;
  }

  async #execute() {
    try {
      const client = StorageClient.get();

      if (!client) {
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
    } catch (error) {
      alert("ocorreu um erro ao efetuar o pagamento.");
    }
  }

  event() {
    this.#element.addEventListener("click", () => this.#execute());
  }
}
