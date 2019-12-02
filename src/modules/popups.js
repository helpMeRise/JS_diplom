const popups = () => {

  const fullList = document.querySelector(`.popup-repair-types`),
        body = document.querySelector(`body`),
        privacy = document.querySelector(`.popup-privacy`);

  body.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( target.closest(`.link-list-repair`) || target.closest(`.no-overflow`) )  {
      fullList.style.visibility = `visible`;
    } else if ( target.closest(`.close`) || !target.closest(`.popup-dialog-repair-types`) ) {
      fullList.style.visibility = `hidden`;
    }

    if ( target.closest(`.link-privacy`) ) {
      privacy.style.visibility = `visible`;
    } else if ( target.closest(`.close`) || !target.closest(`.popup-dialog-privacy`) ) {
      privacy.style.visibility = `hidden`;
    }
  });

};

export default popups;