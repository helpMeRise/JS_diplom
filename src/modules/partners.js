const partners = () => {

  const partners = document.querySelector(`#partners`),
        slides = partners.querySelectorAll(`.partners-slider__slide`),
        slider = partners.querySelector(`.partners-slider`),
        wrapper = partners.querySelector(`.wrapper`);

  slider.style.display = `flex`;
  wrapper.style.overflow = `hidden`;
  slides.forEach( (item) => {
    item.style.flex = `0 0 33%`;
  });
  let last = slider.children.length - 1;
  partners.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( target.closest(`#partners-arrow_left`) ) {
      slider.appendChild(slider.children[0]);
    } else if ( target.closest(`#partners-arrow_right`) ) {
      slider.insertBefore(slider.children[last], slider.children[0]);
    }
  });
  

};
export default partners;