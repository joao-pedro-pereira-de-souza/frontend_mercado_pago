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
    this.#sdk.checkout({
      preference: {
        id: id_preference,
      },
      autoOpen: true,
    });
  }
}
