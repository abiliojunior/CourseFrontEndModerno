;(function(){
    'use strict';

    var btn = document.querySelector('.header-nav__hamburgger');
    var html = document.querySelector('html');
    var menuOpenneed = false;

    btn.addEventListener('click', toggleMenu);

    function toggleMenu(e){
        if (menuOpenneed){
            closeMenu();
        }else{
            openMenu();
        }
    }

    function closeMenu(){
        menuOpenneed = false;
        html.classList.remove('menu-opened');

    }


    
    function openMenu(){
        menuOpenneed = true;
        html.classList.add('menu-opened');
    }


}())