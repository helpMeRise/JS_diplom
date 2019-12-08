const faq = () => {

  const faq = document.querySelector(`#faq`),
        titleBlocks = faq.querySelectorAll(`.title_block`),
        msg = faq.querySelectorAll(`.msg`);

  msg.forEach( (item) => item.style.transition = `none` );
  
  faq.addEventListener(`click`, (event) => {
    let target = event.target;
    titleBlocks.forEach( (item, i) => {
      if ( target === item ) {
        item.classList.toggle(`msg-active`);
      } else {
        item.classList.remove(`msg-active`);
      }
    });
  });

};
export default faq;