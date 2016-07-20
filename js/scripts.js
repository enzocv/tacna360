var toggleMenu = document.getElementById('toggleMenu'),
menu = document.getElementById('menu'),
body = document.getElementById('body');

toggleMenu.addEventListener('click',function(){
    menu.classList.toggle('mostrar');
    body.classList.toggle('mostrar');
});
