// import { makeScale, reScale, modifyScaleInput } from './scale.js'
// import { showTip, hideTip, reValueTip } from './tipToggler.js'
// import { orientationToggler } from './orientToggler.js'
// import { resetBtnCoord } from './mouse.js'
import { makeScale, reScale, modifyScaleInput } from '../js/scale.js'
import { oneRunner, twoRunners } from './runnerToggler.js'
import { showTip, hideTip, reValueTip } from '../js/tipToggler.js'
import { orientationToggler } from '../js/orientToggler.js'
import { resetBtnCoord } from '../js/mouse.js'

export function allChecksListener (event: KeyboardEvent) {    /* Переключение количества ползунков через панель */
    let elem = event.target as HTMLInputElement   /* HTMLInputElement - т.к. метода checked нет для HTMLElement */
    let { run } = elem.dataset 
    let { discrete } = elem.dataset
    let { tip } = elem.dataset
    let { orient } = elem.dataset

    // let ranger = event.target.parentNode.parentNode.childNodes[1].firstChild
    let ranger: HTMLElement = elem.parentNode.parentNode.querySelector('.ranger')
    let config: HTMLElement = elem.parentNode.parentNode.querySelector('.zdslider-config') 
    let orientation: string = config.dataset.orientation /*  Извлечение из конфига флага ориентации */ 
    let instant: string = config.dataset.inst /*  Извлечение из конфига номера экземпляра слайдера */ 

    if ( run && elem.checked) {
      oneRunner ( elem )
      hideTip ( elem)         /* Скрываю надписи */
      resetBtnCoord ( event )
    } else if ( run && (!elem.checked)) {
      twoRunners ( elem, instant )
      hideTip ( elem )
      resetBtnCoord ( event )
    }

    if ( discrete && elem.checked ) {         /* Дискретный / плавный ход */
        ranger.setAttribute('data-discrete', 'yes')   /* УБРАТЬ!!!!!!!!!!!!!! */
        config.dataset.discrete = 'yes'
    } else if ( discrete && !elem.checked ) {
        ranger.setAttribute('data-discrete', 'no')       /* УБРАТЬ!!!!!!!!!!!!!! */
        config.dataset.discrete = 'no'     
    }

    if ( tip && elem.checked ) {            /* Подписи к бегунам */
      let element = event.target
      showTip ( element, orientation )
    } else if ( tip && !elem.checked ) {
      hideTip ( elem, orientation)
    }

    if ( orient && elem.checked ) {         /* Смена ориентации */
      config.dataset.orientation = 'vertical'     /* Передача в конфиг флага ориентации */
      orientation = config.dataset.orientation /*  Извлечение из конфига флага ориентации */
      orientationToggler ( elem, orientation )
      resetBtnCoord ( event )
    } else if ( orient && ( elem.checked == false ) ) {
      config.dataset.orientation = 'horizontal'
      orientation = config.dataset.orientation 
      orientationToggler ( elem, orientation ) 
      resetBtnCoord ( event )     
    }
}

export function changeMinListener ( event: KeyboardEvent ) {
  let elem = event.target as HTMLInputElement
  let config: HTMLElement = elem.parentNode.parentNode.querySelector('.zdslider-config')
  let parent = elem.parentNode
  let min = Number ( elem.value )
  let max_input: HTMLInputElement = parent.querySelector('.zdslider-panel__max')
  let max = Number ( max_input.value )
  let step = 1                                   /* Указал произвольный шаг */
  let new_scale_arr = makeScale ( min, max, step )

  config.dataset.min = String ( min )    /* Передаю в конфиг */
  config.dataset.max = String ( max )

  reValueTip ( elem )

  let iteration = new_scale_arr[1]
  let iterations_arr = new_scale_arr[2]
  modifyScaleInput ( parent, iteration, iterations_arr )

  let current_inst: string = config.dataset.inst          /* ВНИМАНИЕ!!!! Здесь определил числовое значение как строку */
  max_input.setAttribute('min', String ( min ))           /* Ограничитель, чтобы max не превышал min */
  reScale ( new_scale_arr[0], current_inst )                 /* Перестроение шкалы по новому значению min */
}
 
export function changeMaxListener ( event: KeyboardEvent ) {
  let elem = event.target as HTMLInputElement
  let config: HTMLElement = elem.parentNode.parentNode.querySelector('.zdslider-config')
  let parent = elem.parentNode
  let min_input: HTMLInputElement = parent.querySelector('.zdslider-panel__min')
  let min = Number ( min_input.value )
  let max = Number ( elem.value )
  let step = 1                                   /* Указал произвольный шаг */
  let new_scale_arr = makeScale ( min, max, step ) /* получение массивов */

  config.dataset.min = String ( min )    /* Передаю в конфиг */
  config.dataset.max = String ( max )

  reValueTip ( elem )

  let iteration = new_scale_arr[1]
  let iterations_arr = new_scale_arr[2]
  modifyScaleInput ( parent, iteration, iterations_arr )
  
  let current_inst = config.dataset.inst
  min_input.setAttribute('max', String ( max ))     /* Ограничитель, чтобы min не превышал max */
  reScale ( new_scale_arr[0], current_inst )      /* Перестроение шкалы по новому значению min */
}
 
export function changeStepListener ( event: KeyboardEvent ) {
  let elem = event.target as HTMLInputElement
  let config: HTMLElement = elem.parentNode.parentNode.querySelector('.zdslider-config')
  let parent = elem.parentNode
  let min_input: HTMLInputElement = parent.querySelector('.zdslider-panel__min')
  let max_input: HTMLInputElement = parent.querySelector('.zdslider-panel__max')

  let min = Number ( min_input.value )
  let max = Number ( max_input.value )

  let val = Number ( elem.value )
  let current = Number ( elem.dataset.current )

  let arr = elem.dataset.steps.split(',')
  let arr_number = arr.map(parseFloat)
  let current_index = arr_number.indexOf ( current )   /* Индекс текущего шага шкалы в массиве */

  if ( current < val ) {

      elem.dataset.current = String ( arr_number[current_index - 1] )
      elem.value = String ( arr_number[current_index - 1] )

  } else if ( current > val ) {

    elem.dataset.current = String ( arr_number[current_index + 1]) 
    elem.value = String ( arr_number[current_index + 1] )

  }

  let current_inst = config.dataset.inst
  let step = Number ( elem.value )    /* val после изменения на значение из массива */
  let new_scale_arr = makeScale ( min, max, step )
  reScale ( new_scale_arr[0], current_inst )    /* Перестроение шкалы по новому значению шага */
}

window.addEventListener('resize', function () {             /* Сдвиг бегунов при изменении размера окна */
  let config: HTMLElement = document.body.querySelector('.zdslider-config')
  let ranger: HTMLElement = document.body.querySelector('.ranger')
  let interval: HTMLElement = document.body.querySelector('.ranger__interval')
  let btn1: HTMLElement = document.body.querySelector('[data-type="btn-first"]')
  let btn2: HTMLElement = document.body.querySelector('[data-type="btn-second"]')

  let btn1InitPos: string = config.dataset.btn1_init_pos
  let btn2InitPos: string = config.dataset.btn2_init_pos
  if ( ranger.offsetWidth == Number ( btn2InitPos ) || ranger.offsetWidth < Number ( btn2InitPos ) ||
     ranger.offsetWidth == Number ( btn1InitPos ) || ranger.offsetWidth < Number ( btn1InitPos )) {
    config.dataset.btn2_init_pos = String ( ranger.offsetWidth - btn2.offsetWidth )
    btn1.style.marginLeft = 0 + 'px'
    btn2.style.marginLeft = config.dataset.btn2_init_pos + 'px'
    // interval.style.marginLeft = config.dataset.btn1_init_pos + 'px'
    interval.style.marginLeft = 0 + 'px'
    interval.style.width = config.dataset.btn2_init_pos + 'px'
    console.log(btn1InitPos)
  }
})