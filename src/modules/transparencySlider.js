const transparencySlider = () => {

  const wrap = document.querySelector(`.transparency-slider-wrap`),
        slides = document.querySelectorAll(`.transparency-item`);
  
  if ( document.documentElement.clientWidth < 1090 ) {
    let current = 0;
    slides.forEach( item => item.style.display = `none`);
    slides[current].style.display = `flex`;
    wrap.addEventListener(`click`, (event) => {
      let target = event.target;
      
      if ( target.closest(`#transparency-arrow_right`) ) {
        slides[current].style.display = `none`;
        current++;
        if ( current > slides.length - 1 ) {
          current = 0;
        }
        slides[current].style.display = `flex`;
      } else if ( target.closest(`#transparency-arrow_left`) ) {
        slides[current].style.display = `none`;
        current--;
        if ( current < 0 ) {
          current = slides.length - 1;       
        }
        slides[current].style.display = `flex`;
      }
      
    });
  }

};
export default transparencySlider;