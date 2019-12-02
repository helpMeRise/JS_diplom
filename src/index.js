'use strict';

  import 'nodelist-foreach-polyfill';
  import '@babel/polyfill';
  import 'element-closest';
  import elementClosest from 'element-closest';
  elementClosest(window);
  import 'es6-promise';
  import 'fetch-polyfill';


  import secondPhone from './modules/secondPhone';





  //Показать/скрыть второй номер
  secondPhone();