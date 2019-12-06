const problems = () => {

  const problemsItem = document.querySelectorAll(`.problems-item__icon`);

  const style = document.createElement(`style`);
  style.textContent = `
    .problems-item-popup::before {
      transform: rotate(180deg);
    }
  `;
  const style2 = document.createElement(`style`);
  style2.textContent = `
    .problems-item-popup::before {
      transform: rotate(0deg);
    }
  `;
    

  problemsItem.forEach( (item, i) => {
    item.addEventListener(`mouseover`, (event) => {
      item.children[1].style.opacity = 1;
      if ( i === 0 ) {
        if ( (item.children[0].clientHeight < item.getBoundingClientRect().bottom) ) {
          item.children[0].style.transform = `translate3d(0, -150%, 0)`;
          document.head.appendChild(style2);
          item.parentNode.style.zIndex = 1;
        } else if ( (item.children[0].clientHeight > item.getBoundingClientRect().bottom) ) {
          item.children[0].style.transform = `translate3d(0, 5px, 0)`;
          item.parentNode.style.zIndex = 1;
        }
        item.children[0].style.visibility = `visible`;
        item.children[0].style.opacity = 1;
      } else {
        if ( (item.children[0].clientHeight > item.getBoundingClientRect().top) ) {
          item.children[0].style.transform = `translate3d(0, 150%, 0)`;
          document.head.appendChild(style);
          item.parentNode.style.zIndex = 1;
        } else if ( (item.children[0].clientHeight < item.getBoundingClientRect().top) ) {
            item.children[0].style.transform = `translate3d(0, 5px, 0)`;
            item.parentNode.style.zIndex = 1;
        } 
        item.children[0].style.visibility = `visible`;
        item.children[0].style.opacity = 1;
      }
      
    });
    item.addEventListener(`mouseout`, (event) => {
      item.children[1].style.opacity = 0;
      item.children[0].style.visibility = `hidden`;
      item.children[0].style.opacity = 0;
      item.parentNode.style.zIndex = 0;
      if ( style.parentNode === document.head ) {
        style.parentNode.removeChild(style);
      }
      if ( style2.parentNode === document.head ) {
        style2.parentNode.removeChild(style2);
      }
    }); 
  });

};
export default problems;