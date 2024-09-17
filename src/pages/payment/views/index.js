import ComponentNotification from './component.notification.js';


export default class View {

   #elementContentDiv = document.getElementById('content')
  /**
   * @type { ComponentNotification }
   *
   */
   #componentNotification;

  #params = new URLSearchParams(window.location.search);

   constructor() {
     this.#componentNotification = new ComponentNotification({params: this.#params})
  }

   inicialize() {
      const elementComponentNotification = this.#componentNotification.getComponent();

      this.#elementContentDiv.appendChild(elementComponentNotification);

  }
}
