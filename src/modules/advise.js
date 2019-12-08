const advise = () => {

  const popup = document.querySelector(`.popup-consultation`);

  document.body.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( target.closest(`.button_wide`) ) {
      popup.style.visibility = `visible`;
    } else if ( target.closest(`.close-consultation`) || !target.closest(`.feedback-wrap`) ) {
      popup.style.visibility = `hidden`;
    }
    
  });

};
export default advise;