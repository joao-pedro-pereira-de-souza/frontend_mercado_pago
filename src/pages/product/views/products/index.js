import ProductsService from "../../../../../services/product.service.js";
import ProductBeeView from "./productBee.view.js";
import ProductHoneyPotView from "./productHoneyPot.view.js";
import ProductHiveView from "./productHive.view.js";

export default class Products {
  /**
   * @type {URLSearchParams}
   */
  #params;

  #productBeeView;
  #productHoneyPotView;
  #productHiveView;

  #productsService;

  /**
   *
   * @param {ProductsService} productsService
   * @param {ProductBeeView} productBeeView
   * @param {ProductHoneyPotView} productHoneyPotView
   * @param {ProductHiveView} productHiveView
   * @param {URLSearchParams} params
   */
  constructor(
    productsService,

    productBeeView,
    productHoneyPotView,
    productHiveView,

    params
  ) {
    this.#productsService = productsService;

    this.#productBeeView = productBeeView;
    this.#productHoneyPotView = productHoneyPotView;
    this.#productHiveView = productHiveView;

    this.#params = params;
  }

  async render() {
    const typesProducts = new Set([
      "product_honey_pot",
      "product_hive",
      "product_bee",
    ]);

    const type_product = this.#params.get("type");

    const products = await this.#productsService.getAllGroupedByType();

    if (!type_product || !typesProducts.has(type_product)) {
      console.error("tipo de produto não encontrado");
    }

    if (
      type_product === "product_bee" &&
      !products.product_bee.options.length
    ) {
      console.error("Abelhas fora de estoque");
    }

    if (type_product === "product_hive") {
      const { product_hive } = products;
      this.#productHiveView.render(product_hive);
    }

    if (type_product === "product_honey_pot") {
      const { product_honey_pot } = products;
      this.#productHoneyPotView.render(product_honey_pot);
    }

    if (type_product === "product_bee") {
      const { product_bee } = products;
      this.#productBeeView.render(product_bee);
    }
  }
}
