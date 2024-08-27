import ProductService from "../../../../../services/product.service.js";

export default class ProductHoneyPot {
  #productService;
  #elements;
  #value_select_product_honey_pot = 0;

  /**
   * @param { ProductService } productService
   * @param {Object} elements
   * @param {Element} elements.elementImgImage
   * @param {Element} elements.elementH1Title
   * @param {Element} elements.elementH3Value
   * @param {Element} elements.elementPDescription
   * @param {Element} elements.elementDivContainerViewer
   * @param {Element} elements.elementDivContainer
   */
  constructor(productService, elements) {
    this.#productService = productService;
    this.#elements = elements;
  }

  /**
   * @param {Object} params
   * @param {Number} params.value_ml
   * @param {Number} params.minimum_ml
   * @param {Number} params.maximum_ml
   * @param {HTMLDivElement} params.elementLiquid
   */
  #eventsElementValueBar(params) {
    const elementDivContainerBar = document.querySelector(
      ".container_details .container_value_bar"
    );

    const elementDivBarValue = document.getElementById("bar_value");
    const elementDivCursorBare = document.getElementById("cursor_bar");

    if (!elementDivCursorBare || !elementDivBarValue) {
      console.error("ocorreu um erro ao carregar o seletor de valor");
    }
    let isCursorMove = false;

    const eventMoveBar = (e) => {
      if (isCursorMove) {
        var positionX =
          e.clientX - elementDivContainerBar.getBoundingClientRect().left;
        positionX = Math.max(
          0,
          Math.min(positionX, elementDivContainerBar.offsetWidth)
        );

        this.#progressScrollValueBar(
          false,
          elementDivContainerBar,
          elementDivBarValue,
          positionX,
          params
        );
      }
    };

    elementDivCursorBare.addEventListener("mousedown", () => {
      isCursorMove = true;
      document.addEventListener("mousemove", eventMoveBar);
      document.addEventListener("mouseup", function () {
        isCursorMove = false;
        document.removeEventListener("mousemove", eventMoveBar);
      });
    });
  }

  #updateValueLiquidPot(elementLiquid, percentage) {
    const max_liquid_pot_px = 40;
    const min_liquid_pot_px = 360;

    const value_px = Math.floor(
      min_liquid_pot_px -
        (min_liquid_pot_px - max_liquid_pot_px) * (percentage / 100)
    );
    elementLiquid.style = `--value_progress_pot:${value_px}px`;
  }

  /**
   * @param {Boolean} is_init
   * @param {Element} [element_container_bar]
   * @param {Element} element_value_bar
   * @param {Number} [value]
   * @param {Object} params
   * @param {Number} params.value_ml
   * @param {Number} params.minimum_ml
   * @param {Number} params.maximum_ml
   * @param {HTMLDivElement} params.elementLiquid
   */
  #progressScrollValueBar(
    is_init,
    element_container_bar,
    element_value_bar,
    value,
    params
  ) {
    if (is_init) {
      const valuePercentagem = (params.minimum_ml / params.maximum_ml) * 100;
      this.#value_select_product_honey_pot =
        params.value_ml * ((valuePercentagem / 100) * params.maximum_ml);

      element_value_bar.style.width = valuePercentagem + "%";

      const price = Math.max(this.#value_select_product_honey_pot.toFixed(2));
      this.#productService.price_selected = price;

      this.#elements.elementH3Value.textContent = price;

      this.#updateValueLiquidPot(params.elementLiquid, valuePercentagem);
    } else {
      const valuePercentagem =
        (value / element_container_bar.offsetWidth) * 100;
      const value_scroll_ml = (valuePercentagem / 100) * params.maximum_ml;
      if (value_scroll_ml >= params.minimum_ml) {
        this.#value_select_product_honey_pot =
          params.value_ml * value_scroll_ml;
        element_value_bar.style.width = valuePercentagem + "%";

        const price = Math.max(this.#value_select_product_honey_pot.toFixed(2));
        this.#productService.price_selected = price;
        this.#elements.elementH3Value.textContent = price;
        this.#updateValueLiquidPot(params.elementLiquid, valuePercentagem);
      }
    }
  }

  /**
   *
   * @returns { { elementDivLiquid: HTMLDivElement } }
   */
  #loadHoneyPot() {
    const elementDivGlass = document.createElement("div");
    elementDivGlass.classList.add("glass");

    const elementDivLine = document.createElement("div");
    elementDivLine.classList.add("inner");

    const elementDivLiquid = document.createElement("div");
    elementDivLiquid.classList.add("liquid");
    elementDivLine.appendChild(elementDivLiquid);

    elementDivGlass.appendChild(elementDivLine);

    this.#elements.elementDivContainerViewer.appendChild(elementDivGlass);
    return {
      elementDivLiquid,
    };
  }

  /**
   * @param {Object} params
   * @param {Number} params.value_ml
   * @param {Number} params.minimum_ml
   * @param {Number} params.maximum_ml
   * @param {HTMLDivElement} params.elementLiquid
   */

  #loadValueBar(params) {
    const elementDivContainerValueBar = document.createElement("div");
    elementDivContainerValueBar.classList.add("container_value_bar");

    const elementDivBarValue = document.createElement("div");
    elementDivBarValue.classList.add("bar_value");
    elementDivBarValue.id = "bar_value";

    const elementDivCursorBar = document.createElement("div");
    elementDivCursorBar.classList.add("cursor_bar");
    elementDivCursorBar.id = "cursor_bar";

    const elementIIconSort = document.createElement("i");
    elementIIconSort.classList.add("fa-solid");
    elementIIconSort.classList.add("fa-sort");

    elementDivCursorBar.appendChild(elementIIconSort);

    elementDivContainerValueBar.appendChild(elementDivBarValue);
    elementDivContainerValueBar.appendChild(elementDivCursorBar);

    const firstElement = this.#elements.elementDivContainer.firstChild;
    this.#elements.elementDivContainer.insertBefore(
      elementDivContainerValueBar,
      firstElement
    );

    this.#progressScrollValueBar(true, null, elementDivBarValue, null, params);
    this.#eventsElementValueBar(params);
  }

  async render(product_honey_pot) {
    const mainElementImg = this.#elements.elementImgImage.parentNode;
    mainElementImg.removeChild(this.#elements.elementImgImage);

    this.#elements.elementH1Title.textContent = product_honey_pot.title;
    this.#elements.elementH3Value.textContent = product_honey_pot.value;
    this.#elements.elementPDescription.textContent =
      product_honey_pot.description;

    const { elementDivLiquid } = this.#loadHoneyPot();
    const params = {
      value_ml: product_honey_pot.value_ml,
      minimum_ml: product_honey_pot.minimum_ml,
      maximum_ml: product_honey_pot.maximum_ml,
      elementLiquid: elementDivLiquid,
    };
    this.#loadValueBar(params);
  }
}
