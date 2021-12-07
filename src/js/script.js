import { Ranger, Interval, Button, Config, Scale } from './view.js'

window.onload = sliderInit ()

function sliderInit () {
  let config = new Config()
  let runner_number = config.runner_number
  let min = config.min
  let max = config.max
  let step = config.step

  let scale_arrs = makeScale (min, max, step)
  let scale_arr = scale_arrs [ 0 ]        /* Массив значений шкалы */
  let iteration = scale_arrs [ 1 ]
  let iterations_arr = scale_arrs [ 2 ]
   
  let elements = document.querySelectorAll('.zdslider');
  if ( elements.length != 0 ) {

    setStructure ( runner_number, min, max, scale_arr, iteration, iterations_arr )  /* Создание структуры слайдера */

    sliderPositioning ( runner_number )  /* Первоначальное размещение слайдера */

  }

  let number_of_inputs = document.querySelectorAll('.zdslider-wrapper')
  for (let elem of number_of_inputs) {

    elem.addEventListener('click', checkRunnersListener)
  }

}

  
function setStructure (runners, min, max, scale_arr, iteration, iterations_arr) {    /* Структура слайдера */
  let elements = document.querySelectorAll('.zdslider');
  let counter = 1     /* Счётчик количества слайдеров для создания атрибутов */
  let i = 0;         /*  Счётчик цикла для опр-я номера ranger в массиве */
  
  for ( let elem of elements ) {
      let ranger = new Ranger();
      ranger.appendTo(elem)
      ranger.setAttribute ('data-inst', counter);
      ranger.setAttribute ('data-runners', runners);

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
      scale.setAttribute ( 'data-inst', counter )
      scale.setAttribute ( 'data-min', scale_arr [0] )
      scale.setAttribute ( 'data-max', scale_arr [ scale_arr.length - 1 ] )
      scale.setAttribute ( 'data-scale', scale_arr )  /* Не пригодилось, может удалить */
      for ( let el of scale_arr ) {
        let span = document.createElement ( 'span' )
        span.classList.add ( 'ranger__scale-span' )
        span.innerHTML = el
        scale.appendChild ( span )
      }
      scale.appendTo ( elem );
      

      let conf_input_min = document.querySelectorAll('.zdslider-config__min')[i]
      conf_input_min.setAttribute ( 'data-min', min )   
      conf_input_min.setAttribute ( 'data-max', max )   
      
      conf_input_min.value = min 
      conf_input_min.addEventListener ( 'change', changeMinListener )

      let conf_input_max = document.querySelectorAll('.zdslider-config__max')[i]
      conf_input_max.setAttribute ( 'data-min', min )   
      conf_input_max.setAttribute ( 'data-max', max )   
      
      conf_input_max.value = max 
      conf_input_max.addEventListener ( 'change', changeMaxListener )
      
      let conf_input_step = document.querySelectorAll('.zdslider-config__step')[i]
      conf_input_step.setAttribute ('data-steps', iterations_arr)
      conf_input_step.setAttribute ('data-iteration', iteration)
      conf_input_step.setAttribute ('data-current', iteration)
      
      if ( iterations_arr.length != 0 ) {
        conf_input_step.setAttribute ('max', iterations_arr[0])
        conf_input_step.setAttribute ('min', iterations_arr[iterations_arr.length - 1])
      } else {    
        conf_input_step.disabled = true
      }

      conf_input_step.value = conf_input_step.dataset.iteration

      conf_input_step.addEventListener('input', changeStepListener)

      counter ++;
      i ++;
  }
  // console.log(document.querySelectorAll('.ranger__scale')[1].dataset.scale)
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
  let runner_number = event.target.parentNode.dataset.runners
  if ( runner_number == 1 ) {
    mouseDownBtn_1_Single (event)
  } else if ( runner_number == 2 ) {
    mouseDownBtn_1_Double (event)
  }
}

export function mouseDownBtn_2 (event) {
  let sler_number = event.target.dataset.inst
  let sler = document.querySelectorAll('.ranger')[sler_number-1]
  let interval = sler.querySelector('.ranger__interval')     
  let btn1 = sler.querySelector('[data-type="btn-first"]')
  let btn2 = sler.querySelector('[data-type="btn-second"]')

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
  let interval = sler.querySelector('.ranger__interval')     
  let btn1 = sler.querySelector('[data-type="btn-first"]')

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
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };  
}

function mouseDownBtn_1_Double (event) {
  let sler_number = event.target.dataset.inst
  let sler = document.querySelectorAll('.ranger')[sler_number-1]
  let interval = sler.querySelector('.ranger__interval')     
  let btn1 = sler.querySelector('[data-type="btn-first"]')
  let btn2 = sler.querySelector('[data-type="btn-second"]')

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

function checkRunnersListener (event) {    /* Переключение количества ползунков через панель */
  let { run } = event.target.dataset 
  let { inst } = event.target.dataset

  if ( run && event.target.checked) {
    event.target.parentNode.parentNode.childNodes[1].firstChild.remove()

    let zdslider = document.querySelectorAll('.zdslider')[inst-1]
    let scale_div = document.querySelectorAll('.ranger__scale')[inst-1]
    let ranger = new Ranger();
    ranger.appendTo(zdslider)
    ranger.setAttribute ('data-inst', inst);
    ranger.setAttribute ('data-runners', 1);
    let ranger_div = zdslider.querySelector('.ranger')
    zdslider.insertBefore(ranger_div, scale_div)

    let interval = new Interval();
    interval.setAttribute('data-inst', inst);
    interval.appendTo(ranger_div)

    let button_1 = new Button();
    button_1.setAttribute('data-type', 'btn-first');
    button_1.setAttribute('data-inst', inst);
    button_1.appendTo(ranger_div);

    let interval_div = ranger_div.querySelector('.ranger__interval')
    let button_1_div = ranger_div.querySelector('[data-type="btn-first"]') 
    interval_div.style.width = (ranger_div.offsetWidth) + 'px';
    button_1_div.style.marginLeft = (ranger_div.offsetWidth-button_1_div.offsetWidth) +  'px';

  } else if ( run && (!event.target.checked)) {

    event.target.parentNode.parentNode.childNodes[1].firstChild.remove()

    let zdslider = document.querySelectorAll('.zdslider')[inst-1]
    let scale_div = document.querySelectorAll('.ranger__scale')[inst-1]
    let ranger = new Ranger();
    ranger.appendTo(zdslider)
    ranger.setAttribute ('data-inst', inst);
    ranger.setAttribute ('data-runners', 2);
    let ranger_div = zdslider.querySelector('.ranger')
    zdslider.insertBefore(ranger_div, scale_div)

    let interval = new Interval();
    interval.setAttribute('data-inst', inst);
    interval.appendTo(ranger_div)

    let button_1 = new Button();
    let button_2 = new Button();
    button_1.setAttribute('data-type', 'btn-first');
    button_1.setAttribute('data-inst', inst);
    button_1.appendTo(ranger_div);
    button_2.setAttribute('data-type', 'btn-second');
    button_2.setAttribute('data-inst', inst);
    button_2.appendTo(ranger_div);

    let interval_div = ranger_div.querySelector('.ranger__interval')
    let button_1_div = ranger_div.querySelector('[data-type="btn-first"]') 
    let button_2_div = ranger_div.querySelector('[data-type="btn-second"]') 
    interval_div.style.width = (ranger_div.offsetWidth) + 'px';  
    button_1_div.style.marginLeft = '0px';
    button_2_div.style.marginLeft = (ranger_div.offsetWidth-button_1_div.offsetWidth) + 'px';     
  }
}

function makeScale (min, max, step) {     /* Массив значений для шкалы по умолчанию */
  let step_arr = []
  let dividers_arr = []
  let iteration_arr = []  /* Массив размера шага */
  let iter = 0            /* Член масива размеров шага */
  let maximus = 0
  let iteration = 0
  let item = 0
  if ( step > 0) {
    let range = max - min
    for ( let i = 2; i < range/2 + 1; i ++){   /* Получаю массив делителей без остатка */
      if ( range % i ) {
       
      } else {
        dividers_arr.push(i)
      }
    }
    // console.log('dividers_arr: ', dividers_arr)
    if (dividers_arr.length > 0) {
      for ( let el of dividers_arr) { /* Определяю наибольшее количество интервалов меньше 10 */
        if ( el < 10) {
          maximus = el
          iter = range / maximus
          iteration_arr.push(iter)    /* Массив размеров шага шкалы */
        } else {
          break
        }
      }
    } else {
      step_arr = [min, max]
      return [step_arr, iteration, iteration_arr]
    }
    // console.log('maximus: ', maximus)
    iteration = range / maximus
    // console.log('iteration: ', iteration)
    // console.log('iteration_arr: ', iteration_arr)
    item = min
    step_arr.push(min)
    for ( let i = 0; i < maximus; i ++) {   /* Массив значений шкалы */
      item = item + iteration
      step_arr.push(item)
    }
  } else {
    step_arr = [min, max]
  }
  return [step_arr, iteration, iteration_arr]
}


function changeMinListener ( event ) {
   let min = Number ( event.target.value )
   let max_input = event.target.parentNode.querySelector('.zdslider-config__max')
   let max = Number ( max_input.value )
   let step = 1                                   /* Указал произвольный шаг */
   let new_scale_arr = makeScale ( min, max, step )
   let current_inst = event.target.parentNode.dataset.inst
   max_input.setAttribute('min', min)           /* Ограничитель, чтобы max не превышал min */
   reScale ( new_scale_arr, current_inst )      /* Перестроение шкалы по новому значению min */
}

function changeMaxListener ( event ) {
   let min_input = event.target.parentNode.querySelector('.zdslider-config__min')
   let min = Number ( min_input.value )
   let max = Number ( event.target.value )
   let step = 1                                   /* Указал произвольный шаг */
   let new_scale_arr = makeScale ( min, max, step )
   let current_inst = event.target.parentNode.dataset.inst
   min_input.setAttribute('max', max)     /* Ограничитель, чтобы min не превышал max */
   reScale ( new_scale_arr, current_inst )      /* Перестроение шкалы по новому значению min */
}

function changeStepListener ( event ) {
  let val = event.target.value
  let current = Number(event.target.dataset.current)

  let arr = event.target.dataset.steps.split(',')
  let arr_number = arr.map(parseFloat)
  let current_index = arr_number.indexOf(current)   /* Индекс текущего шага шкалы в массиве */

  if (current < val) {

      console.log('вверх')
      event.target.dataset.current = arr_number[current_index - 1]
      event.target.value = arr_number[current_index - 1]

  } else if (current > val) {

    console.log('вниз')
    event.target.dataset.current = arr_number[current_index + 1]
    event.target.value = arr_number[current_index + 1]

  }
}

function reScale ( new_scale_arr, current_inst ) {
  let scale_arr = new_scale_arr[0]
  let current_ranger = document.querySelectorAll('.ranger__scale')
  for ( let elem of current_ranger ) {
    if ( elem.dataset.inst == current_inst ) {
      let parent = elem.parentNode

      elem.remove()

      let scale = new Scale ();
      scale.setAttribute ( 'data-inst', current_inst )
      scale.setAttribute ( 'data-min', scale_arr [0] )
      scale.setAttribute ( 'data-max', scale_arr [ scale_arr.length - 1 ] )
      // scale.setAttribute ( 'data-scale', scale_arr )  /* Не пригодилось, может удалить */
      for ( let el of scale_arr ) {
        let span = document.createElement ( 'span' )
        span.classList.add ( 'ranger__scale-span' )
        span.innerHTML = el
        scale.appendChild ( span )
      }
      scale.appendTo ( parent );

    }
  }
  
}



