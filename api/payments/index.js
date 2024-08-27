import Api from '../index.js';

export default class Payments {
  /**
   *
   *
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
   * @param { Object } params
   * @param { String } params.id_product
   * @param { String } params.type_product
   * @param { String } [params.id_option_product]
   * @param { String } params.amount
   * @param { String } params.id_client
   *
   * Retorna os dados do processo de pagamento.
   * @returns {Promise<Response>} O objeto de resposta contendo os dados do processo e uma mensagem.
   */
  async create(params) {
    const mockBodySend = {
      id_product: params.id_product,
      type_product: params.type_product,
      id_option_product: params.id_option_product,
      amount: params.amount || 1,
      id_client: params.id_client,
    };
    const response = await Api.fetchBase(
      "/products/payments",
      "POST",
      mockBodySend
    );
    return await response.json();
  }
}
