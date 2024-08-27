import ProductService from '../../../../../services/product.service.js';
export default class ProductHiveView {
  #elements;
  #productService;
  /**
   * @param { ProductService } productService
   * @param { Object } elements
   * @param { Element } elements.elementH1Title
   * @param { Element } elements.elementH3Value
   * @param { Element } elements.elementPDescription
   * @param { HTMLImageElement } elements.elementImgImage
   */
  constructor(productService, elements) {
    this.#productService = productService;
    this.#elements = elements;
  }

  /**
   *
   * @param {Object} product_hive
   */
  render(product_hive) {

    this.#productService.price_selected = product_hive.value;
    this.#productService.id_product_selected = product_hive.id;

    this.#elements.elementH1Title.textContent = product_hive.title;
    this.#elements.elementH3Value.textContent = product_hive.value;
    this.#elements.elementPDescription.textContent = product_hive.description;
    this.#elements.elementImgImage.src = product_hive.image;
  }
}
