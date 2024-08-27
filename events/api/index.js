
import Payments from './payments.events.js'

export default class ApiEvents {
  /**
   * @type {SocketIOClient.Socket}
   */
  #socket;

  payments
  constructor(local_api, cors) {
    this.#socket = this.#execute(local_api, cors);
    this.payments = new Payments(this.#socket);
  }

  static create() {
    const local_api = "http://localhost:8383";
    const cors = { origin: "http://localhost:3001" };
    return new ApiEvents(local_api, cors);
  }

  #execute(local_api, cors) {
    return io(local_api, {
      autoConnect: true,
      transports: ["websocket"],
      cors,
    });
  }

}
