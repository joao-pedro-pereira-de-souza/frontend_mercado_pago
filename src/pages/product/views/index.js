
import ProductServer from '../../../../services/product.service.js';

import ProductView from './products/index.js';
import ProductBeeView from "./products/productBee.view.js";
import ProductHiveView from "./products/productHive.view.js";
import ProductHoneyPotView from "./products/productHoneyPot.view.js";

export default class View {
  #elementDivContainerViewer = document.querySelector(
    ".container_home .container_viewer_product"
  );
  #elementH1Title = document.querySelector(".container_home h1");
  #elementH3Value = document.querySelector(
    ".container_details .container_text .container_price h3:nth-child(2)"
  );
  #elementPDescription = document.querySelector(
    ".container_details .container_text p"
  );
  #elementImgImage = document.getElementById("viewer_product_img");
  #elementH2TitleImgSelect = document.getElementById("name_option_selected");

  #elementDivContainer = document.querySelector(".container_details");
  #elementBtnPayment = document.getElementById("btn_payment");

  #params = new URLSearchParams(window.location.search);

  #productView;

  /**
   *
   * @param {ProductServer} productServer
   */
  constructor(productService) {
    const allElements = {
      elementH1Title: this.#elementH1Title,
      elementH3Value: this.#elementH3Value,
      elementPDescription: this.#elementPDescription,
      elementImgImage: this.#elementImgImage,
      elementH2TitleImgSelect: this.#elementH2TitleImgSelect,
      elementDivContainer: this.#elementDivContainer,
      elementDivContainerViewer: this.#elementDivContainerViewer,
    };

    const productBeeView = new ProductBeeView(allElements);
    const productHiveView = new ProductHiveView(allElements);
    const productHoneyPotView = new ProductHoneyPotView(allElements);

    this.#productView = new ProductView(
      productService,
      productBeeView,
      productHoneyPotView,
      productHiveView,
      this.#params
    );
  }

  render() {
    this.#productView.render();

  }
}
