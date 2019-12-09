const formulaSlider = () => {

  const formula = document.querySelector(`#formula`),
        slides = formula.querySelectorAll(`.formula-slider__slide`);


  slides.forEach( item => item.style.display = `none` );
  let current = 0;
  slides[current].style.display = `flex`;
  slides[current].classList.add(`active-item`);
  formula.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( target.closest(`#formula-arrow_left`) ) {
      slides[current].style.display = `none`;
      slides[current].classList.remove(`active-item`);
      current--;
      if ( current < 0 ) {
        current = slides.length - 1;
      }
      slides[current].classList.add(`active-item`);
      slides[current].style.display = `flex`;
    } else if ( target.closest(`#formula-arrow_right`) ) {
      slides[current].style.display = `none`;
      slides[current].classList.remove(`active-item`);
      current++;
      if ( current > slides.length - 1 ) {
        current = 0;
      }
      slides[current].classList.add(`active-item`);
      slides[current].style.display = `flex`;
    }
  });

};
export default formulaSlider;