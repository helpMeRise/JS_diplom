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
//Подсказки в секции преимущества
formulaPopup();