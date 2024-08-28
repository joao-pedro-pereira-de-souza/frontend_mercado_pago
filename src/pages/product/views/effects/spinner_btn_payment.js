export default class EffectSpinnerLoadBtnPayment {
  #elements;

  /**
   * @param { Object } params
   * @param { Object } params.elements
   * @param { HTMLImageElement } params.elements.elementImageMercadoPago
   * @param { HTMLElement } params.elements.elementISpinner
   */
   constructor(params) {
   this.#elements = params.elements
   }

   show() {
      this.#elements.elementImageMercadoPago.style.display = 'none';
      this.#elements.elementISpinner.style.display = "inline-block";
   }

   hide() {
      this.#elements.elementImageMercadoPago.style.display = "inline-block";
      this.#elements.elementISpinner.style.display = "none";
   }


}
