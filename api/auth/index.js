import Api from "../index.js";

export default class Auth {
  /**
   * @typedef { Object } Response
   * @property { String} status
   * @property { Object } data
   * @property { String } [data.message]
   * @property { String } data.token
   * @property { Object } data.client
   * @property { string } data.client.id
   * @property { string } data.client.name
   * @property { string } data.client.email
   * @property { string } data.client.photo
   */

  /**
   * @param {string} email
   * @param {string} password
   * @returns { Promise<Response | null>}
   */
  async login(email, password) {
    const body = {
      email,
      password,
    };
    const response = await Api.fetchBase("/auth", "POST", body);
    const data = await response.json();

    return { status: response.status, data };
  }
}
