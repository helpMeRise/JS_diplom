const faq = () => {

  const faq = document.querySelector(`#faq`),
        titleBlocks = faq.querySelectorAll(`.title_block`),
        msg = faq.querySelectorAll(`.msg`);

  faq.addEventListener(`click`, (event) => {
    let target = event.target;
    titleBlocks.forEach( (item) => {
      if ( target === item ) {
        item.classList.toggle(`msg-active`);
      }
    });
  });

};
export default faq;