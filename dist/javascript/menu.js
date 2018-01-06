;(function(){
    'use strict';

    var btn = document.querySelector('.header-nav__hamburgger');
    var html = document.querySelector('html');
    var menu = document.querySelector('#mainMenu');
    var classMenu = 'menu-opened';
    var menuOpenneed = false;

    html.addEventListener('click', function(e){
        console.log(e.target);

        if (e.target === html && menuOpenneed){
            closeMenu();
        }
        
    } )

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
        html.classList.remove(classMenu);
        btn.blur();
        menu.setAttribute('aria-expanded', false);
        btn.setAttribute('aria-expanded', false);
    }


    
    function openMenu(){
        menuOpenneed = true;
        html.classList.add(classMenu);
        menu.setAttribute('aria-expanded', true);
        btn.setAttribute('aria-expanded', true);
    }


}())