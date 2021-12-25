import { makeScale, reScale, modifyScaleInput } from './scale.js'
import { oneRunner, twoRunners } from './runnerToggler.js'
import { showTip, hideTip, reValueTip } from './tipToggler.js'
import { toHorizontal, toVertical } from './orientToggler.js'

export function allChecksListener (event) {    /* Переключение количества ползунков через панель */
    let { inst } = event.target.dataset
    let { run } = event.target.dataset 
    let { discrete } = event.target.dataset
    let { tip } = event.target.dataset
    let { orient } = event.target.dataset
    let orientation = event.target.parentNode.parentNode.childNodes[1].dataset.orientation

    if ( run && event.target.checked) {
      oneRunner ( event, inst )
    } else if ( run && (!event.target.checked)) {
      twoRunners ( event, inst )  
    }

    let ranger = event.target.parentNode.parentNode.childNodes[1].firstChild
    if ( discrete && event.target.checked ) {         /* Дискретный / плавный ход */
        ranger.setAttribute('data-discrete', 'yes')
    } else if ( discrete && !event.target.checked ) {
        ranger.setAttribute('data-discrete', 'no')       
    }

    if ( tip && event.target.checked ) {            /* Подписи к бегунам */
      showTip ( event )
    } else if ( tip && !event.target.checked ) {
      hideTip ( event )
    }

    if ( orient && event.target.checked ) {         /* Смена ориентации */
      toVertical ( event )
    } else if ( orient && !event.target.checked ) {
      toHorizontal ( event )
    }
  }

  export function changeMinListener ( event ) {
    let parent = event.target.parentNode
    let min = Number ( event.target.value )
    let max_input = parent.querySelector('.zdslider-config__max')
    let max = Number ( max_input.value )
    let step = 1                                   /* Указал произвольный шаг */
    let new_scale_arr = makeScale ( min, max, step )

    event.target.setAttribute('data-min', min)
    event.target.setAttribute('data-max', max)

    reValueTip ( event, parent )
 
    modifyScaleInput ( parent, new_scale_arr )
 
    let current_inst = event.target.parentNode.dataset.inst
    max_input.setAttribute('min', min)           /* Ограничитель, чтобы max не превышал min */
    reScale ( new_scale_arr, current_inst )      /* Перестроение шкалы по новому значению min */
 }
 
 export function changeMaxListener ( event ) {
    let parent = event.target.parentNode
    let min_input = parent.querySelector('.zdslider-config__min')
    let min = Number ( min_input.value )
    let max = Number ( event.target.value )
    let step = 1                                   /* Указал произвольный шаг */
    let new_scale_arr = makeScale ( min, max, step ) /* получение массивов */

    event.target.setAttribute('data-min', min)
    event.target.setAttribute('data-max', max)

    reValueTip ( event, parent )
 
    modifyScaleInput ( parent, new_scale_arr )
    
    let current_inst = event.target.parentNode.dataset.inst
    min_input.setAttribute('max', max)     /* Ограничитель, чтобы min не превышал max */
    reScale ( new_scale_arr, current_inst )      /* Перестроение шкалы по новому значению min */
 }
 
 export function changeStepListener ( event ) {
   let parent = event.target.parentNode
   let min_input = parent.querySelector('.zdslider-config__min')
   let max_input = parent.querySelector('.zdslider-config__max')
 
   let min = Number ( min_input.value )
   let max = Number ( max_input.value )
 
   let val = event.target.value
   let current = Number ( event.target.dataset.current )
 
   let arr = event.target.dataset.steps.split(',')
   let arr_number = arr.map(parseFloat)
   let current_index = arr_number.indexOf ( current )   /* Индекс текущего шага шкалы в массиве */
 
   if ( current < val ) {
 
       event.target.dataset.current = arr_number[current_index - 1]
       event.target.value = arr_number[current_index - 1]
 
   } else if ( current > val ) {
 
     event.target.dataset.current = arr_number[current_index + 1]
     event.target.value = arr_number[current_index + 1]
 
   }
 
   let current_inst = event.target.parentNode.dataset.inst
   let step = Number ( event.target.value )    /* val после изменения на значение из массива */
   // console.log('min: ', min, 'max: ', max, 'step: ', step, 'inst: ', current_inst)
   let new_scale_arr = makeScale ( min, max, step )
   // console.log(new_scale_arr)
   reScale ( new_scale_arr, current_inst )    /* Перестроение шкалы по новому значению шага */
 }

