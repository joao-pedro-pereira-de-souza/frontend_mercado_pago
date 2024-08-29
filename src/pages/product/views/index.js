
import ProductService from '../../../../services/product.service.js';

import ProductView from './products/index.js';
import ProductBeeView from "./products/productBee.view.js";
import ProductHiveView from "./products/productHive.view.js";
import ProductHoneyPotView from "./products/productHoneyPot.view.js";

import EventsListeners from './events/index.js';
import PaymentService from '../../../../services/payment.service.js';

import AuthModalComponent from '../../../components/modals/form-auth/form-auth.modal.js';

import SpinnerBtnPaymentEffect from './effects/spinner_btn_payment.js';

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

  #elementISpinnerBtnPayment = document.getElementById("spinner_btn_payment");
  #elementImageBtnPayment = document.getElementById("image_btn_payment");
  #params = new URLSearchParams(window.location.search);

  #productView;
  #eventsListeners;

  /**
   *@param { Object } params
   * @param {ProductService} params.productService
   * @param {EventsSockets} params.eventsSockets
   * @param {PaymentService} params.paymentService
   * @param {AuthModalComponent} params.authModalComponent
   * @
   */
  constructor(params) {
    const allElements = {
      elementH1Title: this.#elementH1Title,
      elementH3Value: this.#elementH3Value,
      elementPDescription: this.#elementPDescription,
      elementImgImage: this.#elementImgImage,
      elementH2TitleImgSelect: this.#elementH2TitleImgSelect,
      elementDivContainer: this.#elementDivContainer,
      elementDivContainerViewer: this.#elementDivContainerViewer,
    };

    const productBeeView = new ProductBeeView(
      params.productService,
      allElements
    );
    const productHiveView = new ProductHiveView(
      params.productService,
      allElements
    );
    const productHoneyPotView = new ProductHoneyPotView(
      params.productService,
      allElements
    );

    this.#productView = new ProductView(
      params.productService,
      productBeeView,
      productHoneyPotView,
      productHiveView,
      this.#params
    );

    const spinnerBtnPaymentEffect = new SpinnerBtnPaymentEffect({
      elements: {
        elementImageMercadoPago: this.#elementImageBtnPayment,
        elementISpinner: this.#elementISpinnerBtnPayment,
      },
    });

    const paramsEventsListeners = {
      elements: {
        elementBtnPayment: this.#elementBtnPayment,
      },
      eventsSockets: params.eventsSockets,
      paymentService: params.paymentService,
      productService: params.productService,
      authModalComponent: params.authModalComponent,
      spinnerBtnPaymentEffect,
    };

    this.#eventsListeners = new EventsListeners(paramsEventsListeners);
  }

  render() {
    this.#productView.render();
    this.#eventsListeners.listeners();
  }
}
