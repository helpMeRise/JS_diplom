const designs = () => {

  const design = document.querySelector(`.designs`),
        navD = design.querySelector(`.nav-designs`),
        tabsWrap = design.querySelector(`.nav-wrap`),
        tabs = design.querySelectorAll(`.designs-nav__item_base`),
        sliderBig = design.querySelector(`.designs-slider`),
        sliderWrap = design.querySelector(`.designs-slider-wrap`),
        countTotal = sliderWrap.querySelector(`.slider-counter-content__total`),
        countCurrent = sliderWrap.querySelector(`.slider-counter-content__current`),
        preview = design.querySelectorAll(`.preview-block`),
        visible = design.querySelector(`.visible`),
        previewItems = visible.querySelectorAll(`.preview-block__item`),
        tabsRow = document.querySelector(`#designs-list`),
        popup = document.querySelector(`.popup-design`),
        navP = popup.querySelector(`.nav-popup`),
        tabsP = popup.querySelectorAll(`.designs-nav__item_popup`),
        sliderP = popup.querySelector(`.popup-design-slider`),
        countTotalP = popup.querySelector(`.slider-counter-content__total`),
        countCurrentP = popup.querySelector(`.slider-counter-content__current`),
        tabsRowP = popup.querySelector(`#nav-list-popup-designs`),
        tabsWrapP = popup.querySelector(`.nav-wrap`);
        
  let currentSlider = 0;
  let current = 0;
  //Табы
  navD.addEventListener(`click`, (event) => {
    let target = event.target;
    tabs.forEach( (item, i) => {
      if ( target === item ) {
        item.classList.add(`active`);
        sliderBig.children[i].style.display = `block`;
        preview[i].classList.add(`visible`);
        countTotal.textContent = sliderBig.children[i].children.length;
        currentSlider = i;
      } else {
        item.classList.remove(`active`);
        sliderBig.children[i].style.display = `none`;
        preview[i].classList.remove(`visible`);
        current = 0;
      }
    });
  });


  //Пагинация
  preview.forEach( (item) => {
    item.addEventListener(`click`, (event) => {
      let target = event.target;
      for ( let i = 0; i < item.children.length; i++ ) {
        if ( target.parentNode === item.children[i] ) {
          sliderBig.children[currentSlider].children[i].style.display = `block`;
          item.children[i].children[0].classList.add(`preview_active`);
        } else {
          sliderBig.children[currentSlider].children[i].style.display = `none`;
          item.children[i].children[0].classList.remove(`preview_active`);
        }
      }
    });
  });

  //Слайдер на экранах поменьше
  design.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( target.closest(`.slider-arrow-tablet-mobile_left`) ) {
      sliderBig.children[currentSlider].children[current].style.display = `none`;
      current--;
      if ( current < 0 ) {
        current = sliderBig.children[currentSlider].children.length - 1;
      }
      sliderBig.children[currentSlider].children[current].style.display = `block`;
    } else if ( target.closest(`.slider-arrow-tablet-mobile_right`) ) {
      sliderBig.children[currentSlider].children[current].style.display = `none`;
      current++;
      if ( current > sliderBig.children[currentSlider].children.length - 1 ) {
        current = 0;
      }
      sliderBig.children[currentSlider].children[current].style.display = `block`;
    }
    countCurrent.textContent = current + 1;
  });

  //Перелистывание табов при адаптиве
  let pos = 0;
  tabsWrap.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( document.documentElement.clientWidth > 1024 ) {
      if ( target.closest(`#nav-arrow-designs_left`) && pos < 100 && pos !== 0) {
        pos += 100;
        tabsRow.style.transform = `translateX(${pos}px)`;
      } else if ( target.closest(`#nav-arrow-designs_right`) && pos > -100 ) {
        pos -= 100;
        tabsRow.style.transform = `translateX(${pos}px)`;
      }
    } else if ( document.documentElement.clientWidth > 768 ) {
      if ( target.closest(`#nav-arrow-designs_left`) && pos < 400 && pos !== 0) {
        pos += 200;
        tabsRow.style.transform = `translateX(${pos}px)`;
      } else if ( target.closest(`#nav-arrow-designs_right`) && pos > -400 ) {
        pos -= 200;
        tabsRow.style.transform = `translateX(${pos}px)`;
      } 
    } else if ( document.documentElement.clientWidth > 572 ) {
      if ( target.closest(`#nav-arrow-designs_left`) && pos < 600 && pos !== 0) {
        pos += 300;
        tabsRow.style.transform = `translateX(${pos}px)`;
      } else if ( target.closest(`#nav-arrow-designs_right`) && pos > -600 ) {
        pos -= 300;
        tabsRow.style.transform = `translateX(${pos}px)`;
      }
    } else if ( document.documentElement.clientWidth < 572 ) {
      if ( target.closest(`#nav-arrow-designs_left`) && pos < 700 && pos !== 0) {
        pos += 170;
        tabsRow.style.transform = `translateX(${pos}px)`;
      } else if ( target.closest(`#nav-arrow-designs_right`) && pos > -700 ) {
        pos -= 170;
        tabsRow.style.transform = `translateX(${pos}px)`;
      }
    }
    
  });
  countCurrent.textContent = current + 1;

  
  design.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( target.parentNode.classList.contains(`link-list-designs`) ) {
      popup.style.visibility = `visible`;
      countTotalP.textContent = sliderP.children[0].children.length;
      for ( let j = 0; j < sliderP.children.length; j++ ) {
        sliderP.children[j].style.display = `none`;
      }
      sliderP.children[0].style.display = `block`;
      for ( let i = 0; i < sliderP.children[0].children.length; i++ ) {
        sliderP.children[0].children[i].style.display = `none`;
      }
      sliderP.children[0].children[0].style.display = `block`;
    }
  });

  navP.addEventListener(`click`, (event) => {
    let target = event.target;
    tabsP.forEach( (item, i) => {
      if ( target === item ) {
        item.classList.add(`active`);
        sliderP.children[i].style.display = `block`;
        countTotalP.textContent = sliderP.children[i].children.length;
        currentSlider = i;
        for ( let j = 0; j < sliderP.children.length; j++ ) {
          sliderP.children[j].style.display = `none`;
        }
        sliderP.children[0].style.display = `block`;
        for ( let i = 0; i < sliderP.children[0].children.length; i++ ) {
          sliderP.children[0].children[i].style.display = `none`;
        }
        sliderP.children[0].children[0].style.display = `block`;
      } else {
        item.classList.remove(`active`);
        sliderP.children[i].style.display = `none`;
        current = 0;
      }
    });
  });

  popup.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( target.closest(`#popup_design_left`) ) {
      sliderP.children[currentSlider].children[current].style.display = `none`;
      current--;
      if ( current < 0 ) {
        current = sliderP.children[currentSlider].children.length - 1;
      }
      sliderP.children[currentSlider].children[current].style.display = `block`;
    } else if ( target.closest(`#popup_design_right`) ) {
      sliderP.children[currentSlider].children[current].style.display = `none`;
      current++;
      if ( current > sliderP.children[currentSlider].children.length - 1 ) {
        current = 0;
      }
      sliderP.children[currentSlider].children[current].style.display = `block`;
    }
    countCurrentP.textContent = current + 1;


    if ( target.closest(`.close`) || !target.closest(`.popup-dialog-design`) ) {
      popup.style.visibility = `hidden`;
    }
  });

  tabsWrapP.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( document.documentElement.clientWidth > 1024 ) {
      if ( target.closest(`#nav-popup-arrow-designs_left`) && pos < 100 && pos !== 0) {
        pos += 100;
        tabsRowP.style.transform = `translateX(${pos}px)`;
      } else if ( target.closest(`#nav-popup-arrow-designs_right`) && pos > -100 ) {
        pos -= 100;
        tabsRowP.style.transform = `translateX(${pos}px)`;
      }
    } else if ( document.documentElement.clientWidth > 768 ) {
      if ( target.closest(`#nav-arrow-popup-designs_left`) && pos < 400 && pos !== 0) {
        pos += 200;
        tabsRowP.style.transform = `translateX(${pos}px)`;
      } else if ( target.closest(`#nav-arrow-popup-designs_right`) && pos > -400 ) {
        pos -= 200;
        tabsRowP.style.transform = `translateX(${pos}px)`;
      } 
    } else if ( document.documentElement.clientWidth > 572 ) {
      if ( target.closest(`#nav-arrow-popup-designs_left`) && pos < 600 && pos !== 0) {
        pos += 300;
        tabsRowP.style.transform = `translateX(${pos}px)`;
      } else if ( target.closest(`#nav-arrow-popup-designs_right`) && pos > -600 ) {
        pos -= 300;
        tabsRowP.style.transform = `translateX(${pos}px)`;
      }
    } else if ( document.documentElement.clientWidth < 572 ) {
      if ( target.closest(`#nav-arrow-popup-designs_left`) && pos < 700 && pos !== 0) {
        pos += 170;
        tabsRowP.style.transform = `translateX(${pos}px)`;
      } else if ( target.closest(`#nav-arrow-popup-designs_right`) && pos > -700 ) {
        pos -= 170;
        tabsRowP.style.transform = `translateX(${pos}px)`;
      }
    }
    
  });

  

};
export default designs;