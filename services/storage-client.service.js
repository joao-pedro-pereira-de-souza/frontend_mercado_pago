
export default class StorageClient {
  /**
   * @param { Object } data
   * @param { String } data.id
   * @param { String } data.name
   * @param { String } data.email
   * @param { String } data.image
   */
  static save(data) {
    window.localStorage.setItem("client", JSON.stringify(data));
  }

  /**
   * @typedef { Object } Response
   * @property { String } Response.name
   * @property { String } Response.email
   * @property { String } Response.photo
   * @property { String } Response.id
   */

  /**
   *
   * @returns {Response | null}
   */
  static get() {
    const data = window.localStorage.getItem("client");
    if (!data) return null;

    return JSON.parse(data);
  }
}
