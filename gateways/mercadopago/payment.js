export default class Payment {
  #sdk;

  constructor(sdk) {
    this.#sdk = sdk;
  }

  /**
   *
   * @param {String} id_preference
   *
   * @returns { void }
   */
  checkout(id_preference) {
    const checkout = this.#sdk.checkout({
      preference: {
        id: id_preference,
      },
      autoOpen: true,
    });

    this.#listeners();
  }


  #listeners() {
    window.addEventListener("message", this.handleClose);
  }

  handleClose(event) {

    if (event.data.type === "close") {

    }

    window.removeEventListener("message", this.handleClose);
  }
}
