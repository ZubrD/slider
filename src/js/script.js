import { Ranger, Interval, Button, Input } from './view.js'

window.onload = sliderInit ()

function sliderInit () {
  let elements = document.querySelectorAll('.zdslider');
  if ( elements.length != 0 ) {
    
    setStructure()  /* Создание структуры слайдера */

    sliderPositioning ()  /* Первоначальное размещение слайдера */
  }
}

  
function setStructure () {    /* Структура слайдера */
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




// document.onmousedown = function (event) {
//   let coords = getCoords(event.target)
//   console.log(coords)
// }


export function getCoords(elem) {
  let coords = elem.getBoundingClientRect();
  return {
      top: coords.top,
      left: coords.left
  };
}  