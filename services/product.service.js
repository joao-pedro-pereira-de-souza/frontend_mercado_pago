import Api from '../api/index.js';

export default class ProductService {
  price_selected;
  id_product_selected;
  id_option_product_selected;
  type_selected;
  #api;
  /**
   * @param { Api } api
   */
  constructor(api) {
    this.#api = api;
  }

  async getAllGroupedByType() {
    return (await this.#api.products.getAllGroupedByType())?.data
  }
}
