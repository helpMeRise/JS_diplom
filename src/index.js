'use strict';

import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import 'element-closest';
import elementClosest from 'element-closest';
elementClosest(window);
import 'es6-promise';
import 'fetch-polyfill';


import secondPhone from './modules/secondPhone';
import menu from './modules/menu';
import popups from './modules/popups';
import maskPhone from './modules/maskPhone';
import formulaPopup from './modules/formulaPopup';
import repairTypesSlider from './modules/repairTypesSlider';
import portfolioSlider from './modules/portfolioSlider';
import portfolioPopup from './modules/portfolioPopup';
import transparencySlider from './modules/transparencySlider';
import transparencyPopup from './modules/transparencyPopup';
import problems from './modules/poblems';
import designs from './modules/designs';
import advise from './modules/advise';
import repairTypesPopup from './modules/repairTypesPopup';
import reviews from './modules/reviews';
import scheme from './modules/scheme';
import faq from './modules/faq';




//Показать/скрыть второй номер
secondPhone();
//Меню
menu();
//Вспливающие окна
popups();
//Маска телефона
maskPhone(`#feedback-input1`);
maskPhone(`#feedback-input2`);
maskPhone(`#feedback-input3`);
maskPhone(`#feedback-input4`);
maskPhone(`#feedback-input5`);
maskPhone(`#feedback-input6`);
//Подсказки в секции преимущества
formulaPopup();
//Слайдер в секции виды ремонта
repairTypesSlider();
//Слайдер в секции портфолио
portfolioSlider();
//Всплывающее окно секции портфолио
portfolioPopup();
//Слайдер в секции "прозрачно"
transparencySlider();
//Всплывающее окно в секции "прозрачно"
transparencyPopup();
//Секция с решаемыми проблемами
problems();
//Секция дизайна
designs();
//Модалка консультации
advise();
//Модалка видов ремонта
repairTypesPopup();
//Отзывы
reviews();
//Как мы работаем
scheme();
//FAQ
faq();