const items = document.querySelectorAll('.accordeon__item');

for (const item of items) {
  item.addEventListener('click', handleAccoOpening)
}

function handleAccoOpening(e){
  const curItem = e.currentTarget; 
  const isClosedItem = curItem.classList.contains('accordeon__item_active');
  
  if(isClosedItem) {
    closeItemsAndRemoveActive(items);
  } else {
    closeItemsAndRemoveActive(items);
    openItem(curItem);
  }
}

function closeItemsAndRemoveActive(items) {
  Array.from(items).forEach(elem => {
    elem.classList.remove('accordeon__item_active');
  });
}

function openItem(item){
  const content = item.querySelector('.member__info');
  item.classList.add('accordeon__item_active');
}