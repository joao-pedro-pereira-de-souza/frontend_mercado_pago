import { ElementsAuthenticationHeader } from "./src/components/authentication_header/index.js";

class Index {

    #element_container_left_header = document.querySelector('.header_global_container_right')
    #elementsAuth = new ElementsAuthenticationHeader();

    #btn_product_honey_pot = document.getElementById('product_honey_pot');
    #btn_product_hive = document.getElementById('product_hive');
    #btn_product_bee = document.getElementById('product_bee');

    constructor() {
        this.init();
    }


    /**
     * @param { String } type_page
     */
    #loadPageProduct(type_page){
        const typesProducts = new Set(["product_honey_pot", "product_hive", "product_bee"]);
        if(!typesProducts.has(type_page)){
            console.error('O tipo de produto não encontrado.')
        } 
        
        const url_page = `./src/pages/product/index.html?type=${encodeURIComponent(type_page)}`;

        window.location.href = url_page;
    }

    #events(){
        this.#btn_product_honey_pot.addEventListener('click', () => { this.#loadPageProduct('product_honey_pot')});
        this.#btn_product_hive.addEventListener('click', () => { this.#loadPageProduct('product_hive')});
        this.#btn_product_bee.addEventListener('click', () => { this.#loadPageProduct('product_bee')});
    }
    
    init() {
        this.#elementsAuth.loadElementAutentication(false, this.#element_container_left_header);
        this.#events()
    }

    
}

new Index();