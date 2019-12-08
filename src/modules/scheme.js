const scheme = () => {

  const scheme = document.querySelector(`#scheme`),
        navWrap = scheme.querySelector(`.nav-wrap`),
        schemeNavItems = scheme.querySelectorAll(`.scheme-nav__item`),
        slides = scheme.querySelectorAll(`.scheme-slider__slide`),
        slidesText = scheme.querySelectorAll(`.scheme-description-block`),
        row = scheme.querySelector(`#scheme-list`);

  let current = 0;
  slides.forEach( item => item.style.display = `none`);
  slides[current].style.display = `flex`;
  slidesText.forEach( item => item.style.display = `none`);
  slidesText[current].style.display = `flex`;
  scheme.addEventListener(`click`, (event) => {
    let target = event.target;
    schemeNavItems.forEach( (item, i) => {
      if ( target === item ) {
        schemeNavItems[current].classList.remove(`active`);
        slides[current].style.display = `none`;
        slidesText[current].style.display = `none`;
        current = i;
        item.classList.add(`active`);
        slides[current].style.display = `flex`;
        slidesText[current].style.display = `flex`;  
      }
    });
  });

  let pos = 0;
  navWrap.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( document.documentElement.clientWidth > 1024 ) {
      if ( target.closest(`#nav-arrow-scheme_left`) && pos < 100 && pos !== 0) {
        pos += 100;
        row.style.transform = `translateX(${pos}px)`;
      } else if ( target.closest(`#nav-arrow-scheme_right`) && pos > -100 ) {
        pos -= 100;
        row.style.transform = `translateX(${pos}px)`;
      }
    } else if ( document.documentElement.clientWidth > 768 ) {
      if ( target.closest(`#nav-arrow-scheme_left`) && pos < 400 && pos !== 0) {
        pos += 200;
        row.style.transform = `translateX(${pos}px)`;
      } else if ( target.closest(`#nav-arrow-scheme_right`) && pos > -400 ) {
        pos -= 200;
        row.style.transform = `translateX(${pos}px)`;
      } 
    } else if ( document.documentElement.clientWidth > 572 ) {
      if ( target.closest(`#nav-arrow-scheme_left`) && pos < 600 && pos !== 0) {
        pos += 300;
        row.style.transform = `translateX(${pos}px)`;
      } else if ( target.closest(`#nav-arrow-scheme_right`) && pos > -600 ) {
        pos -= 300;
        row.style.transform = `translateX(${pos}px)`;
      }
    } else if ( document.documentElement.clientWidth < 572 ) {
      if ( target.closest(`#nav-arrow-scheme_left`) && pos < 700 && pos !== 0) {
        pos += 170;
        row.style.transform = `translateX(${pos}px)`;
      } else if ( target.closest(`#nav-arrow-scheme_right`) && pos > -700 ) {
        pos -= 170;
        row.style.transform = `translateX(${pos}px)`;
      }
    }
    
  });

};
export default scheme;