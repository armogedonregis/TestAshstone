// Меню бургер
const Burg = document.querySelector('.hamb');
const BurgerMenu = document.querySelector('.menu_body');
const toggleMenu = function () {
    Burg.classList.toggle('active');
    BurgerMenu.classList.toggle('visible');
    BurgerMenu.classList.toggle('active');
};
  Burg.addEventListener("click", function(e) {
    toggleMenu();
  }); 

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == BurgerMenu || BurgerMenu.contains(target);
  const its_btnMenu = target == Burg;
  const menu_is_active = BurgerMenu.classList.contains("active");

  if (!its_menu && !its_btnMenu && menu_is_active) {
      toggleMenu();
  }
});