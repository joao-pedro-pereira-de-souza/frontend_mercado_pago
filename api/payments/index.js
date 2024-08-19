import Api from '../index.js';

export default class Payments {
  /**
   * @typedef {Object} ProductData
   * @property {string} id_product
   * @property {string} type_product
   * @property {string} id_option_product
   * @property {string} id_client
   * @property {number} amount
   */

  /**
   * @typedef {Object} ProcessOpts
   * @property {number} attempts
   * @property {number} delay
   * @property {number} timestamp
   */

  /**
   * @typedef {Object} Process
   * @property {string} id
   * @property {string} name
   * @property {ProductData} data
   * @property {ProcessOpts} opts
   * @property {number} progress
   * @property {number} delay
   * @property {number} timestamp
   * @property {number} attemptsMade
   * @property {Array} stacktrace
   * @property {null} returnvalue
   * @property {null} finishedOn
   * @property {null} processedOn
   */

  /**
   * @typedef {Object} ResponseData
   * @property {Process} proccess
   */

  /**
   * @typedef {Object} Response
   * @property {ResponseData} data
   * @property {string} message
   */

  /**
   * Retorna os dados do processo de pagamento.
   * @returns {Promise<Response>} O objeto de resposta contendo os dados do processo e uma mensagem.
   */
  async create() {
    const mockBodySend = {
      id_product: "d36fa868-e898-4494-ac34-080864e850f0",
      type_product: "product_bee",
      id_option_product: "15097e1f-9c4b-46a2-9772-d00d149c6fda",
      amount: 10,
      id_client: "c1c6eb93-ce84-44f0-9afa-678bb4a2e296",
    };
    const response = await Api.fetchBase(
      "/products/payments",
      "POST",
      mockBodySend
    );
    return await response.json();
  }
}
