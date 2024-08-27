import ProductService from "../../../../../services/product.service.js";
export default class ProductBee {
  #elements;
  #productService;
  #elementsSelectOptions = [];
  /**
   * @param { ProductService } productService
   * @param { Object } elements
   * @param { Element } elements.elementH1Title
   * @param { Element } elements.elementH3Value
   * @param { Element } elements.elementPDescription
   * @param { HTMLImageElement } elements.elementImgImage
   * @param { Element } elements.elementH2TitleImgSelect
   * @param { Element } elements.elementDivContainer
   */
  constructor(productService, elements) {
    this.#productService = productService;
    this.#elements = elements;
  }

  /**
   * @param { Object } params
   * @param { String } params.id_product
   * @param { String } params.id_product
   */
  save() {}

  /**
   * @param { String } id_option
   * @param { Object } data
   * @param { String } data.id
   * @param { String } data.title
   * @param { String } data.image
   * @param { Number } data.value
   * @param { String } data.description
   */
  #loadSelectOption(id_option, data) {
    const elementImg = document.getElementById(id_option);

    if (!elementImg) {
      console.error("ocorreu um erro ao selecionar a opção");
    }

    for (const element of this.#elementsSelectOptions) {
      element.classList.remove("imgSelected");
    }
    elementImg.classList.add("imgSelected");

    this.#elements.elementImgImage.src = data.image;
    this.#elements.elementH2TitleImgSelect.innerText = data.title;
    this.#elements.elementPDescription.textContent = data.description;
    this.#elements.elementH3Value.textContent = data.value;

    this.#productService.price_selected = data.value;
    this.#productService.id_option_product_selected = data.id;
  }

  #loadElementSelectOptions(params) {
    const { data } = params;

    const elementDivContainer = document.createElement("div");
    elementDivContainer.classList.add("container_options");

    for (const bee of data) {
      const elementImgBee = document.createElement("img");
      elementImgBee.src = bee.image;
      elementImgBee.id = bee.id;

      elementImgBee.addEventListener("click", () =>
        this.#loadSelectOption(bee.id, bee)
      );
      elementDivContainer.appendChild(elementImgBee);

      this.#elementsSelectOptions.push(elementImgBee);
    }

    const firstElement = this.#elements.elementDivContainer.firstChild;
    this.#elements.elementDivContainer.insertBefore(
      elementDivContainer,
      firstElement
    );
  }

  /**
   *
   * @param {Object} product_bee
   * @param {String} product_bee.id
   * @param {Array<{id: String, title: String, image: String}>} product_bee.options
   */
  async render(product_bee) {
    const optionAutoSelect = product_bee.options[0];
    this.#productService.id_product_selected = product_bee.id;

    this.#elements.elementH1Title.textContent = product_bee.title;
    this.#elements.elementH3Value.textContent = optionAutoSelect.value;

    this.#productService.price_selected = optionAutoSelect.value;
    this.#productService.id_option_product_selected = optionAutoSelect.id;

    this.#elements.elementPDescription.textContent =
      optionAutoSelect.description;
    this.#elements.elementImgImage.src = optionAutoSelect.image;
    this.#elements.elementH2TitleImgSelect.innerText = optionAutoSelect.title;

    const params = {
      data: product_bee.options,
    };
    this.#loadElementSelectOptions(params);
  }
}
