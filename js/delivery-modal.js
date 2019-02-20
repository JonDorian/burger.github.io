const myForm = document.querySelector('#order');
const sendBtn = document.querySelector('#send-btn');
const deliveryModal = document.querySelector('.delivery-modal');

sendBtn.addEventListener('click', e=>{
  e.preventDefault();

  const formData = new FormData(myForm);
  formData.append("to", "willpowerpride@gmail.com");

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
  xhr.send(formData);
  
  xhr.addEventListener('load', e=>{
  let resp = xhr.response;

    if(resp!=null){
      deliveryModal.classList.add('active');
      deliveryModal.querySelector('.delivery-modal__text').innerHTML = "Ваш заказ отправлен на обработку";
      const body = document.querySelector('body');
      body.classList.add('body-fixed');
      setTimeout(function(){
        deliveryModal.classList.remove('active');
        body.classList.remove('body-fixed');
      }, 3000);
    } else {
      deliveryModal.classList.add('active');
      deliveryModal.querySelector('.delivery-modal__text').innerHTML = "Ошибка отправки";
      const body = document.querySelector('body');
      body.classList.add('body-fixed');
      setTimeout(function(){
        deliveryModal.classList.remove('active');
        body.classList.remove('body-fixed');
      }, 3000);
    }

    deliveryModal.addEventListener('click', e=>{
      deliveryModal.classList.remove('active');
      const body = document.querySelector('body');
      body.classList.remove('body-fixed');
    });

    const closeDeliveryModal = document.querySelector('.btn_delivery-modal');
    closeDeliveryModal.addEventListener('click', e=>{
      deliveryModal.classList.remove('active');
      const body = document.querySelector('body');
      body.classList.remove('body-fixed');
    });    
  });
});
