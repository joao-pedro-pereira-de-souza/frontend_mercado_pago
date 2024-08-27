import Payments from './payments/index.js';
import Products from './products/index.js';
import Auth from './auth/index.js';

export default class Api {

   constructor() {
      this.payments = new Payments();
      this.products = new Products();
      this.auth = new Auth();
   }

   /**
    * @type {string} path
    * @type {string} method_request
    * @type {Object}! body
    */
   static fetchBase(path, method_request, body) {
      const url_base = `http://localhost:8383`;

      try {
         return fetch(url_base + path, {
           headers: {
             "Content-Type": "application/json",
           },
           method: method_request,
           body: body ? JSON.stringify(body): null,
         });
      } catch (error) {
         alert(`Ocorreu um erro no processo da api`)
      }

   }
}
