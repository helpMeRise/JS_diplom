const portfolioSlider = () => {

  const portfolio = document.querySelector(`.portfolio`),
        slide = document.querySelectorAll(`.portfolio-slider__slide`),
        right = document.querySelector(`#portfolio-arrow_right`),
        left = document.querySelector(`#portfolio-arrow_left`),
        mobileSlide = document.querySelectorAll(`.portfolio-slider__slide-frame`),
        mobileArrows = document.querySelectorAll(`.slider-arrow-tablet-mobile`),
        portfolioSliderMobile = document.querySelector(`.portfolio-slider-mobile`),
        counterTotal = document.querySelectorAll(`.slider-counter-content__total`),
        counterCurrent = document.querySelectorAll(`.slider-counter-content__current`);
        
  let step = 0;
  mobileArrows.forEach( item => item.style.zIndex = 10);
  let current = 0;
  counterTotal[1].textContent = portfolioSliderMobile.children.length;
  portfolio.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( target.closest(`#portfolio-arrow_right`) ) {
      step += slide[0].clientWidth;
        slide.forEach( item => {
          item.style.transform = `translateX(-${step}px)`;
        });
      if ( document.documentElement.clientWidth > 1024 ) {
        if ( step > 0 ) {
          left.style.display = `flex`;
        } else if ( step === 0 ) {
          left.style.display = `none`;
        }
        if ( step === 704 ) {
          right.style.display = `none`;
        } else if ( step < 704 ) {
          right.style.display = `flex`;
        }    
      } else if ( document.documentElement.clientWidth < 1024 && document.documentElement.clientWidth > 900 ) {
        if ( step > 0 ) {
          left.style.display = `flex`;
        } else if ( step === 0 ) {
          left.style.display = `none`;
        }
        if ( step === 1056 ) {
          right.style.display = `none`;
        } else if ( step < 1056 ) {
          right.style.display = `flex`;
        }
      } else if ( document.documentElement.clientWidth < 900 && document.documentElement.clientWidth > 575 ) {
        if ( step > 0 ) {
          left.style.display = `flex`;
        } else if ( step === 0 ) {
          left.style.display = `none`;
        }
        if ( step === 1408 ) {
          right.style.display = `none`;
        } else if ( step < 1408 ) {
          right.style.display = `flex`;
        }
      }   
      
    } 
    if ( target.closest(`#portfolio-arrow_left`) ) {
      step -= slide[0].clientWidth;
        slide.forEach( item => {
          item.style.transform = `translateX(-${step}px)`;
        });
        if ( document.documentElement.clientWidth > 1024 ) {
          if ( step > 0 ) {
            left.style.display = `flex`;
          } else if ( step === 0 ) {
            left.style.display = `none`;
          }
          if ( step === 704 ) {
            right.style.display = `none`;
          } else if ( step < 704 ) {
            right.style.display = `flex`;
          }    
        } else if ( document.documentElement.clientWidth < 1024 && document.documentElement.clientWidth > 900 ) {
          if ( step > 0 ) {
            left.style.display = `flex`;
          } else if ( step === 0 ) {
            left.style.display = `none`;
          }
          if ( step === 1056 ) {
            right.style.display = `none`;
          } else if ( step < 1056 ) {
            right.style.display = `flex`;
          }
        } else if ( document.documentElement.clientWidth < 900 && document.documentElement.clientWidth > 575 ) {
          if ( step > 0 ) {
            left.style.display = `flex`;
          } else if ( step === 0 ) {
            left.style.display = `none`;
          }
          if ( step === 1408 ) {
            right.style.display = `none`;
          } else if ( step < 1408 ) {
            right.style.display = `flex`;
          }
        }    
        
    }

    
    if ( target.closest(`.slider-arrow-tablet-mobile_left`) ) {
      mobileSlide.forEach( item => item.style.display = `none`);
      current--;
      if ( current < 0 ) {
        current = portfolioSliderMobile.children.length - 1;
      }
      mobileSlide[current].style.display = `flex`;
    } else if ( target.closest(`.slider-arrow-tablet-mobile_right`) ) {
      mobileSlide[current].style.display = `none`;
      current++;
      if ( current > portfolioSliderMobile.children.length - 1) {
        current = 0;
      }
      mobileSlide[current].style.display = `flex`;
    }
    counterCurrent[1].textContent = current + 1;
  });

  


};
export default portfolioSlider;