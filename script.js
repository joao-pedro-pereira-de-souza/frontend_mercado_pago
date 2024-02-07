
const heigthDom = document.documentElement.scrollHeight;

const content_products = document.getElementById('products');
const btn_header_home = document.getElementById('btn_header_home');
const btn_header_products = document.getElementById('btn_header_project');

async function init() {
     Envents()
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
          const elementDivProduct = document.createElement('div');
          elementDivProduct.classList.add('content_product');
  
          const elementProductImg = document.createElement('img');
          elementProductImg.src = product.url;
  
          const paramsContentTexts = {
               title: product.title,
               description: product.description
          }
          const elementDivContentText = LoadDivTextsProducts(paramsContentTexts);
  
          elementDivProduct.appendChild(elementProductImg);
          elementDivProduct.appendChild(elementDivContentText);
  
          content_products.appendChild(elementDivProduct);
  
  
     }
}

/**
 * @param { Object } params
 * @param { String } params.title
 * @param { String } params.description
 * @returns { HTMLDivElement }
 */
function LoadDivTextsProducts(params){
     const elementDivContentText = document.createElement('div');
     elementDivContentText.classList.add('content_texts');
      
     const elementTextSubtitle = document.createElement('p');
     elementTextSubtitle.classList.add('subtitle');
     elementTextSubtitle.innerText = params.title;

     const elementTextSubtext = document.createElement('p');
     elementTextSubtext.classList.add('subtext');
     elementTextSubtext.innerText = params.description;

     elementDivContentText.appendChild(elementTextSubtitle);
     elementDivContentText.appendChild(elementTextSubtext);

     return elementDivContentText;
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