import EventBtnPayment from './click-btn-payment.events.js';
import EventsSockets from '../../../../../events/index.js';
import PaymentService from "../../../../../services/payment.service.js";
import ProductService from "../../../../../services/product.service.js";
import AuthModalComponent from '../../../../components/modals/form-auth/form-auth.modal.js';

import SpinnerBtnPaymentEffect from '../effects/spinner_btn_payment.js';

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
   * @param { SpinnerBtnPaymentEffect } params.spinnerBtnPaymentEffect
   */
  constructor(params) {
    const paramsEventBtnPayment = {
      elements: {
        elementButton: params.elements.elementBtnPayment,
        elementISpinner: params.elements.elementISpinner,
      },
      eventsSockets: params.eventsSockets,
      paymentService: params.paymentService,
      productService: params.productService,
      authModalComponent: params.authModalComponent,
      spinnerBtnPaymentEffect: params.spinnerBtnPaymentEffect,
    };

    this.#eventBtnPayment = new EventBtnPayment(paramsEventBtnPayment);
  }

  listeners() {
    this.#eventBtnPayment.event();
  }
}
