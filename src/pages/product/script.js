import { ElementsAuthenticationHeader } from "../../components/authentication_header/index.js";



class Products {

    #element_container_left_header = document.querySelector('.header_global_container_right');
    #elementsAuth = new ElementsAuthenticationHeader();

    #elementDivContainerViewer = document.querySelector('.container_home .container_viewer_product');
    #elementH1Title = document.querySelector('.container_home h1');
    #elementH3Value = document.querySelector('.container_details .container_text .container_price h3:nth-child(2)');
    #elementPDescription = document.querySelector('.container_details .container_text p');
    #elementImgImage = document.getElementById('viewer_product_img');
    #elementH2TitleImgSelect = document.getElementById('name_option_selected');

    #elementDivContainer = document.querySelector('.container_details');

    #params =  new URLSearchParams(window.location.search);

    #value_select_product_honey_pot = 0;
    #data = [
        {
            id: 1,
            type: "product_hive",
            title: "Favo de mel",
            description: `
            A loja especializada em produtos relacionados à apicultura oferece uma variedade de itens artesanais, incluindo colmeias, potes de mel e abelhas. Com um enfoque em produtos de qualidade e produção caseira, os clientes podem encontrar uma seleção diversificada de colmeias feitas à mão, projetadas para atender às necessidades de diferentes tipos de apicultores, desde iniciantes até experientes.
         
            Além disso, a loja oferece uma ampla gama de potes de mel, variando em tamanhos, formas e estilos, todos produzidos com ingredientes naturais e cuidadosamente selecionados. Esses potes de mel são ideais tanto para uso pessoal quanto para presentear, garantindo a autenticidade e a qualidade do produto.
            `,
            image: "http://localhost:3001/assets/images/abelhas-em-um-favo-de-mel-que-e-feito-pela-colmeia.jpg",
            value: "50.00"
        },
        {
            id: 2,
            type: "product_honey_pot",
            title: "Pote de mel",
            description: `
            A loja especializada em produtos relacionados à apicultura oferece uma variedade de itens artesanais, incluindo colmeias, potes de mel e abelhas. Com um enfoque em produtos de qualidade e produção caseira, os clientes podem encontrar uma seleção diversificada de colmeias feitas à mão, projetadas para atender às necessidades de diferentes tipos de apicultores, desde iniciantes até experientes.
         
            Além disso, a loja oferece uma ampla gama de potes de mel, variando em tamanhos, formas e estilos, todos produzidos com ingredientes naturais e cuidadosamente selecionados. Esses potes de mel são ideais tanto para uso pessoal quanto para presentear, garantindo a autenticidade e a qualidade do produto.
            `,
            image: "http://localhost:3001/assets/images/pote.png",
            value: "50.00",
            value_ml: 2.5,
            minimum_ml: 300,
            maximum_ml: 1200,
        },
        {
            id: 3,
            title: "Abelha",
            type: "product_bee",
            value: "50.00",
            amount: 300,
            options: [
                {
                    id: 1,
                    image: "http://localhost:3001/assets/images/abelha-jandaira.jpg",
                    title: "Abelha Jandaira",
                    value: 30.00,
                    description: `
                    A loja especializada em produtos relacionados à apicultura oferece uma variedade de itens artesanais, incluindo colmeias, potes de mel e abelhas. Com um enfoque em produtos de qualidade e produção caseira, os clientes podem encontrar uma seleção diversificada de colmeias feitas à mão, projetadas para atender às necessidades de diferentes tipos de apicultores, desde iniciantes até experientes.
    
                    Além disso, a loja oferece uma ampla gama de potes de mel, variando em tamanhos, formas e estilos, todos produzidos com ingredientes naturais e cuidadosamente selecionados. Esses potes de mel são ideais tanto para uso pessoal quanto para presentear, garantindo a autenticidade e a qualidade do produto.
                    
                    `
                },
                {
                    id: 2,
                    image: "http://localhost:3001/assets/images/abelha-urussu-urucu.jpg",
                    title: "Abelha Urussu",
                    value: 130.00,
                    description: `
                    A loja especializada em produtos relacionados à apicultura oferece uma variedade de itens artesanais, incluindo colmeias, potes de mel e abelhas. Com um enfoque em produtos de qualidade e produção caseira, os clientes podem encontrar uma seleção diversificada de colmeias feitas à mão, projetadas para atender às necessidades de diferentes tipos de apicultores, desde iniciantes até experientes.
    
                    Além disso, a loja oferece uma ampla gama de potes de mel, variando em tamanhos, formas e estilos, todos produzidos com ingredientes naturais e cuidadosamente selecionados. Esses potes de mel são ideais tanto para uso pessoal quanto para presentear, garantindo a autenticidade e a qualidade do produto.
                    
                    `
                },
                {
                    id: 3,
                    image: "http://localhost:3001/assets/images/abelhas-mandassaia-mandacaia.jpg",
                    title: "Abelha Mandassaia",
                    value: 50.00,
                    description: `
                    A loja especializada em produtos relacionados à apicultura oferece uma variedade de itens artesanais, incluindo colmeias, potes de mel e abelhas. Com um enfoque em produtos de qualidade e produção caseira, os clientes podem encontrar uma seleção diversificada de colmeias feitas à mão, projetadas para atender às necessidades de diferentes tipos de apicultores, desde iniciantes até experientes.
    
                    Além disso, a loja oferece uma ampla gama de potes de mel, variando em tamanhos, formas e estilos, todos produzidos com ingredientes naturais e cuidadosamente selecionados. Esses potes de mel são ideais tanto para uso pessoal quanto para presentear, garantindo a autenticidade e a qualidade do produto.
                    
                    `
                }
            ]
        }
    ]
    
    #elementsSelectOptions = [];
    constructor() {
        this.init();
    }

    /**
     * @param { HTMLDivElement } elementLiquid
     * @param { Number } percentage
     */
    #updateValueLiquidPot(elementLiquid, percentage){
        const max_liquid_pot_px = 40;
        const min_liquid_pot_px = 360;

        const value_px = Math.floor(min_liquid_pot_px - ((min_liquid_pot_px - max_liquid_pot_px) * (percentage / 100)));
        elementLiquid.style = `--value_progress_pot:${value_px}px`;
    }

    /**
     * 
     * @returns { { elementDivLiquid: HTMLDivElement } } 
     */
    #loadHoneyPot(){
        const elementDivGlass = document.createElement('div');
        elementDivGlass.classList.add('glass');

        const elementDivLine = document.createElement('div');
        elementDivLine.classList.add('inner');

        const elementDivLiquid = document.createElement('div');
        elementDivLiquid.classList.add('liquid');
        elementDivLine.appendChild(elementDivLiquid);

        elementDivGlass.appendChild(elementDivLine);

        this.#elementDivContainerViewer.appendChild(elementDivGlass);
        return {
            elementDivLiquid
        }
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
    #progressScrollValueBar(is_init, element_container_bar, element_value_bar, value, params){

        if(is_init){

            const valuePercentagem =  (params.minimum_ml / params.maximum_ml) * 100;
            this.#value_select_product_honey_pot = params.value_ml * ((valuePercentagem / 100) * params.maximum_ml);

            element_value_bar.style.width = valuePercentagem + '%';
            
            this.#elementH3Value.textContent = Math.max(this.#value_select_product_honey_pot.toFixed(2));

            this.#updateValueLiquidPot(params.elementLiquid, valuePercentagem)

        } else{
            const valuePercentagem = (value / element_container_bar.offsetWidth) * 100;
            const value_scroll_ml =  ((valuePercentagem / 100) * params.maximum_ml);
            if(value_scroll_ml >= params.minimum_ml){
                this.#value_select_product_honey_pot = params.value_ml * value_scroll_ml;
                element_value_bar.style.width = valuePercentagem + '%';
                this.#elementH3Value.textContent =  Math.max(this.#value_select_product_honey_pot.toFixed(2));
                this.#updateValueLiquidPot(params.elementLiquid, valuePercentagem)
            }
            
        }
    }

    /**
     * @param {Object} params
     * @param {Number} params.value_ml
     * @param {Number} params.minimum_ml
     * @param {Number} params.maximum_ml
     * @param {HTMLDivElement} params.elementLiquid
     */
    #eventsElementValueBar(params){
        const elementDivContainerBar = document.querySelector('.container_details .container_value_bar');

        const elementDivBarValue = document.getElementById('bar_value');
        const elementDivCursorBare = document.getElementById('cursor_bar');

        if(!elementDivCursorBare || !elementDivBarValue){
            console.error('ocorreu um erro ao carregar o seletor de valor');
        }
        let isCursorMove = false;

        const eventMoveBar = (e)=> {
            if (isCursorMove) {
                var positionX = e.clientX - elementDivContainerBar.getBoundingClientRect().left;
                positionX = Math.max(0, Math.min(positionX, elementDivContainerBar.offsetWidth));

                this.#progressScrollValueBar(false, elementDivContainerBar,elementDivBarValue, positionX, params);
              }

        }

        elementDivCursorBare.addEventListener('mousedown', ()=>{
            isCursorMove = true;
            document.addEventListener('mousemove', eventMoveBar);
            document.addEventListener('mouseup', function () {
                isCursorMove = false;
                document.removeEventListener('mousemove', eventMoveBar);
              });
        })
    }

    /**
     * @param {Object} params
     * @param {Number} params.value_ml
     * @param {Number} params.minimum_ml
     * @param {Number} params.maximum_ml
     * @param {HTMLDivElement} params.elementLiquid
     */

    #loadValueBar(params){
        const elementDivContainerValueBar = document.createElement('div');
        elementDivContainerValueBar.classList.add('container_value_bar');

        const elementDivBarValue = document.createElement('div');
        elementDivBarValue.classList.add('bar_value');
        elementDivBarValue.id = "bar_value";

        const elementDivCursorBar = document.createElement('div');
        elementDivCursorBar.classList.add('cursor_bar');
        elementDivCursorBar.id = "cursor_bar";

        const elementIIconSort = document.createElement('i');
        elementIIconSort.classList.add('fa-solid');
        elementIIconSort.classList.add('fa-sort');

        elementDivCursorBar.appendChild(elementIIconSort);


        elementDivContainerValueBar.appendChild(elementDivBarValue);
        elementDivContainerValueBar.appendChild(elementDivCursorBar);
        
        const firstElement = this.#elementDivContainer.firstChild;
        this.#elementDivContainer.insertBefore(elementDivContainerValueBar, firstElement);

        this.#progressScrollValueBar(true, null, elementDivBarValue, null, params)
        this.#eventsElementValueBar(params);
    }

    /**
     * @param { String } id_option
     * @param { Object } data
     * @param { String } data.title
     * @param { String } data.image
     * @param { Number } data.value
     * @param { String } data.description
     */
    #loadSelectOption(id_option, data){
        const elementImg = document.getElementById(id_option);

        if(!elementImg){
            console.error('ocorreu um erro ao selecionar a opção');
        }

       for(const element of this.#elementsSelectOptions){
            element.classList.remove('imgSelected');
       }
        elementImg.classList.add('imgSelected');

       this.#elementImgImage.src = data.image;
       this.#elementH2TitleImgSelect.innerText = data.title;
       this.#elementPDescription.textContent = data.description;
       this.#elementH3Value.textContent = data.value
    }

    /**
     * @param { Object } params
     * @param { Array<{id: string, title: string, image: string, value: number, description: string}> } params.data
     */
    #loadElementSelectOptions(params){

        const { data } = params;

        const elementDivContainer = document.createElement('div');
        elementDivContainer.classList.add('container_options');

        for (const bee of data){
            const elementImgBee = document.createElement('img');
            elementImgBee.src = bee.image;
            elementImgBee.id = bee.id

            elementImgBee.addEventListener('click', () => this.#loadSelectOption(bee.id, bee));
            elementDivContainer.appendChild(elementImgBee);

            this.#elementsSelectOptions.push(elementImgBee);
        }

        const firstElement = this.#elementDivContainer.firstChild;
        this.#elementDivContainer.insertBefore(elementDivContainer, firstElement);

    }

    #loadProduct() {
        
        const typesProducts = new Set(["product_honey_pot", "product_hive", "product_bee"]);

        const type_product = this.#params.get('type');

        if(!type_product || !typesProducts.has(type_product)){
            console.error('tipo de produto não encontrado')
        }

        if(type_product === "product_bee" && !this.#data[2].options.length){
            console.error('Abelhas fora de estoque')
        }

       
        if(type_product === "product_hive"){
            const product = this.#data[0];
            this.#elementH1Title.textContent = product.title;
            this.#elementH3Value.textContent = product.value;
            this.#elementPDescription.textContent = product.description;
            this.#elementImgImage.src = product.image;
        }


        if(type_product === "product_honey_pot"){

            const mainElementImg = this.#elementImgImage.parentNode;
            mainElementImg.removeChild( this.#elementImgImage)

            const product = this.#data[1];
            this.#elementH1Title.textContent = product.title;
            this.#elementH3Value.textContent = product.value;
            this.#elementPDescription.textContent = product.description;


            const { elementDivLiquid } = this.#loadHoneyPot();
            const params = {
                value_ml: product.value_ml,
                minimum_ml: product.minimum_ml,
                maximum_ml: product.maximum_ml,
                elementLiquid: elementDivLiquid
            }
            this.#loadValueBar(params);
        }

        if(type_product === "product_bee" && this.#data[2].options.length){

            const productBee = this.#data[2]
            const optionAutoSelect =productBee.options[0];

            this.#elementH1Title.textContent = productBee.title;
            this.#elementH3Value.textContent = optionAutoSelect.value;
            this.#elementPDescription.textContent = optionAutoSelect.description;
            this.#elementImgImage.src = optionAutoSelect.image;
            this.#elementH2TitleImgSelect.innerText = optionAutoSelect.title;


            const params = {
                data: productBee.options
            }
            this.#loadElementSelectOptions(params);
        }
    }

    init() {
        this.#loadProduct();
        this.#elementsAuth.loadElementAutentication(false, this.#element_container_left_header);

    }
}

new Products();