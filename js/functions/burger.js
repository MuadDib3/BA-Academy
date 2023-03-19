import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';


(function(){
  const burger = document?.querySelector('[data-burger]');
  const burgerClose = document?.querySelector('[data-burger-close]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger_active');
    menu?.classList.toggle('menu_active');

    if (menu?.classList.contains('menu_active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Close menu');
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Open menu');
      enableScroll();
    }
  });
  burgerClose?.addEventListener('click', (e) => {
   burger?.classList.toggle('burger_active');
   menu?.classList.toggle('menu_active');
   enableScroll();
 });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Open menu');
    burger.classList.remove('burger_active');
    menu.classList.remove('menu_active');
    enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Close menu');
      burger.classList.remove('burger_active');
      menu.classList.remove('menu_active');
      enableScroll();
    });
  });
})();
