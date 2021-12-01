import { Ranger, Interval, Button, Config, Scale } from './view.js'
let config = new Config()
window.onload = sliderInit ()

function sliderInit () {

  let runner_number = config.runner_number


  let elements = document.querySelectorAll('.zdslider');
  if ( elements.length != 0 ) {

    setStructure( runner_number )  /* Создание структуры слайдера */

    sliderPositioning ( runner_number )  /* Первоначальное размещение слайдера */

  }

  let number_of_inputs = document.querySelectorAll('.zdslider-wrapper')
  for (let elem of number_of_inputs) {

    elem.addEventListener('click', inputListener)
  }

}

  
function setStructure (runners) {    /* Структура слайдера */
  let elements = document.querySelectorAll('.zdslider');
  let counter = 1     /* Счётчик количества слайдеров для создания атрибутов */
  let i = 0;         /*  Счётчик цикла для опр-я номера ranger в массиве */
  
  for ( let elem of elements ) {
      let ranger = new Ranger();
      ranger.appendTo(elem)
      ranger.setAttribute ('data-inst', counter);

      let interval = new Interval();
      let ranger_div = document.querySelectorAll('.ranger')[i]
      interval.setAttribute('data-inst', counter);
      interval.appendTo(ranger_div)

      if ( runners == 2 ) {
        let button_1 = new Button();
        let button_2 = new Button();
        button_1.setAttribute('data-type', 'btn-first');
        button_1.setAttribute('data-inst', counter);
        button_2.setAttribute('data-type', 'btn-second');
        button_2.setAttribute('data-inst', counter);
        button_1.appendTo(ranger_div);
        button_2.appendTo(ranger_div);
      } else {
        let button_1 = new Button();
        button_1.setAttribute('data-type', 'btn-first');
        button_1.setAttribute('data-inst', counter);
        button_1.appendTo(ranger_div);
      }

      let scale = new Scale ();
      // for (j = 0; j < 10; j ++) {
      //   let span = document.createElement ('span')
      //   span.classList.add ('ranger__scale-span')
      //   span.innerHTML = j
      //   scale.appendChild (span)        
      // }
      scale.appendTo (elem);
      counter ++;
      i ++;
  }
}

function sliderPositioning (runners) {   /* Первоначальное размещение слайдера */
  let elements = document.querySelectorAll('.zdslider');
  let i = 0
  for (let elem of elements) {
    let ranger = document.querySelectorAll('.ranger')[i]
    let interval = document.querySelectorAll('.ranger__interval')[i]
    let button_1 = document.querySelectorAll('[data-type="btn-first"]')[i] 
    interval.style.width = (ranger.offsetWidth) + 'px';     
    if ( runners == 1 ) {
      button_1.style.marginLeft = (ranger.offsetWidth-button_1.offsetWidth) +  'px';
    } 
    if ( runners == 2 ) {
      button_1.style.marginLeft = '0px';
      let button_2 = document.querySelectorAll('[data-type="btn-second"]')[i]
      button_2.style.marginLeft = (ranger.offsetWidth-button_1.offsetWidth) + 'px';   
    }
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
  let runner_number = config.runner_number
  let step = config.step
  if ( runner_number == 1 ) {
    console.log('один')
    mouseDownBtn_1_Single (event, step)
    
  } else if ( runner_number == 2 ) {
    console.log('два')
    mouseDownBtn_1_Double (event)
  }
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
       
      if (left1 > left2)
      {
        interval.style.width = (left1-left2) + 'px';
        interval.style.marginLeft = left2 + 'px';       

      }
      else
      {
        interval.style.width = (left2-left1) + 'px';
        interval.style.marginLeft = left1 + 'px';                

      }

  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };
}

function mouseDownBtn_1_Single (event) {
  let sler_number = event.target.dataset.inst
  let sler = document.querySelectorAll('.ranger')[sler_number-1]
  let interval = document.querySelectorAll('.ranger__interval')[sler_number-1]     
  let btn1 = document.querySelectorAll('[data-type="btn-first"]')[sler_number-1]

  let sler_coords = getCoords(sler)
  let btn1_coords = getCoords(btn1)
  let shiftX1 = event.pageX - btn1_coords.left; /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */
                                                /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка 20 */
  document.onmousemove = function (event) {
      let left1 = event.pageX - shiftX1 - sler_coords.left;
      let right1 = sler.offsetWidth - btn1.offsetWidth;
      if (left1 < 0) left1 = 0;                                 
      if (left1 > right1) left1 = right1;         
      btn1.style.marginLeft = left1 + 'px'
      interval.style.width = left1 + 'px'
      // console.log('let left1 (', left1,') = ', event.pageX, ' - ', shiftX1, ' - ', sler_coords.left)           
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };  
}

function mouseDownBtn_1_Double (event) {
  let sler_number = event.target.dataset.inst
  let sler = document.querySelectorAll('.ranger')[sler_number-1]
  let interval = document.querySelectorAll('.ranger__interval')[sler_number-1]     
  let btn1 = document.querySelectorAll('[data-type="btn-first"]')[sler_number-1]
  let btn2 = document.querySelectorAll('[data-type="btn-second"]')[sler_number-1]

  let sler_coords = getCoords(sler)
  let btn1_coords = getCoords(btn1)
  let btn2_coords = getCoords(btn2)
  let shiftX1 = event.pageX - btn1_coords.left; /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */
                                                /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка 20 */
  let shiftX2 = event.pageX - btn2_coords.left;

  document.onmousemove = function (event) {
      let left1 = event.pageX - shiftX1 - sler_coords.left;
      let right1 = sler.offsetWidth - btn1.offsetWidth;
      if (left1 < 0) left1 = 0;                                 
      if (left1 > right1) left1 = right1;         
      btn1.style.marginLeft = left1 + 'px'
      // console.log('let left1 (', left1,') = ', event.pageX, ' - ', shiftX1, ' - ', sler_coords.left)           

      shiftX2 = event.pageX - btn2_coords.left; 
      let left2 = event.pageX - shiftX2 - sler_coords.left;
      let right2 = sler.offsetWidth - btn2.offsetWidth;
      if (left2 < 0) left2 = 0;
      if (left2 > right2) left2 = right2; 
       
      if (left1 > left2)
      {
        interval.style.width = (left1-left2) + 'px';
        interval.style.marginLeft = left2 + 'px';

      }
      else
      {
        interval.style.width = (left2-left1) + 'px';
        interval.style.marginLeft = left1 + 'px';                

      }
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };  
}

function inputListener (event) {
  let {run} = event.target.dataset 
  let {inst} = event.target.dataset
  if ( run && event.target.checked) {
    event.target.parentNode.parentNode.childNodes[1].firstChild.remove()
    event.target.parentNode.parentNode.childNodes[1].firstChild.remove()
    config.runner_number = 1

    let zdslider = document.querySelectorAll('.zdslider')[inst-1]
    let ranger = new Ranger();
    ranger.appendTo(zdslider)
    ranger.setAttribute ('data-inst', inst);
    let ranger_div = document.querySelectorAll('.ranger')[inst-1]

    let interval = new Interval();
    interval.setAttribute('data-inst', inst);
    interval.appendTo(ranger_div)

    let button_1 = new Button();
    button_1.setAttribute('data-type', 'btn-first');
    button_1.setAttribute('data-inst', inst);
    button_1.appendTo(ranger_div);

    let scale = new Scale()
    scale.appendTo (zdslider)    

    let interval_div = document.querySelectorAll('.ranger__interval')[inst-1]
    let button_1_div = document.querySelectorAll('[data-type="btn-first"]')[inst-1] 
    interval_div.style.width = (ranger_div.offsetWidth) + 'px';
    button_1_div.style.marginLeft = (ranger_div.offsetWidth-button_1_div.offsetWidth) +  'px';
    console.log(ranger_div)
  }
}


