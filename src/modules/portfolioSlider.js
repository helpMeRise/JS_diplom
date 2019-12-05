const portfolioSlider = () => {

  const portfolio = document.querySelector(`.portfolio`),
        slide = document.querySelectorAll(`.portfolio-slider__slide`),
        right = document.querySelector(`#portfolio-arrow_right`),
        left = document.querySelector(`#portfolio-arrow_left`);
        
  let step = 0;
  
  
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
  });


};
export default portfolioSlider;