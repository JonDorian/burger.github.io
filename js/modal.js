const templateBtn = document.querySelectorAll('.reviews__btn-phones');
const template = document.querySelector('#modal-template').innerHTML;
const modal = createModal();

for (const item of templateBtn) {
    item.addEventListener('click', e=>{
    e.preventDefault();
    
    const reviewsName = document.querySelector('.reviews__title').textContent;
    console.log(reviewsName);
    const reviewsComment = document.querySelector('.reviews__text').textContent;
    console.log(reviewsComment);
    // const popupTitle = document.querySelector('.popup__title');
    // console.log(popupTitle);
    const popupText = document.querySelector('.popup__text');

    modal.setContent('fdsfsdwwwEEEEE');
    modal.open();
    
  });
}


function createModal(){
  const container = document.createElement('div');
  container.className = 'popup';
  container.innerHTML = template;

  const contentBlock = container.querySelector('.popup__content');
  const popupTitle = document.querySelector('.popup__title');
  console.log(popupTitle);

  const closeModal = container.querySelector('.popup__close');
  closeModal.addEventListener('click', e=>{
    e.preventDefault();
    document.body.removeChild(container);
  });

  const overlayClose = container.querySelector('.overlay');
  overlayClose.addEventListener('click', e=>{
    if(e.target==overlayClose){
      closeModal.click();
    }
  })

  

  return {
    open(){
      document.body.appendChild(container);
    },
    close(){
      closeModal.click();
    },
    setContent(content){
      contentBlock.innerHTML = content;
    }
  };
};