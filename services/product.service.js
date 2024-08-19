import Api from '../api/index.js';

export default class ProductService {

  #api
  /**
   * @param { Api } api
   */
   constructor(api) {
     this.#api = api
  }

   async getAllGroupedByType() {
     return this.#api.products.getAllGroupedByType()
  }
}
