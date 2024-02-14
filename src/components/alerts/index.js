

/**
 * @param { Object } params
 * @param { String } params.message
 * @param { Number } params.status
 */


export default function AlertMessage(params){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });  
    const dataStatus = {
        404: {
            color: '#f1c40f',
            image: 'https://st.depositphotos.com/2935381/4189/i/450/depositphotos_41897159-stock-photo-example-concept.jpg'
        },
        401: {
            color: '#f39c12',
            image: 'https://st.depositphotos.com/2935381/4189/i/450/depositphotos_41897159-stock-photo-example-concept.jpg'
        },
        422: {
            color: '#9b59b6',
            image: 'https://st.depositphotos.com/2935381/4189/i/450/depositphotos_41897159-stock-photo-example-concept.jpg'
        },
        default: {
            color: '#e74c3c',
            image: 'https://st.depositphotos.com/2935381/4189/i/450/depositphotos_41897159-stock-photo-example-concept.jpg'
        }
    }

     

    const elementDivContainer = document.createElement('div');
    elementDivContainer.id = "container_alert"

    const paramsChild = {
        message: params.message,
        ...(dataStatus[params.status] || dataStatus.default)
    }
    ChildElements(elementDivContainer, paramsChild);
    document.body.appendChild(elementDivContainer)
}

/**
 * @param {HTMLDivElement} main_element
 * @param { Object } params
 * @param {String} params.message
 * @param {String} params.image
 * @param {String} params.color
 */
function ChildElements(main_element, params){

    const { color, message, image } = params;

    const content_message_alert = document.createElement('div');
    content_message_alert.id = 'content_message_alert';

    const content_header_alert = document.createElement('div');
    content_header_alert.id = 'content_header_alert';
    content_header_alert.style.setProperty('--color_alert', color);


    const btn_close_alert = document.createElement('button');
    btn_close_alert.id = "btn_close_alert";
    
    btn_close_alert.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    content_header_alert.appendChild(btn_close_alert);
    

    btn_close_alert.addEventListener('click', ()=> {
        document.body.removeChild(main_element);
        document.body.style.overflow = 'auto';

    });

    const elementImg = document.createElement('img');
    elementImg.src = image

    const elementP = document.createElement('p');
    elementP.classList.add('subtitle');
    elementP.innerText = message;

    content_message_alert.appendChild(content_header_alert);
    content_message_alert.append(elementImg);
    content_message_alert.append(elementP);

    main_element.appendChild(content_message_alert);

    document.body.style.overflow = 'hidden';

}
 