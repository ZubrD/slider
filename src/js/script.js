import { Ranger, Interval, Button, Config, Scale, Division } from './view.js'
import { changeMinListener, changeMaxListener, changeStepListener, allChecksListener } from './listeners.js'

window.onload = sliderInit ()

function sliderInit () {
  let config = new Config()
  let runner_number = config.runner_number
  let min = config.min
  let max = config.max
  // let step = config.step
  let step = 1
  let discrete = config.discrete

  let scale_arrs = makeScale (min, max, step)
  let scale_arr = scale_arrs [ 0 ]        /* Массив значений шкалы */
  let iteration = scale_arrs [ 1 ]
  let iterations_arr = scale_arrs [ 2 ]

   
  let elements = document.querySelectorAll('.zdslider');
  if ( elements.length != 0 ) {

    setStructure ( runner_number, min, max, discrete, scale_arr, iteration, iterations_arr )  /* Создание структуры слайдера */

    sliderPositioning ( runner_number )  /* Первоначальное размещение слайдера */

  }

  let number_of_sliders = document.querySelectorAll('.zdslider-config')
  for (let elem of number_of_sliders) {
    elem.addEventListener('click', allChecksListener)  /* Слушатель переключателей */
  }

}

  
function setStructure (runners, min, max, discrete, scale_arr, iteration, iterations_arr) {    /* Структура слайдера */
  let elements = document.querySelectorAll('.zdslider');
  let counter = 1     /* Счётчик количества слайдеров для создания атрибутов */
  let i = 0;         /*  Счётчик цикла для опр-я номера ranger в массиве */
  
  for ( let elem of elements ) {
      let ranger = new Ranger();
      ranger.appendTo(elem)
      ranger.setAttribute ('data-inst', counter);
      ranger.setAttribute ('data-runners', runners);
      ranger.setAttribute ('data-discrete', discrete);
      ranger.setAttribute ('data-tip', 'no');
      ranger.setAttribute('data-scale_length', scale_arr.length)  /* Для дискретного перемещения */

      let interval = new Interval();
      let ranger_div = document.querySelectorAll('.ranger')[i]
      interval.setAttribute('data-inst', counter);
      interval.appendTo(ranger_div)

      if ( runners == 2 ) {
        let button_1 = new Button();
        let button_2 = new Button();
        button_1.setAttribute('data-type', 'btn-first');
        button_1.setAttribute('data-inst', counter);
        button_1.setAttribute('data-tip', min);
        button_2.setAttribute('data-type', 'btn-second');
        button_2.setAttribute('data-inst', counter);
        button_2.setAttribute('data-tip', max);
        button_1.appendTo(ranger_div);
        button_2.appendTo(ranger_div);
      } else {
        let button_1 = new Button();
        button_1.setAttribute('data-type', 'btn-first');
        button_1.setAttribute('data-inst', counter);
        button_1.setAttribute('data-tip',max);
        button_1.appendTo(ranger_div);
      }


      let division = new Division ();
      division.setAttribute ('data-inst', counter)

      for ( let el of scale_arr ) {
        let span = document.createElement ( 'span' )
        span.classList.add ( 'ranger__scale-division-span' )
        // span.innerHTML = el
        division.appendChild ( span )
      }
      division.appendTo ( elem );  


      let scale = new Scale ();
      scale.setAttribute ( 'data-inst', counter )
      // scale.setAttribute ( 'data-min', scale_arr [0] )
      // scale.setAttribute ( 'data-max', scale_arr [ scale_arr.length - 1 ] )
      // scale.setAttribute ( 'data-scale', scale_arr )  
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
      } else {      /* Если интервалов для шкалы нет, то делаю инпут неактивным */
        conf_input_step.disabled = true
      }

      conf_input_step.value = conf_input_step.dataset.iteration

      conf_input_step.addEventListener('input', changeStepListener)

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
      button_1.style.marginLeft = (ranger.offsetWidth-button_1.offsetWidth) + 2 + 'px';
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



export function makeScale (min, max, step) {     /* Массив значений для шкалы по умолчанию */
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
    
    iteration = range / maximus
    if ( step > 1 ) {                         /* Переопределение - этот участок кода */
      iteration = step                        /* применяется при изменении размера */
      maximus = range / iteration             /* шага через панель */
    }
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


export function reScale ( new_scale_arr, current_inst ) {
  let scale_arr = new_scale_arr[0]
  let parents = document.querySelectorAll('.zdslider')
  for ( let parent of parents ) {
    if ( parent.dataset.inst == current_inst ) {

      let current_ranger = parent.querySelector('.ranger')
      let current_scale = parent.querySelector('.ranger__scale')
      let current_division = parent.querySelector('.ranger__scale-division')
      current_scale.remove()
      current_division.remove()

      current_ranger.setAttribute('data-scale_length', scale_arr.length)    /* Для дискретного перемещения */
      let division = new Division ();
      division.setAttribute ('data-inst', current_inst)
      for ( let el of scale_arr ) {
        let span = document.createElement ( 'span' )
        span.classList.add ( 'ranger__scale-division-span' )
        division.appendChild ( span )
      }
      division.appendTo ( parent );  

      let scale = new Scale ();
      scale.setAttribute ( 'data-inst', current_inst )
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


export function modifyScaleInput ( parent, new_scale_arr ) {   /* Изменение инпута переключения шага  */
  let conf_input_step = parent.querySelector('.zdslider-config__step')
  let iterations_arr = new_scale_arr[2]
  let iteration = new_scale_arr[1]
  conf_input_step.setAttribute ('data-steps', iterations_arr)
  conf_input_step.setAttribute ('data-iteration', iteration)
  conf_input_step.setAttribute ('data-current', iteration)
  if ( iterations_arr.length != 0 ) {
   conf_input_step.disabled = false 
   conf_input_step.setAttribute ('max', iterations_arr[0])
   conf_input_step.setAttribute ('min', iterations_arr[iterations_arr.length - 1])
 } else {      /* Если интервалов для шкалы нет, то делаю инпут неактивным */
   conf_input_step.disabled = true
 }
 conf_input_step.value = conf_input_step.dataset.iteration
}

// min - 14, max - 235 - получается Infinity, 9.12.2021


