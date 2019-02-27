const sections = $(".section");
const display = $(".maincontent");
let inScroll = false;

const switchOnePageScroll = OPSIndex =>{
  $(".fixed-menu__item")
    .eq(OPSIndex)
    .addClass("active")
    .siblings()
    .removeClass("active");
};

const performTransition = sectionEq => {

  if(inScroll) return;

    inScroll = true;

    const position = sectionEq * -100 + "%";

    sections
      .eq(sectionEq)
      .addClass("active")
      .siblings()
      .removeClass("active");

    display.css({
      'transform' : `translateY(${position})`, 
      "-webkit-transform": `translateY(${position})`
    });

    setTimeout(()=>{
      inScroll = false;
      switchOnePageScroll(sectionEq);
    }, 1000 + 300); //продолжительность транзишна + 300мс - продолжительность инерции
};

$('[data-scroll-to]').on('click', e => {
  e.preventDefault();

  const target = parseInt($(e.currentTarget).attr('data-scroll-to'));

  performTransition(target);

});

const scrollToSection = direction =>{
  let activeSection = sections.filter(".active");
  let nextSection = activeSection.next();  
  let prevSection = activeSection.prev();

  if(direction === "next" && nextSection.length){
    performTransition(nextSection.index()); 
    // console.log("index!!!!" + nextSection.index()); 
  };

  if(direction === "prev" && prevSection.length){
    performTransition(prevSection.index());
  };
};


$(".section").on("wheel", e=>{
  const deltaY = e.originalEvent.deltaY;
  console.log(deltaY);

  if(deltaY > 0){
    // scroll to next
    scrollToSection("next");
  };

  if(deltaY < 0){
    // scroll to prev
    scrollToSection("prev");
  };
});

$(document).on("keydown", e => {

  switch (e.keyCode) {
    // up
    case 38: scrollToSection("next");break;
    // down
    case 40: scrollToSection("prev"); break;
    }
});

$('[data-scroll-to]').on('click', e=>{
  e.preventDefault();

  const target = $(e.currentTarget).attr('data-scroll-to');
  performTransition(target);
});
