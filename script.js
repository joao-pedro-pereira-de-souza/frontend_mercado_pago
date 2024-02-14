import AlertMessage from './src/components/alerts/index.js';
import ElementProduct from './src/components/cards/product/index.js';


const content_products = document.getElementById('products');
const btn_header_home = document.getElementById('btn_header_home');
const btn_header_products = document.getElementById('btn_header_project');

async function init() {
     Envents()

     // const sendMessageAlert = {
     //      message: 'teste',
     //      status: 404
     // }

     // AlertMessage(sendMessageAlert);

     const response =  ( await (await fetch('./mocks/products.json')).json());
     const dataProducts = response.data;
     LoadProductElements(dataProducts);
}

/**
 * 
 * @param {Array<{id: number; title: string; description: string; url: string}>} data 
 */
function LoadProductElements(data){

     for(const product of data){
          // const elementDivProduct = document.createElement('div');
          // elementDivProduct.classList.add('content_product');
  
          // const elementProductImg = document.createElement('img');
          // elementProductImg.src = product.url;
  
          // const paramsContentTexts = {
          //      title: product.title,
          //      description: product.description
          // }
          // const elementDivContentText = LoadDivTextsProducts(paramsContentTexts);
  
          // elementDivProduct.appendChild(elementProductImg);
          // elementDivProduct.appendChild(elementDivContentText);

          const paramsComponentProducts = {
               title: product.title,
               description: product.description,
               image: product.url,
               eventClick: () => {}
          }
  
          const elementProduct = ElementProduct(paramsComponentProducts)
          content_products.appendChild(elementProduct);
  
  
     }
}

function EventBtnHeaderHome(){
     const topScrollHome =  document.querySelector('.content_home').getBoundingClientRect().top + window.scrollY;
     window.scrollTo({
          top: topScrollHome,
          behavior: 'smooth'
        });  
}

function EventBtnHeaderProducts(){
     const topScrollHome =  document.querySelector('.content_products').getBoundingClientRect().top + window.scrollY;
     window.scrollTo({
          top: topScrollHome,
          behavior: 'smooth'
        });
        
}

function Envents(){
     btn_header_home.addEventListener('click', EventBtnHeaderHome);
     btn_header_products.addEventListener('click', EventBtnHeaderProducts );
}


init();