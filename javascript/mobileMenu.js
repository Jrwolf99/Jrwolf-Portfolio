
    const menu = document.querySelector(".mobile-nav__menu");
    const menuButton = document.querySelector(".mobile-nav__button");
    let menuOpen = false;

menuButton.addEventListener('click', () => {



    if (!menuOpen) {
        menuOpen = true;
        menuButton.classList.add('js-open');
        menu.style.display = 'flex';
        return;
    }
    menuButton.classList.remove('js-open');
    menu.style.display = 'none';

    menuOpen=false;
   
});
    
