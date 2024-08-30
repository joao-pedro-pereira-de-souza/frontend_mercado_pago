import Api from '../../api/index.js'
export default class Products {
  async getAllGroupedByType() {
    const path = "/products/options";
    const response = await Api.fetchBase(path, 'GET');

    if (response.status !== 200) {
      throw new Error('Ocorreu um erro ao retornar a lista de produtos');
    }
    return response.json()
  }
}
