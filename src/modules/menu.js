const menu = () => {

  const menu = document.querySelector(`.popup-dialog-menu`),
        menuBtn = document.querySelector(`.menu`),
        close = document.querySelector(`.close-menu`),
        body = document.querySelector(`body`);

  body.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( target.closest(`.menu`) ) {
      menu.style.transform = `translate3d(0, 0, 0)`;
    } else if ( target.closest(`.close-menu`) || !target.closest(`.popup-dialog-menu`) ) {
      menu.style.transform = `translate3d(645px, 0, 0)`;
    }
  });

};

export default menu;