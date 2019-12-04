const repairTypesSlider = () => {

  const repairList = document.querySelectorAll(`.repair-types-nav__item`),
        repairTabsPar = document.querySelector(`.repair-types-slider`),
        repairListWrap = document.querySelector(`.nav-list-repair`),
        repairSlides = document.querySelectorAll(`.repair-types-slider__slide`),
        repairSliderWrap = document.querySelector(`.repair-types-slider-wrap`),
        sliderCounterCurrent = document.querySelector(`.slider-counter-content__current`),
        sliderCounterTotal = document.querySelector(`.slider-counter-content__total`),
        mobileList = document.querySelector(`.nav-wrap-repair`),
        navListRepair = document.querySelector(`.nav-list-repair`);

  sliderCounterTotal.textContent = 5;
  let currentSlide = 0;
  repairListWrap.addEventListener(`click`, (event) => {
    let target = event.target;
    repairList.forEach( (item, i) => {
      item.classList.remove(`active`);
      target.classList.add(`active`);
      repairTabsPar.children[i].style.display = `none`;
      repairSlides[i].style.display = `none`;
      
      if ( target === item ) {
        repairTabsPar.children[i].style.display = `block`;
        repairSlides[i].style.display = `block`;
        sliderCounterTotal.textContent = repairTabsPar.children[i].children.length;
        sliderCounterCurrent.textContent = 1;
        currentSlide = 0;
      }     
    });    
  });
  
  
  repairSliderWrap.addEventListener(`click`, (event) => {
    
    let target = event.target;
    repairList.forEach( (item, i) => {    
      if ( item.classList.contains(`active`) ) {
        
            if ( target.closest(`.slider-arrow_left`) ) {
              repairTabsPar.children[i].children[currentSlide].style.display = `none`; 
              currentSlide--;
            } else if ( target.closest(`.slider-arrow_right`) ) {
              repairTabsPar.children[i].children[currentSlide].style.display = `none`;
              currentSlide++;   
            }
            if ( currentSlide < 0 ) {
              currentSlide = repairTabsPar.children[i].children.length - 1;
            } else if ( currentSlide > repairTabsPar.children[i].children.length -1) {
              currentSlide = 0;
            }
            repairTabsPar.children[i].children[currentSlide].style.display = `block`;
            sliderCounterCurrent.textContent = currentSlide + 1;
      }
    });
  });

  let pos = 0;
  mobileList.addEventListener(`click`, (event) => {
    let target = event.target;
    
    if ( target.closest(`.nav-arrow_left`) && pos < 900 && pos !== 0) {
      pos += 300;
      navListRepair.style.transform = `translateX(${pos}px)`;
    } else if ( target.closest(`.nav-arrow_right`) && pos > -900 ) {
      pos -= 300;
      navListRepair.style.transform = `translateX(${pos}px)`;
    }
  });

  
    

};
export default repairTypesSlider;