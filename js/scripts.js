(function(){
  const currYear = new Date().getFullYear();

  document.getElementById('currYear').innerHTML = currYear;

  function showNav(){
    const headerNav = document.querySelector('.header__nav');

    headerNav.classList.toggle('showing');
  }

  const navToggler = document.querySelector('.navigation__button');
  navToggler.addEventListener('click', showNav);
})();
