const portfolioPopup = () => {

  const popup = document.querySelector(`.popup-portfolio`),
        descS = document.querySelector(`.portfolio-slider`),
        frames = descS.querySelectorAll(`.portfolio-slider__slide-frame`),
        slideText = document.querySelectorAll(`.popup-portfolio-text`),
        popupSlides = document.querySelectorAll(`.popup-portfolio-slider__slide`),
        arrows = document.querySelectorAll(`.popup-arrow`),
        countTotal = popup.querySelector(`.slider-counter-content__total`),
        countCur = popup.querySelector(`.slider-counter-content__current`);

  let current;      
  popupSlides.forEach( item => item.style.display = `none`);
  document.body.addEventListener(`click`, (event) => {
    countTotal.textContent = popupSlides.length;
    let target = event.target;
    frames.forEach( (item, i) => {
      if ( target === item) {
        popup.style.visibility = `visible`;
        slideText[i].style.display = `block`;
        popupSlides[i].style.display = `block`;
        arrows.forEach( item => item.display = `block`);
        current = i;
        countCur.textContent = current + 1;
      }
      if ( target.closest(`.close`) ) {
        popup.style.visibility = `hidden`;
          slideText[i].style.display = `none`;
          popupSlides[i].style.display = `none`;
      }
      
    });

    if ( target.closest(`#popup_portfolio_left`) ) {
      slideText[current].style.display = `none`;
      popupSlides[current].style.display = `none`;
      current--;
      if ( current < 0 ) {
        current = popupSlides.length - 1;
      }
      slideText[current].style.display = `block`;
      popupSlides[current].style.display = `block`;
    } else if ( target.closest(`#popup_portfolio_right`) ) {
      slideText[current].style.display = `none`;
      popupSlides[current].style.display = `none`;
      current++;
      if ( current > popupSlides.length - 1) {
        current = 0;
      }
      slideText[current].style.display = `block`;
      popupSlides[current].style.display = `block`;
    } 
    
    countCur.textContent = current + 1;
  });

};
export default portfolioPopup;