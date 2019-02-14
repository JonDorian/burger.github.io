const elem = document.querySelector('.hamburger');
elem.addEventListener('click', function() {
  const elem1 = document.querySelector('.fullscreen-menu');
  elem1.classList.add('fullscreen-menu_active');
  const elem3 = document.querySelector('body');
  elem3.classList.add('body-fixed');
  elem4 = elem.classList.contains('hamburger_active')
  if(elem4) {
    elem1.classList.remove('fullscreen-menu_active');
    elem3.classList.remove('body-fixed');
  }
});


