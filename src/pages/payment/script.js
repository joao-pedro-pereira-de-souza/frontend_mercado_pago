
import View from './views/index.js';

class Main {

   /**
    * @type {View}
    */
   view

  /**
   * @param {Object} params
   * @param {View} params.view
   */
   constructor(params) {
     this.view = params.view
   }

   inicialize() {
      this.view.inicialize();
   }
}

const view = new View();
const main = new Main({ view });

main.inicialize();
