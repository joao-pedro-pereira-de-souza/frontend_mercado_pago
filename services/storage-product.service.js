export default class StorageProduct {
  /**
   * @param { Object } data
   */
  static save(data) {
    window.localStorage.setItem("products", JSON.stringify(data));
  }

  /**
   * @typedef { Object } Response
   * @property { String } Response.name
   * @property { String } Response.email
   * @property { String } Response.image
   * @property { String } Response.id
   * @property { String } Response.token
   *
   */

  /**
   *
   * @returns {Response | null}
   */
  static get() {
    const data = window.localStorage.getItem("products");
    if (!data) return null;

    return JSON.parse(data);
  }
}
