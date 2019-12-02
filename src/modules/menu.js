const menu = () => {

  const menu = document.querySelector(`.popup-dialog-menu`),
        body = document.querySelector(`body`),
        main = document.querySelector(`.main`),
        formula = document.querySelector(`.formula`),
        types = document.querySelector(`.repair-types`),
        portfolio = document.querySelector(`.portfolio`),
        transparency = document.querySelector(`.transparency`),
        problems = document.querySelector(`.problems`),
        designs = document.querySelector(`.designs`),
        director = document.querySelector(`.director`),
        reviews = document.querySelector(`.reviews`),
        scheme = document.querySelector(`.scheme`),
        faq = document.querySelector(`.faq`),
        partners = document.querySelector(`.partners`),
        menuList = document.querySelectorAll(`.popup-menu-nav__item`);

  body.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( target.closest(`.menu`) ) {
      menu.style.transform = `translate3d(0, 0, 0)`;
    } else if ( document.documentElement.clientWidth >= 576 && (target.closest(`.close-menu`) || 
          !target.closest(`.popup-dialog-menu`) || target.closest(`.popup-menu-nav__item`)) ) {
        menu.style.transform = `translate3d(645px, 0, 0)`;
    } else if ( document.documentElement.clientWidth < 576 && (target.closest(`.close-menu`) || 
        !target.closest(`.popup-dialog-menu`) || target.closest(`.popup-menu-nav__item`)) ) {
      menu.style.transform = `translate3d(0, -100vh, 0)`;
    }
    if ( target.closest(`.button-footer`) ) {
      event.preventDefault();
      main.scrollIntoView({behavior: 'smooth'});
    }
  });

  
    menuList.forEach( (item) => {
      switch (item.textContent) {
        case (`главная`):
          item.addEventListener(`click`, (event) => {
            event.preventDefault();
            main.scrollIntoView({behavior: 'smooth'});
          });
          break;
        case (`преимущества`):
          item.addEventListener(`click`, (event) => {
            event.preventDefault();
            formula.scrollIntoView({behavior: 'smooth'});
          });
          break;
        case (`виды ремонта`):
          item.addEventListener(`click`, (event) => {
            event.preventDefault();
            types.scrollIntoView({behavior: 'smooth'});
          });
          break;
        case (`наше портфолио`):
          item.addEventListener(`click`, (event) => {
            event.preventDefault();
            portfolio.scrollIntoView({behavior: 'smooth'});
          });
          break;
        case (`прозрачность работы`):
          item.addEventListener(`click`, (event) => {
            event.preventDefault();
            transparency.scrollIntoView({behavior: 'smooth'});
          });
          break;
        case (`решение проблем`):
          item.addEventListener(`click`, (event) => {
            event.preventDefault();
            problems.scrollIntoView({behavior: 'smooth'});
          });
          break;
        case (`дизайнерские решения`):
          item.addEventListener(`click`, (event) => {
            event.preventDefault();
            designs.scrollIntoView({behavior: 'smooth'});
          });
          break;
        case (`об основателе`):
          item.addEventListener(`click`, (event) => {
            event.preventDefault();
            director.scrollIntoView({behavior: 'smooth'});
          });
          break;
        case (`отзывы клиентов`):
          item.addEventListener(`click`, (event) => {
            event.preventDefault();
            reviews.scrollIntoView({behavior: 'smooth'});
          });
          break;  
        case (`как мы работаем`):
          item.addEventListener(`click`, (event) => {
            event.preventDefault();
            scheme.scrollIntoView({behavior: 'smooth'});
          });
          break;
        case (`часто задаваемые вопросы`):
          item.addEventListener(`click`, (event) => {
            event.preventDefault();
            faq.scrollIntoView({behavior: 'smooth'});
          });
          break; 
        case (`наши партнеры`):
          item.addEventListener(`click`, (event) => {
            event.preventDefault();
            partners.scrollIntoView({behavior: 'smooth'});
          });
          break;   
      }
    });
};

export default menu;