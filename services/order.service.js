import Api from "../api/index.js";

export default class OrderService {
  #api;
  /**
   *
   * @param {Api} api
   */
  constructor(api) {
    this.#api = api;
  }

  /**
   *
   * @param { Object } params
   * @param { String } params.id_product
   * @param { String } params.type_product
   * @param { String } [params.id_option_product]
   * @param { String } params.amount
   * @param { String } params.id_client
   */
  async create(params) {
    const { data } = await this.#api.payments.create(params);
    const { id } = data.proccess;
    return { id };
  }
}
