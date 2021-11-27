import { Ranger, Interval, Button, Input, Config } from './view.js'

window.onload = sliderInit ()

function sliderInit () {

  let config = new Config ()
  let runner_number = config.runner_number

  let elements = document.querySelectorAll('.zdslider');
  if ( elements.length != 0 ) {
    if ( runner_number == 2 ) {
      setStructure_twoRunners()  /* Создание структуры слайдера */

      sliderPositioning ()  /* Первоначальное размещение слайдера */
    } else if ( runner_number == 1) {
      console.log('Один ползунок')
    } else {
      console.log('Хер знает что такое ) )')
    }
    

  }

}

  
function setStructure_twoRunners () {    /* Структура слайдера */
  let elements = document.querySelectorAll('.zdslider');
  let counter = 1     /* Счётчик количества слайдеров для создания атрибутов */
  let i = 0;         /*  Счётчик цикла для опр-я номера ranger в массиве */
  for ( let elem of elements ) {
      let ranger = new Ranger();
      ranger.appendTo(elem)
      ranger.setAttribute ('id', 'r_' + counter);
      ranger.setAttribute ('data-inst', counter);
      ranger.setAttribute ('data-type', 'ranger');

      let interval = new Interval();
      let ranger_div = document.querySelectorAll('.ranger')[i]
      interval.setAttribute('id', 'int_' + counter);
      interval.setAttribute('data-inst', counter);
      interval.setAttribute('data-type', 'interval');
      interval.appendTo(ranger_div)

      let button_1 = new Button();
      let button_2 = new Button();

      button_1.setAttribute('id', 'b1_' + counter);
      button_1.setAttribute('data-type', 'btn-first');
      button_1.setAttribute('data-inst', counter);
      button_2.setAttribute('id', 'b2_' + counter);
      button_2.setAttribute('data-type', 'btn-second');
      button_2.setAttribute('data-inst', counter);

      button_1.appendTo(ranger_div);
      button_2.appendTo(ranger_div);

      let input_1 = new Input();
      let input_2 = new Input();

      input_1.setAttribute('id', 'i1_' + counter);
      input_2.setAttribute('id', 'i2_' + counter);

      input_1.appendTo(ranger_div);
      input_2.appendTo(ranger_div);

      counter ++;
      i ++;
  }
}

function sliderPositioning () {   /* Первоначальное размещение слайдера */
  let elements = document.querySelectorAll('.zdslider');
  let i = 0
  for (let elem of elements) {
    let ranger = document.querySelectorAll('.ranger')[i]
    let interval = document.querySelectorAll('.ranger__interval')[i]
    let button_1 = document.querySelectorAll('[data-type="btn-first"]')[i]
    let button_2 = document.querySelectorAll('[data-type="btn-second"]')[i]

    button_1.style.marginLeft = '0px';
    button_2.style.marginLeft = (ranger.offsetWidth-button_1.offsetWidth) + 'px';
    interval.style.width = (ranger.offsetWidth-button_1.offsetWidth) + 'px';
    i ++
  }  
}

export function getCoords(elem) {   /* Получение координат элементов слайдера */
  let coords = elem.getBoundingClientRect();
  return {
      top: coords.top,
      left: coords.left
  };
}  

export function mouseDownBtn_1 (event) {
  let sler_number = event.target.dataset.inst
  let sler = document.querySelectorAll('.ranger')[sler_number-1]
  let interval = document.querySelectorAll('.ranger__interval')[sler_number-1]     
  let btn1 = document.querySelectorAll('[data-type="btn-first"]')[sler_number-1]
  let btn2 = document.querySelectorAll('[data-type="btn-second"]')[sler_number-1]

  let sler_coords = getCoords(sler)
  let btn1_coords = getCoords(btn1)
  let btn2_coords = getCoords(btn2)
  let shiftX1 = event.pageX - btn1_coords.left;
  let shiftX2 = event.pageX - btn2_coords.left;

  document.onmousemove = function (event) {
      let left1 = event.pageX - shiftX1 - sler_coords.left;
      let right1 = sler.offsetWidth - btn1.offsetWidth;
      if (left1 < 0) left1 = 0;                                 
      if (left1 > right1) left1 = right1;         
      btn1.style.marginLeft = left1 + 'px'

      shiftX2 = event.pageX - btn2_coords.left; 
      let left2 = event.pageX - shiftX2 - sler_coords.left;
      let right2 = sler.offsetWidth - btn2.offsetWidth;
      if (left2 < 0) left2 = 0;
      if (left2 > right2) left2 = right2;            
       
      let per_min = 0;
      let per_max = 0;

      if (left1 > left2)
      {
        interval.style.width = (left1-left2) + 'px';
        interval.style.marginLeft = left2 + 'px';
         
        per_min = left2*100/(sler.offsetWidth-btn1.offsetWidth);
        per_max = left1*100/(sler.offsetWidth-btn1.offsetWidth);
      }
      else
      {
        interval.style.width = (left2-left1) + 'px';
        interval.style.marginLeft = left1 + 'px';                
        
        per_min = left1*100/(sler.offsetWidth-btn1.offsetWidth);
        per_max = left2*100/(sler.offsetWidth-btn1.offsetWidth);
      }
      //   inpt1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
      //   inpt2.value= (parseInt(min)+Math.round((max-min)*per_max/100)); 
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };
}

export function mouseDownBtn_2 (event) {
  let sler_number = event.target.dataset.inst
  let sler = document.querySelectorAll('.ranger')[sler_number-1]
  let interval = document.querySelectorAll('.ranger__interval')[sler_number-1]     
  let btn1 = document.querySelectorAll('[data-type="btn-first"]')[sler_number-1]
  let btn2 = document.querySelectorAll('[data-type="btn-second"]')[sler_number-1]

  let sler_coords = getCoords(sler)
  let btn1_coords = getCoords(btn1)
  let btn2_coords = getCoords(btn2)
  let shiftX1 = event.pageX - btn1_coords.left;
  let shiftX2 = event.pageX - btn2_coords.left;

  document.onmousemove = function (event) {
      let left2 = event.pageX - shiftX2 - sler_coords.left;
      let right2 = sler.offsetWidth - btn2.offsetWidth;
      if (left2 < 0) left2 = 0;                                 
      if (left2 > right2) left2 = right2;         
      btn2.style.marginLeft = left2 + 'px'

      shiftX1 = event.pageX - btn1_coords.left; 
      let left1 = event.pageX - shiftX1 - sler_coords.left;
      let right1 = sler.offsetWidth - btn1.offsetWidth;
      if (left1 < 0) left1 = 0;
      if (left1 > right1) left1 = right1;            
       
      let per_min = 0;
      let per_max = 0;

      if (left1 > left2)
      {
        interval.style.width = (left1-left2) + 'px';
        interval.style.marginLeft = left2 + 'px';       
        per_min = left2*100/(sler.offsetWidth-btn1.offsetWidth);
        per_max = left1*100/(sler.offsetWidth-btn1.offsetWidth);
      }
      else
      {
        interval.style.width = (left2-left1) + 'px';
        interval.style.marginLeft = left1 + 'px';                
        per_min = left1*100/(sler.offsetWidth-btn1.offsetWidth);
        per_max = left2*100/(sler.offsetWidth-btn1.offsetWidth);
      }
      //   inpt1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
      //   inpt2.value= (parseInt(min)+Math.round((max-min)*per_max/100)); 
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };
}


