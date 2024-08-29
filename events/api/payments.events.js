import PaymentService from "../../services/payment.service.js";
import SpinnerBtnPaymentEffect from '../../src/pages/product/views/effects/spinner_btn_payment.js';

export default class PaymentsEvents {
  /**
   * @type {SocketIOClient.Socket}
   */
  #socket;

  constructor(socket) {
    this.#socket = socket;
  }

  /**
   *
   * @param {String} id_proccess
   * @param {PaymentService} paymentService
   * @param { SpinnerBtnPaymentEffect } spinnerBtnPaymentEffect
   */
  onOrder(id_proccess, paymentService, spinnerBtnPaymentEffect) {
    this.#socket.once(`order_payment:${id_proccess}`, (data) => {
      paymentService.execute({result: data, spinnerBtnPaymentEffect });

    });
  }
}
