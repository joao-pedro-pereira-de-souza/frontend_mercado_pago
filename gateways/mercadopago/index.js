import Payment from './payment.js';

export default class MercadoPagoGateway {

/**
 * @type {import('@mercadopago/sdk-js').MercadoPago}
 */
  #sdk

  /**
   *
   * @param {String} public_key
   */
  constructor(public_key) {
    this.#sdk = new MercadoPago(public_key);
    this.payment = new Payment(this.#sdk);
  }

}
