export class ElementsAuthenticationHeader {
    
    #elementButtonHome = document.querySelector('.header_global_button')

    eventClickHome(){
        window.location.href = '../../../index.html';
    }
    events(){
        this.#elementButtonHome.addEventListener('click', this.eventClickHome)
    }
    /**
     * @param { Element } element_main
     */
    #elementsInLogged(element_main){
        const btnProfile = document.createElement('button');
        btnProfile.id = 'btn_header_perfil';

        const imgBtnProfile = document.createElement('img');
        imgBtnProfile.classList.add('icon_perfil');

        btnProfile.appendChild(imgBtnProfile);

        const btnExit = document.createElement('button');
        btnExit.id = 'btn_header_exit';

        const iconBtnExit = document.createElement('i');
        iconBtnExit.classList.add('fa-solid');
        iconBtnExit.classList.add('fa-right-to-bracket');

        btnExit.appendChild(iconBtnExit);

        element_main.appendChild(btnProfile);
        element_main.appendChild(btnExit);

    }

    /**
     * @param { Element } element_main
     */
    #elementsNotLogged(element_main){
            const btnLogin = document.createElement('button');
            btnLogin.id = 'btn_header_login';
    
            const iconBtnLogin = document.createElement('i');
            iconBtnLogin.classList.add('fa-solid');
            iconBtnLogin.classList.add('fa-user');
      
            btnLogin.appendChild(iconBtnLogin);
    
            element_main.appendChild(btnLogin);
    
        }

    /**
     * @param { boolean } is_logged
     * @param { HTMLElement } element_load
     */

    loadElementAutentication(is_logged, element_load){
        is_logged ? this.#elementsInLogged(element_load) : this.#elementsNotLogged(element_load);
        this.events()

    }
}