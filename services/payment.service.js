import Api from '../api/index.js';
import GatewayMercadoPago from '../gateways/mercadopago/index.js';

import OrderService from './order.service.js';

import SpinnerBtnPaymentEffect from '../src/pages/product/views/effects/spinner_btn_payment.js';
import ScrollPageMoviments from "../global/scripts/scroll_page.moviments.js";


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
   * @param {Object}  params.result
   * @param  {Boolean} params.result.success
   * @param  {String} [params.result.message]
   * @param  {Object} [params.result.data]
   * @param {Object} params.result.data.preference
   * @param {String} params.result.data.preference.id
   * @param {String} params.result.data.key_order
   * @param {SpinnerBtnPaymentEffect} params.spinnerBtnPaymentEffect
   */
  async execute(params) {
    const { success, message, data } = params.result;
    if (success) {

      ScrollPageMoviments.scrollToTopWindow(0);
      this.#gatewayMercadoPago.payment.checkout(data.preference.id);
      params.spinnerBtnPaymentEffect.hide();

    } else {
      params.spinnerBtnPaymentEffect.hide();

      alert(`Ocorreu o erro abaixo ao abrir o mercado pago: \n ${message}`);
    }
  }
}
