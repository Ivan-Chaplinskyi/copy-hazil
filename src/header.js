document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menu-toggle');
    const menu = document.querySelector('#header-navigate');
  
    const toggleMenu = () => {
        if (menu.classList.contains('opacity-0')) {
            menu.classList.add('transition-all');
            menu.classList.remove('opacity-0');
            menu.classList.remove('invisible');
            menuButton.dataset.status = 'open';
        } else {
            closeMenu();
        }
    };
  
    const closeMenu = () => {
        if (!menu.classList.contains('opacity-0')) {
            menu.classList.add('opacity-0');
            menu.classList.remove('invisible');
            menuButton.dataset.status = 'close';
            menu.classList.remove('transition-all');
        }
    };
  
    menuButton?.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMenu();
        });
    });
  
    window.addEventListener('scroll', closeMenu);
    window.addEventListener('resize', closeMenu);
});