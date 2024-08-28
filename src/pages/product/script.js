import { ElementsAuthenticationHeader } from "../../components/authentication_header/index.js";
import PaymentService from "../../../services/payment.service.js";

import Api from "../../../api/index.js";
import GatewayMercadoPago from "../../../gateways/mercadopago/index.js";

import Events from "../../../events/index.js";
import View from "./views/index.js";

import ProductService from '../../../services/product.service.js';
import AuthModalComponent from '../../components/modals/form-auth/form-auth.modal.js';

class Main {
  #element_container_left_header = document.querySelector(
    ".header_global_container_right"
  );
  #elementsAuth = new ElementsAuthenticationHeader();

  #view;

  /**
   * @param { View } view
   */
  constructor(view) {
    this.#view = view;
  }


  async init() {
    this.#view.render();

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

const authModalComponent = AuthModalComponent.create({ api });

const paymentService = new PaymentService(api, gatewayMercadoPago);
const productService = new ProductService(api);
const eventsSockets = Events.create();

const paramsView = {
  productService,
  eventsSockets,
  paymentService,
  authModalComponent,
};

const view = new View(paramsView);

const main = new Main(view);

main.init()
