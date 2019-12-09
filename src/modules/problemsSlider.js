const problemsSlider = () => {

  const problems = document.querySelector(`#problems`),
        slides = problems.querySelectorAll(`.problems-slider__slide`);


  slides.forEach( item => item.style.display = `none` );
  let current = 0;
  slides[current].style.display = `flex`;
  problems.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( target.closest(`#problems-arrow_left`) ) {
      slides[current].style.display = `none`;
      slides[current].classList.remove(`active-item`);
      current--;
      if ( current < 0 ) {
        current = slides.length - 1;
      }
      slides[current].classList.add(`active-item`);
      slides[current].style.display = `flex`;
    } else if ( target.closest(`#problems-arrow_right`) ) {
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
export default problemsSlider;