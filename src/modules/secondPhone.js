const secondPhone = () => {

  const arrow = document.querySelector(`.header-contacts__arrow > img`),
        secondPhoneWrap = document.querySelector(`.header-contacts__phone-number-accord`),
        secondPhone = document.querySelector(`.header-contacts__phone-number-accord > a`);   

  const style = document.createElement(`style`);
  style.textContent = `
    .opacity {
      opacity: 1 !important
    }
    .top {
      top: 25px
    }
    .rotate {
      transform: rotate(180deg)
    }
  `; 
  document.head.appendChild(style);

  arrow.addEventListener(`click`, () => {    
    secondPhone.classList.toggle(`opacity`);
    secondPhoneWrap.classList.toggle(`top`);
    arrow.classList.toggle(`rotate`);
  });
};

export default secondPhone;