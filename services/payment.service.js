import Api from '../api/index.js';
import GatewayMercadoPago from '../gateways/mercadopago/index.js';

import OrderService from './order.service.js';

export default class PaymentService {
  orders;
  #api;
  #gatewayMercadoPago;
  /**
   *
   * @param {Api} api
   * @param {GatewayMercadoPago} gatewayMercadoPago
   */
  constructor(api, gatewayMercadoPago) {
    this.#api = api;
    this.#gatewayMercadoPago = gatewayMercadoPago;
    this.orders = new OrderService(this.#api);
  }

  /**
   *
   * @param {Object}  params
   * @param  {Boolean} params.success
   * @param  {String} [params.message]
   * @param  {Object} [params.data]
   * @param {Object} params.data.preference
   * @param {String} params.data.preference.id
   * @param {String} params.data.key_order
   */
  async execute(params) {
    console.log(
      "vai executar a chamada do checkout do mercado pago",
      JSON.stringify(params)
    );

    const { success, message, data } = params;
    if (success) {
       this.#gatewayMercadoPago.payment.checkout(data.preference.id);
    } else {
      alert(message);
    }

  }
}
