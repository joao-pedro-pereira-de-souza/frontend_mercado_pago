import EventBtnPayment from './click-btn-payment.events.js';
import EventsSockets from '../../../../../events/index.js';
import PaymentService from "../../../../../services/payment.service.js";
import ProductService from "../../../../../services/product.service.js";
import AuthModalComponent from '../../../../components/modals/form-auth/form-auth.modal.js';


export default class Events {
  #eventBtnPayment;

  /**
   * @param { Object } params
   * @param { Object } params.elements
   * @param { HTMLButtonElement } params.elements.elementBtnPayment
   * @param { EventsSockets } params.eventsSockets
   * @param { PaymentService } params.paymentService
   * @param { ProductService } params.productService
   * @param { AuthModalComponent } params.authModalComponent
   */
  constructor(params) {
    const paramsEventBtnPayment = {
      element: params.elements.elementBtnPayment,
      eventsSockets: params.eventsSockets,
      paymentService: params.paymentService,
      productService: params.productService,
      authModalComponent: params.authModalComponent,
    };

    this.#eventBtnPayment = new EventBtnPayment(paramsEventBtnPayment);
  }

  listeners() {
    this.#eventBtnPayment.event();
  }
}
