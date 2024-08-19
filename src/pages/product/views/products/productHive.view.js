export default class ProductHiveView {
  #elements;
  /**
   * @param { Object } elements
   * @param { Element } elements.elementH1Title
   * @param { Element } elements.elementH3Value
   * @param { Element } elements.elementPDescription
   * @param { HTMLImageElement } elements.elementImgImage
   */
  constructor(elements) {
    this.#elements = elements;
  }

   /**
    *
    * @param {Object} product_hive
    */
  render(product_hive) {
    this.#elements.elementH1Title.textContent = product_hive.title;
    this.#elements.elementH3Value.textContent = product_hive.value;
    this.#elements.elementPDescription.textContent = product_hive.description;
    this.#elements.elementImgImage.src = product_hive.image;
  }
}
