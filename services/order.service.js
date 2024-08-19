import Api from "../api/index.js";
import GatewayMercadoPago from "../gateways/mercadopago/index.js";

export default class OrderService {
  #api;
  /**
   *
   * @param {Api} api
   */
  constructor(api) {
    this.#api = api;
  }

  async create() {
    const { data } = await this.#api.payments.create();
    const { id } = data.proccess;
    return { id };
  }
}
