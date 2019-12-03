const formulaPopup = () => {

  const body = document.querySelector(`body`),
        formulaItem = document.querySelectorAll(`.formula-item__icon`),
        formulaPopup = document.querySelectorAll(`.formula-item-popup`),
        formulaInner = document.querySelectorAll(`.formula-item__icon-inner`);


  formulaItem.forEach( (item) => {
    item.addEventListener(`mouseover`, (event) => {
      let target = event.target;
      item.children[1].style.opacity = 1;
      if ( (item.children[0].clientHeight > item.getBoundingClientRect().top) ) {
        item.children[0].style.transform = `rotate(180deg) translate3d(0, -180%, 0)`;
        item.children[0].innerHTML = `<div style="transform: rotate(180deg)">${item.children[0].innerHTML}</div>`;
        item.parentNode.style.zIndex = 1;
      } else if ( (item.children[0].clientHeight < item.getBoundingClientRect().top) ) {
        item.children[0].style.transform = `translate3d(0, 5px, 0)`;
        item.children[0].innerHTML = `<div style="transform: rotate(0deg)">${item.children[0].innerHTML}</div>`;
        item.parentNode.style.zIndex = 1;
      }
      item.children[0].style.visibility = `visible`;
      item.children[0].style.opacity = 1;
    });
    item.addEventListener(`mouseout`, (event) => {
      let target = event.target;
      item.children[1].style.opacity = 0;
      item.children[0].style.visibility = `hidden`;
      item.children[0].style.opacity = 0;
      item.parentNode.style.zIndex = 0;
      if ( (item.children[0].clientHeight > item.getBoundingClientRect().top) ) {
        item.children[0].innerHTML = `<div style="transform: rotate(180deg)">${item.children[0].innerHTML}</div>`;
      } else if ( (item.children[0].clientHeight < item.getBoundingClientRect().top) ) {
        item.children[0].innerHTML = `<div style="transform: rotate(0deg)">${item.children[0].innerHTML}</div>`;
      }
    }); 
  });

};

export default formulaPopup;