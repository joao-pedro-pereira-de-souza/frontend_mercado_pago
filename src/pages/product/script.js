import { ElementsAuthenticationHeader } from "../../components/authentication_header/index.js";
import PaymentService from "../../../services/payment.service.js";

import Api from "../../../api/index.js";
import GatewayMercadoPago from "../../../gateways/mercadopago/index.js";

import Events from "../../../events/index.js";
import View from "./views/index.js";

import ProductService from '../../../services/product.service.js';

class Main {
  #element_container_left_header = document.querySelector(
    ".header_global_container_right"
  );
  #elementsAuth = new ElementsAuthenticationHeader();


  #view;
  #paymentService

  #elementBtnPayment = document.getElementById("btn_payment");

  #events;

  /**
   * @param { View } view
   * @param {PaymentService} paymentService
   */
  constructor(view, paymentService) {
    this.#events = Events.create();

    this.#view = view;
    this.#paymentService = paymentService;

  }

  async #eventClickBtnPayment() {
    const { id } = await this.#paymentService.orders.create();
    this.#events.api.payments.onOrder(id, paymentService);
  }

  async init() {

    this.#view.render();

    this.#elementBtnPayment.addEventListener("click", () =>
      this.#eventClickBtnPayment()
    );

    this.#elementsAuth.loadElementAutentication(
      false,
      this.#element_container_left_header
    );
  }
}

const api = new Api();
const gatewayMercadoPago = new GatewayMercadoPago(
  "APP_USR-00febe5c-186a-4510-97cc-6c0650f3b309"
);

const paymentService = new PaymentService(api, gatewayMercadoPago);

const productService = new ProductService(api);
const view = new View(productService);
const main = new Main(view, paymentService);

main.init()
