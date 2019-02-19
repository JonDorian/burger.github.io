const templateBtn = document.querySelectorAll(".btn_review");

templateBtn.forEach(el =>
  el.addEventListener("click", function(e) {
    e.preventDefault();
    const popupContent = document.querySelector(".overlay");
    const parent = e.target.parentNode;
    const parentTitle = parent.parentNode.querySelector(".reviews__title").innerHTML;
    const parentText = parent.parentNode.querySelector(".reviews__text").innerHTML;

    popupContent.querySelector(".popup__title").innerHTML = parentTitle;
    popupContent.querySelector(".popup__text").innerHTML = parentText;

    popupContent.classList.add("active");
    document.body.classList.add("body-fixed");

    popupContent.addEventListener('click', e=>{
      if(e.target==popupContent){
        popupContent.classList.remove("active");
        document.body.classList.remove("body-fixed");
      }
    });

    const closeModal = document.querySelector('.popup__close');
    closeModal.addEventListener('click', e=>{
      e.preventDefault();
      popupContent.classList.remove("active");
      document.body.classList.remove("body-fixed");
    });
  })
);