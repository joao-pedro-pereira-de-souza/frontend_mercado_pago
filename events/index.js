
import ApiEvents from './api/index.js';

export default class Events {

   constructor() {
      this.api = ApiEvents.create();
   }

   static create() {
      return new Events();
   }
}
