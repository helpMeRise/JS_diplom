const transparencyPopup = () => {

  const popup = document.querySelector(`.popup-transparency`),
        slides = document.querySelectorAll(`.popup-transparency-slider__slide`),
        slidesWrap = document.querySelector(`.popup-dialog-transparency`),
        section  = document.querySelector(`.transparency`),
        items = document.querySelectorAll(`.transparency-item`),
        counterTotal = popup.querySelector(`.slider-counter-content__total`),
        counterCurrent = popup.querySelector(`.slider-counter-content__current`),
        close = popup.querySelector(`.close`);
  
  counterTotal.textContent = slides.length;        
  slidesWrap.style.display = `none`;
  slides.forEach( item => item.style.display = `none`);
  let current;
  items.forEach( (item, i) => {
    item.addEventListener(`click`, (event) => {
      let target = event.target;
      if ( target.closest(`.${item.classList[0]}`) ) {
        popup.style.visibility = `visible`;
        slidesWrap.style.display = `flex`;
        current = i;
        slides[current].style.display = `flex`;
        counterCurrent.textContent = current + 1;
      }
    });
    
  });
  popup.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( target.closest(`#transparency_right`) ) {
      slides[current].style.display = `none`;
      current++;
      if ( current > slides.length - 1 ) {
        current = 0;
      }
      slides[current].style.display = `flex`;
    } else if ( target.closest(`#transparency_left`) ) {
      slides[current].style.display = `none`;
      current--;
      if ( current < 0 ) {
        current = slides.length - 1;
      }
      slides[current].style.display = `flex`;
    }
    counterCurrent.textContent = current + 1;

    if ( target.closest(`.${close.classList}`) || !target.closest(`.popup-dialog-transparency`) ) {
      popup.style.visibility = `hidden`;
      slides.forEach( item => item.style.display = `none`);
    }
  });
  
};
export default transparencyPopup;