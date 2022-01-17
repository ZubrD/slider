import { makeScale, reScale, modifyScaleInput } from './scale.js'
import { oneRunner, twoRunners } from './runnerToggler.js'
import { showTip, hideTip, reValueTip } from './tipToggler.js'
import { orientationToggler } from './orientToggler.js'
import { resetBtnCoord } from './mouse.js'
import { getCoords } from './scale.js'

export function allChecksListener (event) {    /* Переключение количества ползунков через панель */
    let { run } = event.target.dataset 
    let { discrete } = event.target.dataset
    let { tip } = event.target.dataset
    let { orient } = event.target.dataset

    let ranger = event.target.parentNode.parentNode.childNodes[1].firstChild
    let config = event.target.parentNode.parentNode.querySelector('.zdslider-config') 
    let orientation = config.dataset.orientation /*  Извлечение из конфига флага ориентации */ 
    let instant = config.dataset.inst /*  Извлечение из конфига номера экземпляра слайдера */ 

    if ( run && event.target.checked) {
      oneRunner ( event, instant )
      hideTip (event)         /* Скрываю надписи */
      resetBtnCoord ( event )
    } else if ( run && (!event.target.checked)) {
      twoRunners ( event, instant )
      hideTip (event)
      resetBtnCoord ( event )
    }

    if ( discrete && event.target.checked ) {         /* Дискретный / плавный ход */
        ranger.setAttribute('data-discrete', 'yes')   /* УБРАТЬ!!!!!!!!!!!!!! */
        config.dataset.discrete = 'yes'
    } else if ( discrete && !event.target.checked ) {
        ranger.setAttribute('data-discrete', 'no')       /* УБРАТЬ!!!!!!!!!!!!!! */
        config.dataset.discrete = 'no'     
    }

    if ( tip && event.target.checked ) {            /* Подписи к бегунам */
      showTip ( event, orientation )
    } else if ( tip && !event.target.checked ) {
      hideTip ( event, orientation)
    }

    if ( orient && event.target.checked ) {         /* Смена ориентации */
      config.dataset.orientation = 'vertical'     /* Передача в конфиг флага ориентации */
      orientation = config.dataset.orientation /*  Извлечение из конфига флага ориентации */
      orientationToggler ( event, orientation )
      resetBtnCoord ( event )
    } else if ( orient && ( event.target.checked == false ) ) {
      config.dataset.orientation = 'horizontal'
      orientation = config.dataset.orientation 
      orientationToggler ( event, orientation ) 
      resetBtnCoord ( event )     
    }
}

export function changeMinListener ( event ) {
  let config = event.target.parentNode.parentNode.querySelector('.zdslider-config')
  let parent = event.target.parentNode
  let min = Number ( event.target.value )
  let max_input = parent.querySelector('.zdslider-panel__max')
  let max = Number ( max_input.value )
  let step = 1                                   /* Указал произвольный шаг */
  let new_scale_arr = makeScale ( min, max, step )

  config.dataset.min = min    /* Передаю в конфиг */
  config.dataset.max = max

  reValueTip ( event, parent )

  modifyScaleInput ( parent, new_scale_arr )

  let current_inst = config.dataset.inst
  max_input.setAttribute('min', min)           /* Ограничитель, чтобы max не превышал min */
  reScale ( new_scale_arr, current_inst )      /* Перестроение шкалы по новому значению min */
}
 
export function changeMaxListener ( event ) {
  let config = event.target.parentNode.parentNode.querySelector('.zdslider-config')
  let parent = event.target.parentNode
  let min_input = parent.querySelector('.zdslider-panel__min')
  let min = Number ( min_input.value )
  let max = Number ( event.target.value )
  let step = 1                                   /* Указал произвольный шаг */
  let new_scale_arr = makeScale ( min, max, step ) /* получение массивов */

  config.dataset.min = min    /* Передаю в конфиг */
  config.dataset.max = max

  reValueTip ( event, parent )

  modifyScaleInput ( parent, new_scale_arr )
  
  let current_inst = config.dataset.inst
  min_input.setAttribute('max', max)     /* Ограничитель, чтобы min не превышал max */
  reScale ( new_scale_arr, current_inst )      /* Перестроение шкалы по новому значению min */
}
 
export function changeStepListener ( event ) {
  let config = event.target.parentNode.parentNode.querySelector('.zdslider-config')
  let parent = event.target.parentNode
  let min_input = parent.querySelector('.zdslider-panel__min')
  let max_input = parent.querySelector('.zdslider-panel__max')

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

  let current_inst = config.dataset.inst
  let step = Number ( event.target.value )    /* val после изменения на значение из массива */
  // console.log('min: ', min, 'max: ', max, 'step: ', step, 'inst: ', current_inst)
  let new_scale_arr = makeScale ( min, max, step )
  // console.log(new_scale_arr)
  reScale ( new_scale_arr, current_inst )    /* Перестроение шкалы по новому значению шага */
}

window.addEventListener('resize', function () {             /* Сдвиг бегунов при изменении размера окна */
  let config = document.body.querySelector('.zdslider-config')
  let ranger = document.body.querySelector('.ranger')
  let interval = document.body.querySelector('.ranger__interval')
  let btn1 = document.body.querySelector('[data-type="btn-first"]')
  let btn2 = document.body.querySelector('[data-type="btn-second"]')

  let btn1InitPos = config.dataset.btn1_init_pos
  let btn2InitPos = config.dataset.btn2_init_pos
  if ( ranger.offsetWidth == btn2InitPos || ranger.offsetWidth < btn2InitPos ||
     ranger.offsetWidth == btn1InitPos || ranger.offsetWidth < btn1InitPos) {
    config.dataset.btn2_init_pos = ranger.offsetWidth - btn2.offsetWidth
    btn1.style.marginLeft = 0 + 'px'
    btn2.style.marginLeft = config.dataset.btn2_init_pos + 'px'
    // interval.style.marginLeft = config.dataset.btn1_init_pos + 'px'
    interval.style.marginLeft = 0 + 'px'
    interval.style.width = config.dataset.btn2_init_pos + 'px'
    console.log(btn1InitPos)
  }
  // console.log(interval)
})