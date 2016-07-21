var toggleMenu = document.getElementById('toggleMenu'),
menu = document.getElementById('menu'),
body = document.getElementById('body'),
link = document.getElementsByClassName('main-manu__link');

/**
 * [addEventListener description]
 * @param {[id]} 'click'   [toggleMenu para que el menu se muestre]
 * @param {[type]} function( [añade la clase MOSTRAR a el body y al menu]
 */
    toggleMenu.addEventListener('click',function(){
        menu.classList.toggle('mostrar');
        body.classList.toggle('mostrar');

    });

/**
 * [addEventListener description]
 * @param {[class]} 'click'   [description]
 * @param {[type]} function( [remueve la clase mostrar cuando se de clic
 *  en  un main-menu__link]
 */
        var i = link.length - 1;
        for (; i >= 0 ; i--) {
             link[i].addEventListener('click',function(){
                 menu.classList.remove('mostrar');
                 body.classList.remove('mostrar');
                 console.log("click");
             });
         }
