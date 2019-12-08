const reviews = () => {

  const reviews = document.querySelector(`#reviews`),
        slides = reviews.querySelectorAll(`.reviews-slider__slide`);

  let current = 0;
  reviews.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( target.closest(`#reviews-arrow_right`) ) {
      slides[current].style.display = `none`;
      current++;
      if ( current > slides.length - 1 ) {
        current = 0;
      }
      slides[current].style.display = `flex`;
    } else if ( target.closest(`#reviews-arrow_left`) ) {
      slides[current].style.display = `none`;
      current--;
      if ( current < 0 ) {
        current = slides.length - 1;
      }
      slides[current].style.display = `flex`;
    }
  });

};
export default reviews;