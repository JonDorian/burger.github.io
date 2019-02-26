const sections = $(".section");
const display = $(".maincontent");
let inScroll = false;

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
      'transform' : `translateY(${position})`
    });

    setTimeout(()=>{
      inScroll = false;
    }, 1000 + 300); //продолжительность транзишна + 300мс - продолжительность инерции
};

const scrollToSection = direction =>{
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if(direction === "next" && nextSection.length){
    performTransition(nextSection.index());  
  };

  if(direction === "prev" && prevSection.length){
    performTransition(prevSection.index());
  };
};


$(".wrapper").on("wheel", e=>{
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
