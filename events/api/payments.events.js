import PaymentService from "../../services/payment.service.js";

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
   */
  onOrder(id_proccess, paymentService) {
    this.#socket.once(`order_payment:${id_proccess}`, (data) => {
      paymentService.execute(data);
    });
  }
}
