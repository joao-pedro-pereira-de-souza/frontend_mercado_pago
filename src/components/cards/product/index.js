
/**
 * @param { Object } params
 * @param { String } params.image
 * @param { String } params.title
 * @param { String } params.description
 * @param { Function } params.eventClick
 * 
 * @returns { HTMLDivElement }
 */
export default function ElementProduct(params){
    const { description, eventClick, image, title } = params;

    const elementDivProduct = document.createElement('div');
    elementDivProduct.classList.add('content_product');


    elementDivProduct.addEventListener('click', eventClick);

    const elementProductImg = document.createElement('img');
    elementProductImg.src = image;

    const paramsContentTexts = {
         title,
         description
    }
    const elementDivContentText = LoadDivTextsProducts(paramsContentTexts);

    elementDivProduct.appendChild(elementProductImg);
    elementDivProduct.appendChild(elementDivContentText);

    return elementDivProduct;
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