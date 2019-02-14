const types = document.querySelectorAll('.accordeon-menu__item');

for (const types2 of types) {
  types2.addEventListener('click', a=>{
    const curItem = a.currentTarget;     

    if(curItem.classList.contains('accordeon-menu__item_active')) {
      curItem.classList.remove('accordeon-menu__item_active')
    } else {

      Array.from(types).forEach(element => {
        element.classList.remove('accordeon-menu__item_active');
      });
      curItem.classList.add('accordeon-menu__item_active');
    }
  })
}